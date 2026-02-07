import express from "express";
import { UserModel } from "./db.js";
import jwt from "jsonwebtoken";
const app = express();
app.use(express.json());
app.post("/api/v1/vault/signup", async (req, res) => {
    const username = req.body.username;
    const email = req.body.username;
    const password = req.body.password;
    try {
        await UserModel.create({ username, email, password });
    }
    catch (err) {
        res.status(411).json({
            message: "user already exists",
        });
    }
    res.json({
        message: "completed",
    });
});
app.post("/api/v1/vault/signin", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const existingUser = await UserModel.findOne({ email, password });
    if (!existingUser) {
        const token = jwt.sign({
            id: existingUser._id,
        }, process.env.JWT_SECRET);
        res.json({ token });
    }
    else {
        res.status(403).json({ message: "Invalid Credentials" });
    }
});
app.post("/api/v1/vault/content", (req, res) => { });
app.get("/api/v1/vault/content", (req, res) => { });
app.post("/api/v1/vault/share", (req, res) => { });
app.get("/api/v1/vault/:sharelink", (req, res) => { });
export default app;
//# sourceMappingURL=index.js.map