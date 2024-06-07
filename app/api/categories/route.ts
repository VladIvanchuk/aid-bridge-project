import Category from "@/models/category";
import { getAllHandler } from "@/utils/crudHandlers";

export async function GET() {
  return getAllHandler(Category);
}
