import bcrypt from "bcrypt";
import { db } from "./db";
const User = db.User;

export async function registerUser({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  try {
    const user = await User.findOne({ username: username });

    if (user) {
      throw new Error("Username already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username: username,
      password: hashedPassword,
    });

    await newUser.save();
  } catch (e) {
    console.log(e);
    throw e;
  }
}
