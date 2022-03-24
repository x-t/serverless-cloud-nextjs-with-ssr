// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { data } from "@serverless/cloud";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { items } = (await data.get("user:*")) as { items: any[] };
  res.status(200).json({ users: items.map((item) => item.value) });
}
