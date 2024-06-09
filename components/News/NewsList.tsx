"use client";
import { getNews } from "@/lib/news/api";
import { INews } from "@/models/news";
import { NewsContainer } from "@/styles/NewsStyles";
import { useDisclosure } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { ListPageWrapper } from "..";
import Loader from "../ui/Loader";
import CreateNews from "./CreateNews";
import NewsItem from "./NewsItem";

const NewsList = () => {
  const [news, setNews] = useState<INews[]>([]);
  const [isLoading, setLoading] = useState(true);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [updateList, setUpdateList] = useState(false);

  useEffect(() => {
    setLoading(true);
    getNews().then((data) => {
      const sortedNews = data.data.sort(
        (a: INews, b: INews) =>
          new Date(b.createdAt ?? 0).getTime() -
          new Date(a.createdAt ?? 0).getTime(),
      );
      setNews(sortedNews);
      setLoading(false);
    });
  }, [updateList]);

  if (!news) return <p>No news data</p>;

  return (
    <>
      <ListPageWrapper
        buttonTitle={"Створити статтю"}
        onClick={onOpen}
        noFilter
      >
        {isLoading ? (
          <Loader isFullscreen={true} />
        ) : (
          <NewsContainer>
            {news.map((news, idx) => (
              <NewsItem key={idx} {...news} />
            ))}
          </NewsContainer>
        )}
      </ListPageWrapper>
      <CreateNews
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        setUpdateList={setUpdateList}
      />
    </>
  );
};

export default NewsList;
