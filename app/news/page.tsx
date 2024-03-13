import { ListPageWrapper, NewsItem } from "@/components";
import { NewsContainer } from "@/styles/NewsStyles";

const News = (): React.ReactElement => {
  return (
    <ListPageWrapper>
      <NewsContainer>
        {[...Array(10)].map((_, index) => (
          <NewsItem key={index} />
        ))}
      </NewsContainer>
    </ListPageWrapper>
  );
};

export default News;
