import mongoose from "mongoose";
import dbConnect, { closeDatabase } from "@/lib/mongodb";
import Need from "@/models/need";
import { createHandler, getAllHandler } from "@/utils/crudHandlers";
import { NextRequest } from "next/server";

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

    const req = new NextRequest("http://localhost/api/needs", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(newNeed),
    });

    const res = await createHandler(req, Need);
    const json = await res.json();

    expect(res.status).toBe(201);
    expect(json.data.title).toBe("Test Need");
    expect(json.data.location).toBe("Test Location");
    expect(json.data.body).toBe("Test Body");
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

    const req = new NextRequest("http://localhost/api/needs", {
      method: "GET",
    });

    const res = await getAllHandler(Need);
    const json = await res.json();

    expect(res.status).toBe(200);
    expect(json.data).toHaveLength(1);
    expect(json.data[0].title).toBe("Existing Need");
    expect(json.data[0].author.toString()).toBe(testAuthorId.toString());
  });
});
