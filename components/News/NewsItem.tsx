import {
  NewsItemContainer,
  NewsItemDate,
  NewsItemDescription,
  NewsItemTitle,
} from "@/styles/NewsStyles";
import { Card, Image, Link } from "@nextui-org/react";

const NewsItem = (): React.ReactElement => {
  return (
    <Card shadow="sm" className="flex-1">
      <NewsItemContainer>
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          isZoomed
          src="https://assets-global.website-files.com/63b303944d1e9ec09b741257/65e347754f33f6583b811dec_1080_600_1703349706-245.jpg"
        />
        <NewsItemDate>Nov 27, 2023</NewsItemDate>
        <NewsItemTitle>
          Volunteering in Ukraine in winter: A Guide for Volunteers to Preparing
          for the Cold Season
        </NewsItemTitle>
        <NewsItemDescription>
          A heartfelt interview with Richard Woodruff, a dedicated volunteer and
          founder of the organization Front Line Kit. Discover his motivations,
          the hurdles he overcome, and the immense impact of his volunteering
          impact in Ukraine.
        </NewsItemDescription>
        <Link isExternal showAnchorIcon href="">
          Дізнатись більше
        </Link>
      </NewsItemContainer>
    </Card>
  );
};

export default NewsItem;
