import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { OPTIONS } from "@/app/_config/options";
import { newCollection as newCollectionDB } from "@/app/_helpers/server/userdata-repo";

async function newCollection(req: Request, res: NextApiResponse) {
  const session = await getServerSession(OPTIONS);
  if (!session) {
    // TODO: add middleware for securing all API routes
    return new Response("session error", { status: 401 });
  }

  const data = await req.json();
  const id = session?.user?.id;

  if (!id) {
    return new Response("session error", { status: 401 }); // todo: fix session type
  }

  const params = { id, ...data };

  // here we will call database function to actually save stuff, yeh
  await newCollectionDB(params);

  return new Response("hello", { status: 200 });
}

export { newCollection as POST };
