import { NextApiHandler } from "next";
import { dbConnect } from "~lib/utils/dbConnect";
import { Discography } from "~lib/models";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const id = req.query.id;

      await dbConnect();
      const filter = { _id: id };
      const discographyDB = await Discography.findOne(filter);
      return res.json(discographyDB);
    } catch (err: unknown) {
      return res.status(400).json({ message: "An error occured" });
    }
  }

  return res.status(404).json({ message: "Not found" });
};

export default handler;
