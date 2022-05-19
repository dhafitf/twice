import { Schema, model, models, Model } from "mongoose";
import { ContentItemProps } from "~types/components";

const ContentSchema = new Schema<ContentItemProps>({
  tag: String,
  title: String,
  href: String,
  thumb: String,
});

const Contents = (models.Contents as Model<ContentItemProps>) || model<ContentItemProps>("Contents", ContentSchema, "Contents");
export default Contents;
