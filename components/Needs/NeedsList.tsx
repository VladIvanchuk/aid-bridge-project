"use client";
import { getNeeds } from "@/lib/api";
import { NeedsContainer } from "@/styles/NeedsStyles";
import { useEffect, useState } from "react";
import NeedsItem from "./NeedsItem";
import Loader from "../ui/Loader";
import { INeed } from "@/models/need";

const NeedsList = () => {
  const [needs, setData] = useState<INeed[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getNeeds().then((data) => {
      setData(data.data);
      setLoading(false);
    });
  }, []);

  if (isLoading) return <Loader isFullscreen={true} />;
  if (!needs) return <p>No needs data</p>;

  return (
    <NeedsContainer>
      {needs.map((need) => (
        <NeedsItem key={need.id} {...need} />
      ))}
    </NeedsContainer>
  );
};

export default NeedsList;
