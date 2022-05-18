import { NextApiHandler } from "next";
import { dbConnect } from "~lib/utils/dbConnect";
import { Discography } from "~lib/models";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    try {
      await dbConnect();
      const discographyDB = await Discography.find().sort({ _id: -1 });
      return res.json(discographyDB);
    } catch (err: unknown) {
      return res.status(400).json({ message: "An error occured" });
    }
  }

  return res.status(404).json({ message: "Not found" });
};

export default handler;
