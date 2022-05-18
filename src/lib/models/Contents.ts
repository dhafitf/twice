import { Schema, model, models } from "mongoose";

const ContentSchema = new Schema(
  {
    _id: Number,
    tag: String,
    title: String,
    href: String,
    thumb: String,
  },
  { _id: false }
);

const Contents = models.Contents || model("Contents", ContentSchema, "Contents");
export default Contents;
