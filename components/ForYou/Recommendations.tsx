"use client";
import {
  RecommendationItemContainer,
  RecommendationsContainer,
} from "@/styles/ForYouStyles";
import { NeedsShortItem, VolunteersItem, NewsItem, Loader } from "..";
import Masonry from "react-responsive-masonry";
import { useState, useEffect } from "react";
import { useGetRecommendations } from "@/hooks/useGetRecommendations";

const Recommendations = (): React.ReactElement => {
  const { isLoading, recommendations } = useGetRecommendations();

  if (isLoading) return <Loader isFullscreen />;

  return (
    <RecommendationsContainer>
      <Masonry columnsCount={3} gutter="10px">
        {recommendations.map((item) => (
          <RecommendationItemContainer key={item._id}>
            {item.type === "news" && <NewsItem {...item} />}
            {item.type === "need" && <NeedsShortItem {...item} />}
            {item.type === "opportunity" && <VolunteersItem {...item} />}
          </RecommendationItemContainer>
        ))}
      </Masonry>
    </RecommendationsContainer>
  );
};

export default Recommendations;
