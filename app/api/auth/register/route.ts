import { registerUser } from "@/app/_helpers/server/users-repo";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  username: z.string(),
  password: z.string(),
});

async function register(req: NextRequest) {
  try {
    const body = await req.json();
    const result = schema.safeParse(body);

    if (!result.success) {
      return new Response("Missing username or password", { status: 400 });
    }

    const { username, password } = result.data;

    await registerUser({ username, password });
  } catch (err: unknown) {
    if (err instanceof Error) {
      if (err.message === "Username already exists") {
        return new Response(err.message, { status: 409 });
      }
    }
    return new Response("Internal server error", { status: 500 });
  }
  return new Response("User registered", { status: 201 });
}

export { register as POST };
