import express from "express";
import type { Request, Response } from "express";
import { UserModel, ContentModel, LinkModel } from "./db.js";
import { authenticate } from "./middleware.js";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config.js";
import { randomString } from "./utils.js";

const app = express();
app.use(express.json());

app.post("/api/v1/vault/signup", async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  try {
    await UserModel.create({ username, email, password });
  } catch (err) {
    return res.status(411).json({
      message: "user already exists",
    });
  }
});

app.post("/api/v1/vault/signin", async (req: Request, res: Response) => {
  const email = req.body.email;
  const password = req.body.password;
  const existingUser = await UserModel.findOne({ email, password });

  if (!email || !password) {
    return res.status(400).json({ message: "Missing fields" });
  }

  if (!existingUser) {
    return res.status(403).json({ message: "Invalid Credentials" });
  }

  const token = jwt.sign(
    {
      //@ts-ignore
      id: existingUser._id,
    },
    JWT_SECRET,
    { expiresIn: "7d" },
  );

  return res.json({ token });
});

app.post(
  "/api/v1/vault/content",
  authenticate,
  async (req: Request, res: Response) => {
    const title: string = req.body.title;
    const link: string = req.body.link;
    const type: string = req.body.type;

    try {
      await ContentModel.create({
        link,
        type,
        title,
        //@ts-ignore
        userId: req.userId,
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        message: "Failed to upload the content",
      });
    }

    return res.json({
      message: "Content created",
    });
  },
);

app.get(
  "/api/v1/vault/content",
  authenticate,
  async (req: Request, res: Response) => {
    try {
      //@ts-ignore
      const userId: string = req.userId;
      const content = await ContentModel.find({ userId });
      res.json({
        content,
      });
    } catch (err) {
      res.json({
        message: "failed to fetch content",
      });
    }
  },
);

app.get(
  "/api/v1/vault/content/:contentId",
  authenticate,
  async (req: Request, res: Response) => {
    try {
      const { contentId } = req.params;
      const content = await ContentModel.find({ _id: contentId });
      res.json({
        content,
      });
    } catch (err) {
      res.json({
        message: "Failed to fetch content",
      });
    }
  },
);

app.post(
  "/api/v1/vault/share",
  authenticate,
  async (req: Request, res: Response) => {
    const share = req.body.share;
    try {
      if (share) {
        const hash = randomString(25);
        await LinkModel.create({
          userId: req.body.userId,
          hash,
        });

        res.status(201).json({
          message: "Link created successfully.",
          data: {
            hash: "/s/" + hash,
          },
        });
      } else {
        await LinkModel.deleteOne({
          userId: req.body.userId,
        });
        res.status(201).json({
          message: "Link removed",
        });
      }
    } catch (err) {
      res.json({
        message: err,
      });
    }
  },
);
app.get(
  "/api/v1/vault/s/:sharelink",
  authenticate,
  async (req: Request, res: Response) => {
    const hash = req.params.sharelink as string;

    const userId = await LinkModel.findOne({ hash }).select("userId").lean();
    console.log(userId);

    if (!userId) {
      return res.status(404).json({
        message: "Link not found",
      });
    }

    const content = await ContentModel.find({ userId });

    res.status(200).json({
      data: {
        userId,
        content,
      },
    });
  },
);
export default app;
