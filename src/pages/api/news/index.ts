import { NextApiHandler } from "next";
import { dbConnect } from "~lib/utils/dbConnect";
import { News } from "~lib/models";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    try {
      await dbConnect();
      const newsDB = await News.find().sort({ _id: -1 });
      return res.json(newsDB);
    } catch (err: unknown) {
      return res.status(400).json({ message: "An error occured" });
    }
  }

  return res.status(404).json({ message: "Not found" });
};

export default handler;
