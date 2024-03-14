"use client";
import {
  RecommendationItemContainer,
  RecommendationsContainer,
} from "@/styles/ForYouStyles";
import { NeedsShortItem, VolunteersItem, NewsItem, Loader } from "..";
import Masonry from "react-responsive-masonry";
import { useState, useEffect } from "react";

const Recommendations = (): React.ReactElement => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <Loader />;
  }
  return (
    <RecommendationsContainer>
      <Masonry columnsCount={3} gutter="10px">
        <RecommendationItemContainer>
          <NeedsShortItem />
        </RecommendationItemContainer>
        <RecommendationItemContainer>
          <VolunteersItem />
        </RecommendationItemContainer>
        <RecommendationItemContainer>
          <NewsItem />
        </RecommendationItemContainer>
        <RecommendationItemContainer>
          <NeedsShortItem />
        </RecommendationItemContainer>
        <RecommendationItemContainer>
          <VolunteersItem />
        </RecommendationItemContainer>
        <RecommendationItemContainer>
          <VolunteersItem />
        </RecommendationItemContainer>
        <RecommendationItemContainer>
          <VolunteersItem />
        </RecommendationItemContainer>
        <RecommendationItemContainer>
          <NeedsShortItem />
        </RecommendationItemContainer>
        <RecommendationItemContainer>
          <NewsItem />
        </RecommendationItemContainer>
      </Masonry>
    </RecommendationsContainer>
  );
};

export default Recommendations;
