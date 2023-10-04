import { redirect } from "next/navigation";

async function register({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  try {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username, password: password }),
    });

    if (!res.ok) {
      console.log("Something went wrong");
      return;
    }

    redirect("/api/auth/signin");
  } catch (err: any) {
    console.log("Error registering user", err.message);
  }
}

export function useUserService() {
  return {
    register,
  };
}
