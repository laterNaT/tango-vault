import { NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { OPTIONS } from "@/app/_config/options";
import { createCollectionDB } from "@/app/_helpers/server/userdata-repo";

import { z } from "zod";

const schema = z.object({
  name: z.string(),
  category: z.string(),
});

async function createCollectionHandler(req: Request, res: NextApiResponse) {
  try {
    const session = await getServerSession(OPTIONS);

    if (!session || !session.user) {
      return new Response("Session error", { status: 401 });
    }

    const data = await req.json();
    const result = schema.safeParse(data);

    if (!result.success) {
      return new Response("Incorrect field values provided", { status: 400 });
    }

    const id = session.user.id;

    await createCollectionDB({ id, ...data });

    return new Response("New collection created successfully", { status: 200 });
  } catch (e) {
    console.log(e);
    return new Response("Internal server error", { status: 500 });
  }
}

/**
 * Returns list of users collections
 */
// async function getCollectionsHandler(req: Request) {
//   try {
//     const session = await getServerSession(OPTIONS);
//
//     if (!session || !session.user) {
//       return new Response("Session error", { status: 401 });
//     }
//
//     const id = session.user.id;
//
//     const res = await getCollectionsDB(id);
//
//     return new Response(res, { status: 200 });
//   } catch (e) {
//     console.log(e);
//     return new Response("Internal server error", { status: 500 });
//   }
// }

export { createCollectionHandler as POST };
