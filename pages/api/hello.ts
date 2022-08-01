import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  hobbies: string;
  occupation: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res
    .status(200)
    .json({
      name: "Josephine Leung",
      hobbies: "knitting, sewing, reading",
      occupation: "Product Manager",
    });
}
