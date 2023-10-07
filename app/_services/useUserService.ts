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
      return new Error("Error registering user");
    } else {
      return new Response("User registered", { status: 201 });
    }
  } catch (err: any) {
    console.log("Error registering user", err.message);
  }
}

export function useUserService() {
  return {
    register,
  };
}
