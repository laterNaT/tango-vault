import { registerUser } from "@/app/_helpers/server/users-repo";
import { NextRequest } from "next/server";

async function register(request: NextRequest) {
  const { username, password } = await request.json();

  if (!password || !password) {
    return new Response("Missing username or password", {status: 400})
  }

  try {
    await registerUser({username, password});
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
