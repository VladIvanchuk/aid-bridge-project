import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

const MONGODB_URI = process.env.MONGODB_URI || "";
let mongoServer: MongoMemoryServer | null = null;

if (!MONGODB_URI && process.env.NODE_ENV !== "test") {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local",
  );
}

let cached = global.mongoose || null;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    if (process.env.NODE_ENV === "test") {
      // Під час тестування створюємо віртуальний сервер
      mongoServer = await MongoMemoryServer.create();
      const uri = mongoServer.getUri();

      cached.promise = mongoose
        .connect(uri, { bufferCommands: false })
        .then((mongoose) => mongoose);
    } else {
      // У звичайному середовищі підключаємося до реальної бази
      cached.promise = mongoose
        .connect(MONGODB_URI, { bufferCommands: false })
        .then((mongoose) => mongoose);
    }
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

// Для очищення MongoMemoryServer у тестах
export async function closeDatabase() {
  if (mongoServer) {
    await mongoose.disconnect();
    await mongoServer.stop();
  }
}

export default dbConnect;
