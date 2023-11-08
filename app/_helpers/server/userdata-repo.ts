import UserData from "@/app/_models/user-data";
import { dbConnect } from "@/app/_helpers/server/db-setup";

export async function createCollectionDB({
  id,
  name,
  category,
}: {
  id: string;
  name: string;
  category: string;
}) {
  try {
    await dbConnect(); // todo: we have to have this line or we cant connect to mongoDB

    const existingCollection = await UserData.findOne({
      userId: id,
      "collections.name": name,
    });

    if (existingCollection) {
      throw new Error("Collection with the same name already exists");
    }

    await UserData.updateOne(
      { userId: id },
      { $push: { collections: { name, category } } },
    );
  } catch (e) {
    console.log(e);
    if (e instanceof Error) {
      throw new Error(`Error in createCollectionDB: ${e.message}`);
    }
  }
}

// export async function getCollectionsDB(id: string) {
//   try {
//     const userData = await UserData.findOne({ userId: id });
//     if (!userData) {
//       throw new Error("Could not find userData");
//     }
//     return userData.collections;
//   } catch (e) {
//     if (e instanceof Error) {
//       throw new Error(`Error in getCollections: ${e.message}`);
//     }
//   }
// }
