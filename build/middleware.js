import jwt, {} from "jsonwebtoken";
import { JWT_SECRET } from "./config.js";
export const authenticate = (req, res, next) => {
    const authHeader = req.header.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: "Missing Authorization header" });
    }
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        if (!decoded.id) {
            return res.status(403).json({ message: "Invalid token payload" });
        }
        //@ts-ignore
        req.userId = decoded.id;
        next();
    }
    catch (err) {
        return res.status(403).json({ message: "Invalid or expired token" });
    }
};
//# sourceMappingURL=middleware.js.map