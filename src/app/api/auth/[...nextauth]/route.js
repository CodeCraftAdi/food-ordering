import clientPromise from "@/app/libs/mongoConnect";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import { User } from "@/app/models/User";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";

export const authOptions = {
  secret: process.env.SECRET,
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        username: { label: "Email", type: "email", placeholder: "test@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.username;
        const password = credentials?.password;

        await mongoose.connect(process.env.MONGO_URL);

        const user = await User.findOne({ email });
        if (user && bcrypt.compareSync(password, user.password)) {
          return user;
        }
        return null;
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

// ✅ Ensure ONLY `GET` and `POST` are exported
export { handler as GET, handler as POST };
