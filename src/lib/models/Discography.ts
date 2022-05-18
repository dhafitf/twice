import { Schema, model, models } from "mongoose";

const DiscographySchema = new Schema(
  {
    _id: Number,
    type: String,
    country: String,
    name: String,
    releaseDate: String,
    coverArt: String,
    tracks: Array,
    spotifyLink: String,
  },
  { _id: false }
);

const Discography = models.Discography || model("Discography", DiscographySchema, "Discography");
export default Discography;
