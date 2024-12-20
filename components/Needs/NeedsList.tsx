"use client";
import { getNeeds } from "@/lib/need/api";
import { NeedsContainer } from "@/styles/NeedsStyles";
import { useEffect, useState } from "react";
import NeedsItem from "./NeedsItem";
import Loader from "../ui/Loader";
import { INeed } from "@/models/need";
import { CreateNeed, ListPageWrapper } from "..";
import { useDisclosure } from "@nextui-org/react";
import { useAuth } from "@/contexts/AuthContext";

const NeedsList = () => {
  const [needs, setNeeds] = useState<INeed[]>([]);
  const [isLoading, setLoading] = useState(true);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [updateList, setUpdateList] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const { user } = useAuth();
  const isVolunteer = user?.userProfile.role === "Волонтер";

  useEffect(() => {
    setLoading(true);
    getNeeds().then((data) => {
      const filteredAndSortedNeeds = data.data
        .filter((need: INeed) =>
          selectedCategoryId
            ? need.categories.includes(selectedCategoryId)
            : true,
        )
        .sort(
          (a: INeed, b: INeed) =>
            new Date(b.createdAt ?? 0).getTime() -
            new Date(a.createdAt ?? 0).getTime(),
        );
      setNeeds(filteredAndSortedNeeds);
      setLoading(false);
      setUpdateList(false);
    });
  }, [updateList, selectedCategoryId]);

  if (!needs) return <p>No needs data</p>;

  return (
    <>
      <ListPageWrapper
        buttonTitle={!isVolunteer ? "Додати потребу" : undefined}
        onClick={onOpen}
        selectedCategoryId={selectedCategoryId}
        setSelectedCategoryId={setSelectedCategoryId}
      >
        {isLoading ? (
          <Loader isFullscreen={true} />
        ) : (
          <NeedsContainer>
            {needs.map((need, idx) => (
              <NeedsItem key={idx} {...need} />
            ))}
          </NeedsContainer>
        )}
      </ListPageWrapper>
      <CreateNeed
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        setUpdateList={setUpdateList}
      />
    </>
  );
};

export default NeedsList;
