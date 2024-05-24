"use client";
import { getNeeds } from "@/lib/need/api";
import { NeedsContainer } from "@/styles/NeedsStyles";
import { useEffect, useState } from "react";
import NeedsItem from "./NeedsItem";
import Loader from "../ui/Loader";
import { INeed } from "@/models/need";
import { CreateNeed, ListPageWrapper } from "..";
import { useDisclosure } from "@nextui-org/react";

const NeedsList = () => {
  const [needs, setData] = useState<INeed[]>([]);
  const [isLoading, setLoading] = useState(true);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    getNeeds().then((data) => {
      setData(data.data);
      setLoading(false);
    });
  }, []);

  if (!needs) return <p>No needs data</p>;

  return (
    <>
      <ListPageWrapper buttonTitle="Додати потребу" onClick={onOpen}>
        {isLoading ? (
          <Loader isFullscreen={true} />
        ) : (
          <NeedsContainer>
            {needs.map((need) => (
              <NeedsItem key={need.id} {...need} />
            ))}
          </NeedsContainer>
        )}
      </ListPageWrapper>
      <CreateNeed isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};

export default NeedsList;
