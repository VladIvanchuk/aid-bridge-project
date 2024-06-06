"use client";
import { getUserById } from "@/lib/user/api";
import { IOpportunity } from "@/models/opportunity";
import { IUser } from "@/models/user";
import { BestVolunteersListRate } from "@/styles/HomeStyles";
import {
  VolunteersItemContainer,
  VolunteersItemLocation,
  VolunteersItemLocationText,
  VolunteersItemText,
} from "@/styles/VolunteersStyles";
import { Card, CardBody, CardHeader, Divider, User } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";

const VolunteersItem = ({
  title,
  location,
  author,
}: Partial<IOpportunity>): React.ReactElement => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    if (!author) return;
    async function fetchData() {
      const data = await getUserById(author?.toString());
      setUser(data.data);
    }
    if (!user) {
      fetchData();
    }
  }, [setUser, user, author]);
  return (
    <Card shadow="sm" className="flex-1">
      <VolunteersItemContainer>
        <CardHeader className="flex gap-3 justify-between">
          <User
            name={user?.userProfile?.username ?? ""}
            description={user?.userProfile?.role ?? ""}
            avatarProps={{
              src: user?.userProfile.profilePhoto ?? "",
            }}
          />
          <BestVolunteersListRate>
            <p>{user?.userProfile?.rating ?? ""}/5</p>
            <FaStar fill="var(--base-accent)" />
          </BestVolunteersListRate>
        </CardHeader>
        <Divider />
        <CardBody>
          <VolunteersItemLocation>
            <MdLocationPin />
            <VolunteersItemLocationText>{location}</VolunteersItemLocationText>
          </VolunteersItemLocation>
          <VolunteersItemText>{title}</VolunteersItemText>
        </CardBody>
      </VolunteersItemContainer>
    </Card>
  );
};

export default VolunteersItem;
