import UserData from "@/app/_models/user-data";
import { dbConnect } from "@/app/_helpers/server/db-setup";

export async function newCollection({
  id,
  name,
  category,
}: {
  id: string;
  name: string;
  category: string;
}) {
  try {
    // todo: check if collection already created with same name
    await dbConnect(); // todo: we have to have this line or we cant connect to mongoDB

    await UserData.updateOne(
      { userId: id },
      { $push: { collections: { name, category } } },
    );
  } catch (e) {
    console.log(e);
  }
}
