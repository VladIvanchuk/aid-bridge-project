import { RecommendationItemContainer } from "@/styles/ForYouStyles";
import { NeedsItem, NewsItem, VolunteersItem } from "..";

const RecommendationItem = (): React.ReactElement => {
  return (
    <RecommendationItemContainer>
      <NeedsItem />
      <VolunteersItem />
      <NewsItem />
    </RecommendationItemContainer>
  );
};

export default RecommendationItem;
