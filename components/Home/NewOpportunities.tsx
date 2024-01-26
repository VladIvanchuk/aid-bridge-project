import {
  HomeTitle,
  NewOppContainer,
  NewOppItemsContainer,
} from "@/styles/HomeStyles";
import { NewOppItem } from "..";

const NewOpportunities = (): React.ReactElement => {
  return (
    <NewOppContainer>
      <HomeTitle>Нові Можливості</HomeTitle>
      <NewOppItemsContainer>
        {[...Array(3)].map((_, index) => (
          <NewOppItem key={index} />
        ))}
      </NewOppItemsContainer>
    </NewOppContainer>
  );
};

export default NewOpportunities;
