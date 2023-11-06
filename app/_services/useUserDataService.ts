export async function createCollection({
  name,
  category,
}: {
  name: string;
  category: string;
}) {
  //
  try {
    const res = await fetch("/api/collections", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, category }),
    });

    if (!res.ok) {
      throw new Error("Error response to /api/collections"); // TODO: add global error service
    } else {
      return new Response("Collection created", { status: 201 });
    }
  } catch (err: any) {
    console.log("Error sending POST request to /api/collections", err.message);
  }
}
