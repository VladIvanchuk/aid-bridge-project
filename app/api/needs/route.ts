import dbConnect from "@/lib/mongodb";
import Need from "@/models/need";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const needs = await Need.find({});
      res.status(200).json(needs);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  } else {
    // Optionally handle other methods or send a method not allowed response
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
