"use client";
import { ListPageWrapper, NeedsItem } from "@/components";
import { NeedsContainer } from "@/styles/NeedsStyles";
import { useState, useEffect } from "react";

const Needs = (): React.ReactElement => {
  const [needs, setNeeds] = useState([]);
  const fetchNeeds = async () => {
    const res = await fetch("/api/needs");
    const needs = await res.json();
    return needs;
  };

  console.log(false);

  useEffect(() => {
    fetchNeeds().then((needs) => {
      setNeeds(needs);
    });
  }, []);
  return (
    <ListPageWrapper buttonTitle="Додати потребу">
      <NeedsContainer>
        {[...Array(3)].map((_, index) => (
          <NeedsItem key={index} />
        ))}
      </NeedsContainer>
    </ListPageWrapper>
  );
};

export default Needs;
