import express from "express";
import { UserModel, ContentModel } from "./db.js";
import { authenticate } from "./middleware.js";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config.js";
const app = express();
app.use(express.json());
app.post("/api/v1/vault/signup", async (req, res) => {
    const { username, email, password } = req.body;
    try {
        await UserModel.create({ username, email, password });
    }
    catch (err) {
        return res.status(411).json({
            message: "user already exists",
        });
    }
});
app.post("/api/v1/vault/signin", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const existingUser = await UserModel.findOne({ email, password });
    if (!email || !password) {
        return res.status(400).json({ message: "Missing fields" });
    }
    if (!existingUser) {
        return res.status(403).json({ message: "Invalid Credentials" });
    }
    const token = jwt.sign({
        //@ts-ignore
        id: existingUser._id,
    }, JWT_SECRET, { expiresIn: "7d" });
    return res.json({ token });
});
app.post("/api/v1/vault/content", authenticate, async (req, res) => {
    const title = req.body.title;
    const link = req.body.link;
    const type = req.body.type;
    try {
        await ContentModel.create({
            link,
            type,
            title,
            //@ts-ignore
            userId: req.userId,
        });
    }
    catch (err) {
        console.log(err);
        return res.status(400).json({
            message: "Failed to upload the content",
        });
    }
    return res.json({
        message: "Content created",
    });
});
app.get("/api/v1/vault/content", authenticate, async (req, res) => {
    try {
        //@ts-ignore
        const userId = req.userId;
        const content = await ContentModel.find({ userId });
        res.json({
            content,
        });
    }
    catch (err) {
        res.json({
            message: "failed to fetch content",
        });
    }
});
app.get("/api/v1/vault/content/:contentId", authenticate, async (req, res) => {
    try {
        const { contentId } = req.params;
        const content = await ContentModel.find({ _id: contentId });
        res.json({
            content,
        });
    }
    catch (err) {
        res.json({
            message: "Failed to fetch content",
        });
    }
});
app.post("/api/v1/vault/share", (req, res) => { });
app.get("/api/v1/vault/:sharelink", (req, res) => { });
export default app;
//# sourceMappingURL=index.js.map