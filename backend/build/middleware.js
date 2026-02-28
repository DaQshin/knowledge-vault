// import admin from "./firebase.js";
import jwt, {} from "jsonwebtoken";
import { JWT_SECRET } from "./config.js";
// export const authenticate = async (
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ) => {
//   const authHeader = req.headers.authorization;
//   if (!authHeader || !authHeader?.startsWith("Bearer ")) {
//     return res.status(401).json({ message: "missing header" });
//   }
//   const token = authHeader.split(" ")[1];
//   try {
//     const decoded = await admin.auth().verifyIdToken(token as string);
//     //@ts-ignore
//     req.userId = decoded.uid;
//   } catch (err) {
//     return res.status(401).json({ message: "Invalid firebase token" });
//   }
// };
export const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: "Missing Authorization header" });
    }
    const parts = authHeader.split(" ");
    if (parts.length !== 2 || parts[0] !== "Bearer") {
        return res.status(401).json({ message: "Invalid Authorization format" });
    }
    const token = parts[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        if (!decoded.id) {
            return res.status(401).json({ message: "Invalid token payload" });
        }
        //@ts-ignore
        req.userId = decoded.id;
        next();
    }
    catch {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};
//# sourceMappingURL=middleware.js.map