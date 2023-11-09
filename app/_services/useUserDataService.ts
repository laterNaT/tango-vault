export async function createCollectionHelper({
  name,
  category,
}: {
  name: string;
  category: string;
}) {
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

export async function fetchCollectionsHelper() {
  try {
    const res = await fetch("/api/collections", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      throw new Error("Error response to /api/collections"); // TODO: add global error service
    } else {
      return res.json();
    }
  } catch (err: any) {
    console.log("Error sending GET request to /api/collections", err.message);
  }
}
