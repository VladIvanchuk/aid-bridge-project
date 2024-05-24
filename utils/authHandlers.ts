import dbConnect from "@/lib/mongodb";
import { IUser } from "@/models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Model } from "mongoose";
import { NextRequest } from "next/server";
import { isError } from "./isError";

export async function registerHandler(req: NextRequest, User: Model<IUser>) {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in the environment variables");
  }
  await dbConnect();
  try {
    const { name, email, password } = await req.json();
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ error: "User already exists" }), {
        status: 409,
      });
    }
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const newUser = await User.create({
      email,
      password: hashedPassword,
      profile: {
        username: name,
      },
    });
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });
    const headers = new Headers();
    headers.append(
      "Set-Cookie",
      `token=${token}; HttpOnly; Secure; Path=/; Max-Age=${60 * 60}; SameSite=Strict`,
    );

    return new Response(JSON.stringify({ message: "User registered" }), {
      status: 200,
      headers,
    });
  } catch (err) {
    if (isError(err)) {
      return new Response(JSON.stringify({ error: err.message }), {
        status: 500,
      });
    }
    return new Response(
      JSON.stringify({ error: "An unexpected error occurred" }),
      {
        status: 500,
      },
    );
  }
}

export async function loginHandler(req: NextRequest, User: Model<IUser>) {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in the environment variables");
  }
  await dbConnect();
  try {
    const { email, password } = await req.json();
    const user = await User.findOne({ email });
    if (!user) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
      });
    }
    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
      return new Response(JSON.stringify({ error: "Invalid credentials" }), {
        status: 401,
      });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    const headers = new Headers();
    headers.append(
      "Set-Cookie",
      `token=${token}; HttpOnly; Secure; Path=/; Max-Age=${60 * 60}; SameSite=Strict`,
    );
    return new Response(JSON.stringify({ message: "Logged in successfully" }), {
      status: 200,
      headers,
    });
  } catch (err) {
    if (isError(err)) {
      return new Response(JSON.stringify({ error: err.message }), {
        status: 500,
      });
    }
    return new Response(
      JSON.stringify({ error: "An unexpected error occurred" }),
      {
        status: 500,
      },
    );
  }
}
