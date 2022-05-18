import { Schema, model, models } from "mongoose";

const NewsSchema = new Schema(
  {
    _id: Number,
    title: String,
    date: String,
    htmlContent: String,
  },
  { _id: false }
);

const News = models.News || model("News", NewsSchema, "News");
export default News;
