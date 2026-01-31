import { model, Schema } from "mongoose";

enum TagTypes {
  TECH = "technology",
  POLITICS = "politics",
  HEALTH = "health",
}

const UserSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true },
);

const ContentSchema = new Schema(
  {
    link: String,
    type: { type: String, required: true },
    title: { type: String, required: true },
    tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true },
);

const TagSchema = new Schema({
  tag: { type: String, required: true },
});

const LinkSchema = new Schema(
  {
    hash: String,
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true },
);

export const userModel = model("User", UserSchema);
export const contentModel = model("Content", ContentSchema);
export const tagModel = model("Tag", TagSchema);
export const linkModel = model("Link", LinkSchema);
