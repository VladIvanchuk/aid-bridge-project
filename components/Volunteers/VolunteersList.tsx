"use client";
import { useAuth } from "@/contexts/AuthContext";
import { getOpportunities } from "@/lib/opportunity/api";
import { IOpportunity } from "@/models/opportunity";
import { VolunteersContainer } from "@/styles/VolunteersStyles";
import { useDisclosure } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { ListPageWrapper, VolunteersItem } from "..";
import Loader from "../ui/Loader";
import CreateOpportunity from "./CreateOpportunity";

const VolunteersList = () => {
  const [opportunities, setOpportunities] = useState<IOpportunity[]>([]);
  const [isLoading, setLoading] = useState(true);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [updateList, setUpdateList] = useState(false);
  const { user } = useAuth();
  const isVolunteer = user?.userProfile.role === "Волонтер";

  useEffect(() => {
    setLoading(true);
    getOpportunities().then((data) => {
      const sortedOpportunities = data.data.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
      );
      setOpportunities(sortedOpportunities);
      setLoading(false);
    });
  }, [updateList]);

  if (!opportunities) return <p>No opportunities data</p>;

  return (
    <>
      <ListPageWrapper
        buttonTitle={isVolunteer ? "Створити можливість" : undefined}
        onClick={onOpen}
      >
        {isLoading ? (
          <Loader isFullscreen={true} />
        ) : (
          <VolunteersContainer>
            {opportunities.map((opportunity, idx) => (
              <VolunteersItem key={idx} {...opportunity} />
            ))}
          </VolunteersContainer>
        )}
      </ListPageWrapper>
      <CreateOpportunity
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        setUpdateList={setUpdateList}
      />
    </>
  );
};

export default VolunteersList;
