import {
  HomeSectionHeader,
  HomeTitle,
  NewOppContainer,
  NewOppItemsContainer,
} from "@/styles/HomeStyles";
import { NewOppItem } from "..";
import { LinkContainer } from "@/styles/UiStyles";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { MdArrowOutward } from "react-icons/md";

const NewOpportunities = (): React.ReactElement => {
  return (
    <NewOppContainer>
      <HomeSectionHeader>
        <HomeTitle>Нові Можливості</HomeTitle>
        <LinkContainer>
          <Button
            as={Link}
            href="opportunities"
            color="primary"
            endContent={<MdArrowOutward />}
          >
            Більше проектів
          </Button>
        </LinkContainer>
      </HomeSectionHeader>
      <NewOppItemsContainer>
        {[...Array(3)].map((_, index) => (
          <NewOppItem key={index} />
        ))}
      </NewOppItemsContainer>
    </NewOppContainer>
  );
};

export default NewOpportunities;
