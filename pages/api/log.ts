// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    // Process a POST request
    console.log(req.body);
    res.status(200).json({ message: "logged successsfully" });
  } else {
    // Handle any other HTTP method
    res.status(405).json({ message: "method not allowed" });
  }
}
