"use client";
import { getNeeds } from "@/lib/need/api";
import { INeed } from "@/models/need";
import {
  HomeSectionHeader,
  HomeTitle,
  RecentNeedsContainer,
} from "@/styles/HomeStyles";
import { NeedsContainer } from "@/styles/NeedsStyles";
import { LinkContainer } from "@/styles/UiStyles";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { Loader, NeedsItem } from "..";

const RecentNeeds = (): React.ReactElement => {
  const [needs, setData] = useState<INeed[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getNeeds().then((data) => {
      setData(data.data);
      setLoading(false);
    });
  }, []);

  if (!needs) return <p>No needs data</p>;
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
      {isLoading ? (
        <Loader isFullscreen={true} />
      ) : (
        <NeedsContainer>
          {needs.map((need) => (
            <NeedsItem key={need.id} {...need} />
          ))}
        </NeedsContainer>
      )}
    </RecentNeedsContainer>
  );
};

export default RecentNeeds;
