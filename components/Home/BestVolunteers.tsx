"use client";
import { getTopVolunteers } from "@/lib/user/api";
import { IUser } from "@/models/user";
import {
  BestVolunteersContainer,
  BestVolunteersList,
  BestVolunteersListItem,
  BestVolunteersListRate,
  BestVolunteersTitle,
} from "@/styles/HomeStyles";
import { Card, CardHeader, User } from "@nextui-org/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Loader } from "..";

const BestVolunteers = (): React.ReactElement => {
  const [topVolunteers, setTopVolunteers] = useState<IUser[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getTopVolunteers().then((data) => {
      setTopVolunteers(data.volunteers);
      setLoading(false);
    });
  }, []);

  return (
    <Card shadow="sm" className="flex-1 bg-[var(--background-light)] w-10">
      <BestVolunteersContainer>
        <CardHeader className="flex items-start justify-center">
          <BestVolunteersTitle>Кращі волонтери</BestVolunteersTitle>
        </CardHeader>
        <BestVolunteersList>
          {isLoading ? (
            <Loader isFullscreen={true} />
          ) : (
            topVolunteers.map((user, index) => (
              <BestVolunteersListItem key={index}>
                <User
                  as={Link}
                  href={`/profile/${user?._id}`}
                  name={user?.userProfile?.username ?? ""}
                  avatarProps={{
                    src: user?.userProfile.profilePhoto ?? "",
                    size: "sm",
                  }}
                />
                <BestVolunteersListRate>
                  <p>{user?.userProfile?.rating}/5</p>
                  <FaStar />
                </BestVolunteersListRate>
              </BestVolunteersListItem>
            ))
          )}
        </BestVolunteersList>
      </BestVolunteersContainer>
    </Card>
  );
};

export default BestVolunteers;
