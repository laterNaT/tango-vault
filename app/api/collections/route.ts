import { NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { OPTIONS } from "@/app/_config/options";
import { newCollection as newCollectionDB } from "@/app/_helpers/server/userdata-repo";

import { z } from "zod";

const schema = z.object({
  name: z.string(),
  category: z.string(),
});

async function newCollection(req: Request, res: NextApiResponse) {
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

    await newCollectionDB({ id, ...data });

    return new Response("New collection created successfully", { status: 200 });
  } catch (e) {
    console.log(e);
    return new Response("Internal server error", { status: 500 });
  }
}

export { newCollection as POST };
