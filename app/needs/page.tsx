import { ListPageWrapper, RecentNeedsItem } from "@/components";
import { NeedsContainer } from "@/styles/NeedsStyles";

const Needs = (): React.ReactElement => {
  return (
    <ListPageWrapper>
      <NeedsContainer>
        {[...Array(3)].map((_, index) => (
          <RecentNeedsItem key={index} />
        ))}
      </NeedsContainer>
    </ListPageWrapper>
  );
};

export default Needs;
