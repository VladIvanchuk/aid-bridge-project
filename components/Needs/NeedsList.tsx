"use client";
import { getNeeds } from "@/lib/api";
import { NeedsContainer } from "@/styles/NeedsStyles";
import { useEffect, useState } from "react";
import NeedsItem from "./NeedsItem";
import Loader from "../ui/Loader";

const NeedsList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getNeeds().then((data) => {
      setData(data.data);
      setLoading(false);
    });
  }, []);

  if (isLoading) return <Loader />;
  if (!data) return <p>No profile data</p>;

  return (
    <NeedsContainer>
      {data.map((need: { id: string }) => (
        <NeedsItem key={need.id} />
      ))}
    </NeedsContainer>
  );
};

export default NeedsList;
