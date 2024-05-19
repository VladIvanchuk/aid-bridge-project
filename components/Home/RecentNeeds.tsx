"use client";
import {
  RecentNeedsContainer,
  HomeTitle,
  HomeSectionHeader,
} from "@/styles/HomeStyles";
import { Loader, NeedsItem } from "..";
import { LinkContainer } from "@/styles/UiStyles";
import Link from "next/link";
import { Button, useDisclosure } from "@nextui-org/react";
import { MdArrowOutward } from "react-icons/md";
import { getNeeds } from "@/lib/api";
import { INeed } from "@/models/need";
import { NeedsContainer } from "@/styles/NeedsStyles";
import { useState, useEffect } from "react";

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
