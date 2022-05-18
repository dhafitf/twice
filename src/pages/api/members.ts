import { NextApiHandler } from "next";
import members from "~lib/members.json";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    try {
      return res.status(200).json(members);
    } catch (err: unknown) {
      return res.status(400).json({ message: "An error occured" });
    }
  }

  return res.status(404).json({ message: "Not found" });
};

export default handler;
