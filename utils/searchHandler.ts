import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import News from "@/models/news";
import Need from "@/models/need";
import Opportunity from "@/models/opportunity";

export async function searchHandler(req: NextRequest, key: string) {
  await dbConnect();
  try {
    if (!key) {
      return NextResponse.json(
        { error: "Query parameter is required" },
        { status: 400 },
      );
    }

    const search = { $text: { $search: key } };
    const newsPromise = News.find(search, {
      score: { $meta: "textScore" },
    }).sort({ score: { $meta: "textScore" } });
    const needsPromise = Need.find(search, {
      score: { $meta: "textScore" },
    }).sort({ score: { $meta: "textScore" } });
    const opportunitiesPromise = Opportunity.find(search, {
      score: { $meta: "textScore" },
    }).sort({ score: { $meta: "textScore" } });

    const [newsResults, needsResults, opportunitiesResults] = await Promise.all(
      [newsPromise, needsPromise, opportunitiesPromise],
    );

    const combinedResults = [
      ...newsResults.map((item) => ({
        type: "news",
        title: item.title,
        id: item._id,
      })),
      ...needsResults.map((item) => ({
        type: "needs",
        title: item.title,
        id: item._id,
      })),
      ...opportunitiesResults.map((item) => ({
        type: "volunteers",
        title: item.title,
        id: item._id,
      })),
    ];

    return NextResponse.json(combinedResults);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
