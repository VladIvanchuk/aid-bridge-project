import {
  RecentNeedsContainer,
  HomeTitle,
  HomeSectionHeader,
} from "@/styles/HomeStyles";
import { NeedsItem } from "..";
import { LinkContainer } from "@/styles/UiStyles";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { MdArrowOutward } from "react-icons/md";

const RecentNeeds = (): React.ReactElement => {
  return (
    <RecentNeedsContainer>
      <HomeSectionHeader>
        <HomeTitle>Останні потреби</HomeTitle>
        <LinkContainer>
          <Button
            as={Link}
            href="needs"
            color="primary"
            endContent={<MdArrowOutward />}
          >
            Більше потреб
          </Button>
        </LinkContainer>
      </HomeSectionHeader>
      {[...Array(3)].map((_, index) => (
        <NeedsItem key={index} />
      ))}
    </RecentNeedsContainer>
  );
};

export default RecentNeeds;
