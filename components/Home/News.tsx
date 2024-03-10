import {
  HomeSectionHeader,
  HomeTitle,
  NewsItemsContainer,
  NewsContainer,
} from "@/styles/HomeStyles";
import { LinkContainer } from "@/styles/UiStyles";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { NewsItem } from "..";

const News = (): React.ReactElement => {
  return (
    <NewsContainer>
      <HomeSectionHeader>
        <HomeTitle>Новини та події</HomeTitle>
        <LinkContainer>
          <Button
            as={Link}
            href="news"
            color="primary"
            endContent={<MdArrowOutward />}
          >
            Переглянути більше
          </Button>
        </LinkContainer>
      </HomeSectionHeader>
      <NewsItemsContainer>
        {[...Array(3)].map((_, index) => (
          <NewsItem key={index} />
        ))}
      </NewsItemsContainer>
    </NewsContainer>
  );
};

export default News;
