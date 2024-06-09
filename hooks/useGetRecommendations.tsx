"use client";
import { useEffect, useState } from "react";
import { getNeeds } from "@/lib/need/api";
import { getNews } from "@/lib/news/api";
import { getOpportunities } from "@/lib/opportunity/api";
import { INeed } from "@/models/need";
import { INews } from "@/models/news";
import { IOpportunity } from "@/models/opportunity";

interface TypedINews extends INews {
  type: "news";
}

interface TypedINeed extends INeed {
  type: "need";
}

interface TypedIOpportunity extends IOpportunity {
  type: "opportunity";
}

type RecommendationItem = TypedINews | TypedINeed | TypedIOpportunity;

function shuffleArray<T>(array: T[]): T[] {
  let result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export const useGetRecommendations = () => {
  const [recommendations, setRecommendations] = useState<
    Array<RecommendationItem>
  >([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [news, opportunities, needs] = await Promise.all([
          getNews().then((items) =>
            items.data.map((item: INews) => ({ ...item, type: "news" })),
          ),
          getOpportunities().then((items) =>
            items.data.map((item: IOpportunity) => ({
              ...item,
              type: "opportunity",
            })),
          ),
          getNeeds().then((items) =>
            items.data.map((item: INeed) => ({ ...item, type: "need" })),
          ),
        ]);

        const mixedRecommendations = shuffleArray([
          ...news,
          ...opportunities,
          ...needs,
        ]);
        setRecommendations(mixedRecommendations);
      } catch (error) {
        console.error("Failed to fetch data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { isLoading, recommendations };
};
