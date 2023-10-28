import type { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
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
};

const handler = NextAuth(OPTIONS);

export { handler as GET, handler as POST };
