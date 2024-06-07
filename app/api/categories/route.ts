import Category from "@/models/category";
import { getCategoriesByIdsHandler } from "@/utils/categoriesHandler";
import { getAllHandler } from "@/utils/crudHandlers";
import { NextRequest } from "next/server";

export async function GET() {
  return getAllHandler(Category);
}
