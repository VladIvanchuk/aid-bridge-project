import jwt, { JwtPayload } from "jsonwebtoken";
import { NextRequest } from "next/server";

interface CustomJwtPayload extends JwtPayload {
  userId: string;
}

function parseCookies(req: NextRequest) {
  const cookieHeader = req.headers.get("cookie") || "";
  return Object.fromEntries(
    cookieHeader.split("; ").map((c) => {
      const [key, ...v] = c.split("=");
      return [key, v.join("=")];
    }),
  );
}

export function authenticateToken(req: NextRequest) {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in the environment variables");
  }
  const cookies = parseCookies(req);
  if (cookies.token) {
    try {
      const decoded = jwt.verify(
        cookies.token,
        process.env.JWT_SECRET,
      ) as CustomJwtPayload;
      if (typeof decoded !== "string" && decoded.userId) {
        return { userId: decoded.userId };
      }
    } catch (err) {
      return null;
    }
  }
  return null;
}
