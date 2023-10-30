import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";
import { dbTypes } from "@/app/_helpers/server/db-types";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/app/_helpers/server/client-promise";
import { dbConnect } from "@/app/_helpers/server/db-setup";
const User = dbTypes.User;

export const OPTIONS: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Enter your username",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(credentials, req) {
        await dbConnect();

        if (!credentials?.username || !credentials?.password) {
          return null;
        }

        const user = await User.findOne({ username: credentials.username });

        if (!user) {
          return null; // TODO: throw error instead?
        }

        const match = await bcrypt.compare(credentials.password, user.password);

        if (!match) {
          return null; // TODO: throw error instead?
        }

        return {
          ...user.toObject(),
        };
      },
    }),
  ],
  // callbacks: {
  //   jwt: async ({ token, account }) => {
  //     console.log("inside jwt");
  //     console.log("account: ", account);
  //     console.log("token: ", token);
  //     return token;
  //   },
  //   session: async ({ session, token }) => {
  //     console.log("inside session");
  //     return session;
  //   },
  // },
};
