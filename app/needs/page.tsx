import { ListPageWrapper, NeedsItem } from "@/components";
import { NeedsContainer } from "@/styles/NeedsStyles";

const Needs = (): React.ReactElement => {
  return (
    <ListPageWrapper buttonTitle="Додати потребу">
      <NeedsContainer>
        {[...Array(3)].map((_, index) => (
          <NeedsItem key={index} />
        ))}
      </NeedsContainer>
    </ListPageWrapper>
  );
};

export default Needs;
