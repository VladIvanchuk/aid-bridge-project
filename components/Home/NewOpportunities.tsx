import {
  HomeTitle,
  NewOppContainer,
  NewOppItemsContainer,
} from "@/styles/HomeStyles";
import { NewOppItem } from "..";
import { LinkContainer } from "@/styles/UiStyles";
import Link from "next/link";

const NewOpportunities = (): React.ReactElement => {
  return (
    <NewOppContainer>
      <HomeTitle>Нові Можливості</HomeTitle>
      <NewOppItemsContainer>
        {[...Array(3)].map((_, index) => (
          <NewOppItem key={index} />
        ))}
      </NewOppItemsContainer>
      <LinkContainer>
        <Link href="/opportunities">Переглянути більше</Link>
      </LinkContainer>
    </NewOppContainer>
  );
};

export default NewOpportunities;
