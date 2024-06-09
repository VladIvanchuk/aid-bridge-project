"use client";
import { getOpportunities } from "@/lib/opportunity/api";
import { IOpportunity } from "@/models/opportunity";
import {
  HomeSectionHeader,
  HomeTitle,
  NewOppContainer,
  NewOppItemsContainer,
} from "@/styles/HomeStyles";
import { LinkContainer } from "@/styles/UiStyles";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { Loader, NewOppItem } from "..";

const NewOpportunities = (): React.ReactElement => {
  const [opportunities, setOpportunities] = useState<IOpportunity[]>([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    getOpportunities().then((data) => {
      const sortedOpportunities = data.data.sort(
        (a: IOpportunity, b: IOpportunity) =>
          new Date(b.createdAt ?? 0).getTime() -
          new Date(a.createdAt ?? 0).getTime(),
      );
      setOpportunities(sortedOpportunities);
      setLoading(false);
    });
  }, []);
  return (
    <NewOppContainer>
      <HomeSectionHeader>
        <HomeTitle>Нові Можливості</HomeTitle>
        <LinkContainer>
          <Button
            as={Link}
            href="/volunteers"
            color="primary"
            endContent={<MdArrowOutward />}
          >
            Більше проектів
          </Button>
        </LinkContainer>
      </HomeSectionHeader>
      <NewOppItemsContainer>
        {isLoading ? (
          <Loader isFullscreen />
        ) : (
          opportunities.map((opportunity) => (
            <NewOppItem key={opportunity._id} {...opportunity} />
          ))
        )}
      </NewOppItemsContainer>
    </NewOppContainer>
  );
};

export default NewOpportunities;
