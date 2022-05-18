import { NextApiHandler } from "next";
import { dbConnect } from "~lib/utils/dbConnect";
import { Contents } from "~lib/models";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const key = req.query.key;

      if (key === `${process.env.NEXT_PUBLIC_CONTENT_API_KEY}`) {
        await dbConnect();
        const contentDB = await Contents.find().sort({ _id: -1 }).limit(3);
        return res.json(contentDB);
      }

      return res.status(200).json({ message: "Invalid key" });
    } catch (err: unknown) {
      return res.status(400).json({ message: "An error occured" });
    }
  }

  return res.status(404).json({ message: "Not found" });
};

export default handler;
