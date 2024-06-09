"use client";
import { useGetRecommendations } from "@/hooks/useGetRecommendations";
import {
  RecommendationItemContainer,
  RecommendationsContainer,
} from "@/styles/ForYouStyles";
import { useState } from "react";
import Masonry from "react-responsive-masonry";
import { Loader, NeedsShortItem, NewsItem, VolunteersItem } from "..";

const Recommendations = (): React.ReactElement => {
  const { isLoading, recommendations } = useGetRecommendations();
  const [updateList, setUpdateList] = useState(false);

  if (isLoading) return <Loader isFullscreen />;

  return (
    <RecommendationsContainer>
      <Masonry columnsCount={3} gutter="10px">
        {recommendations.map((item) => (
          <RecommendationItemContainer key={item._id}>
            {item.type === "news" && <NewsItem {...item} />}
            {item.type === "need" && <NeedsShortItem {...item} />}
            {item.type === "opportunity" && (
              <VolunteersItem {...item} setUpdateList={setUpdateList} />
            )}
          </RecommendationItemContainer>
        ))}
      </Masonry>
    </RecommendationsContainer>
  );
};

export default Recommendations;
