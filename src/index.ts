import express from "express";
import type { Request, Response } from "express";
import { UserModel } from "./db.js";
import jwt from "jsonwebtoken";

const app = express();

app.use(express.json());

app.post("/api/v1/vault/signup", async (req: Request, res: Response) => {
  const username = req.body.username;
  const email = req.body.username;
  const password = req.body.password;

  try {
    await UserModel.create({ username, email, password });
  } catch (err) {
    res.status(411).json({
      message: "user already exists",
    });
  }

  res.json({
    message: "completed",
  });
});

app.post("/api/v1/vault/signin", async (req: Request, res: Request) => {
  const email = req.body.email;
  const password = req.body.password;
  const existingUser = await UserModel.findOne({ email, password });

  if (!existingUser) {
    const token = jwt.sign(
      {
        id: existingUser._id,
      },
      process.env.JWT_SECRET,
    );

    res.json({ token });
  } else {
    res.status(403).json({ message: "Invalid Credentials" });
  }
});

app.post("/api/v1/vault/content", (req: Request, res: Request) => {});

app.get("/api/v1/vault/content", (req: Request, res: Request) => {});

app.post("/api/v1/vault/share", (req: Request, res: Request) => {});

app.get("/api/v1/vault/:sharelink", (req: Request, res: Request) => {});

export default app;
