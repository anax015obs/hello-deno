import type { APIRequest } from "aleph/types";

export default async function handler(req: APIRequest) {
  const count = parseInt(localStorage.getItem("count") || "0");
  req.json({ count });
}
