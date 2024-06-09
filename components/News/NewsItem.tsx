import { INews } from "@/models/news";
import {
  NewsItemContainer,
  NewsItemDate,
  NewsItemDescription,
  NewsItemTitle,
} from "@/styles/NewsStyles";
import { Card, Image, Link } from "@nextui-org/react";

const NewsItem = ({
  _id,
  title,
  body,
  createdAt,
}: Partial<INews>): React.ReactElement => {
  return (
    <Card shadow="sm" className="flex-1">
      <NewsItemContainer>
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          isZoomed
          src="https://assets-global.website-files.com/63b303944d1e9ec09b741257/65e347754f33f6583b811dec_1080_600_1703349706-245.jpg"
        />
        <NewsItemDate>
          {createdAt
            ? new Date(createdAt).toLocaleDateString("uk-UA", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : "Unknown date"}
        </NewsItemDate>
        <NewsItemTitle>{title} </NewsItemTitle>
        <NewsItemDescription>{body}</NewsItemDescription>
        <Link showAnchorIcon href={`/news/${_id}`}>
          Дізнатись більше
        </Link>
      </NewsItemContainer>
    </Card>
  );
};

export default NewsItem;
