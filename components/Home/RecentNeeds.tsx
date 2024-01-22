import { RecentNeedsContainer, RecentNeedsTitle } from "@/styles/HomeStyles";
import { RecentNeedsItem } from "..";

const RecentNeeds = (): React.ReactElement => {
  return (
    <RecentNeedsContainer>
      <RecentNeedsTitle>Останні потреби</RecentNeedsTitle>
      {[...Array(3)].map((_, index) => (
        <RecentNeedsItem key={index} item={index} />
      ))}
    </RecentNeedsContainer>
  );
};

export default RecentNeeds;
