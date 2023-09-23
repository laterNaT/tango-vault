import type { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const options: NextAuthOptions = {
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
      authorize(credentials) {
        const user = {
          id: "1234",
          name: "bob",
          password: "nextauth",
          aa: "aaa",
        };
        if (
          credentials?.username == user.name &&
          credentials?.password == user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };
