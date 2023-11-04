import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/app/_helpers/server/client-promise";
import { dbConnect } from "@/app/_helpers/server/db-setup";
import UserData from "@/app/_models/user-data";

export const OPTIONS: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise), // will populate token.sub property
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    signIn: async ({ user, account }) => {
      await dbConnect();
      console.log("user: ");
      console.log(user);

      let userData = await UserData.findOne({ userId: user.id });

      if (userData) {
        await UserData.updateOne(
          { userId: user.id },
          { $inc: { loginCount: 1 } },
        );
      } else if (!userData) {
        await UserData.create({
          userId: user.id,
          loginCount: 1,
          collections: [],
          totalCardCount: 0,
        });
      }
      return true;
    },
    jwt: async ({ token, user, account, profile }) => {
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (session.user && token.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
};
