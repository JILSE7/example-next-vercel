// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";

const handler = (_:NextApiRequest, res:NextApiResponse<{name:string, age:number}>) => {
  res.status(200).json({ name: 'John Doe', age:16 })
}
