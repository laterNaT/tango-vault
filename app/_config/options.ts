import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

import { db } from "@/app/_helpers/server/db";
const User = db.User;

export const OPTIONS: NextAuthOptions = {
  providers: [
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
        if (!credentials?.username || !credentials?.password) {
          return null;
        }

        const user = await User.findOne({ username: credentials.username });

        if (!user) {
          return null;
        }

        const match = await bcrypt.compare(credentials.password, user.password);

        if (!match) {
          return null;
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
