import { NextApiHandler } from "next";
import { dbConnect } from "~lib/utils/dbConnect";
import { News } from "~lib/models";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const id = req.query.id;

      await dbConnect();
      const filter = { _id: id };
      const newsDB = await News.findOne(filter);
      return res.json(newsDB);
    } catch (err: unknown) {
      return res.status(400).json({ message: "An error occured" });
    }
  }

  return res.status(404).json({ message: "Not found" });
};

export default handler;
