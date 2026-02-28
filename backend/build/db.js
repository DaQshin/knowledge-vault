import { model, Schema } from "mongoose";
var TagTypes;
(function (TagTypes) {
    TagTypes["TECH"] = "technology";
    TagTypes["POLITICS"] = "politics";
    TagTypes["HEALTH"] = "health";
})(TagTypes || (TagTypes = {}));
const UserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { timestamps: true });
const ContentSchema = new Schema({
    link: String,
    type: { type: String, required: true },
    title: { type: String, required: true },
    tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
}, { timestamps: true });
const TagSchema = new Schema({
    tag: { type: String, required: true },
});
const LinkSchema = new Schema({
    hash: String,
    userId: { type: Schema.Types.ObjectId, ref: "User" },
}, { timestamps: true });
export const UserModel = model("User", UserSchema);
export const ContentModel = model("Content", ContentSchema);
export const TagModel = model("Tag", TagSchema);
export const LinkModel = model("Link", LinkSchema);
//# sourceMappingURL=db.js.map