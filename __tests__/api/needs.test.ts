import mongoose from "mongoose";
import { NextRequest } from "next/server";
import Need from "@/models/need";
import { createHandler, getAllHandler } from "@/utils/crudHandlers";
import dbConnect, { closeDatabase } from "@/lib/mongodb";

beforeAll(async () => {
  await dbConnect();
});

afterAll(async () => {
  await closeDatabase();
});

beforeEach(async () => {
  await Need.deleteMany({});
});

describe("API /needs", () => {
  it("should create a new need", async () => {
    const newNeed = {
      title: "Test Need",
      description: "A test description",
      location: "Test Location",
      body: "Test Body",
      author: new mongoose.Types.ObjectId(),
      categories: ["Test Category"],
    };

    const nextReq = new NextRequest("http://localhost/api/needs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newNeed),
    });

    const res = await createHandler(nextReq, Need);
    expect(res.status).toBe(201);
    const responseData = await res.json();
    expect(responseData.data.title).toBe("Test Need");
  });

  it("should get all needs", async () => {
    const testAuthorId = new mongoose.Types.ObjectId();

    await Need.create({
      title: "Existing Need",
      body: "Existing description",
      location: "Existing Location",
      author: testAuthorId,
      categories: ["Category 1"],
    });

    const nextReq = new NextRequest("http://localhost/api/needs", {
      method: "GET",
    });

    const res = await getAllHandler(Need);
    expect(res.status).toBe(200);
    const responseData = await res.json();
    expect(responseData.data).toHaveLength(1);
    expect(responseData.data[0].title).toBe("Existing Need");
    expect(responseData.data[0].author.toString()).toBe(
      testAuthorId.toString(),
    );
  });
});
