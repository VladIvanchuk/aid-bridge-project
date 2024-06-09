"use client";
import { getUserById } from "@/lib/user/api";
import { IReview } from "@/models/review";
import { IUser } from "@/models/user";
import { ReviewsRating } from "@/styles/ProfileStyles";
import {
  VolunteersItemContainer,
  VolunteersItemText,
} from "@/styles/VolunteersStyles";
import { Card, CardBody, CardHeader, User } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa6";

const ProfileReviewsItem = ({
  author,
  text,
  rating,
  createdAt,
}: Partial<IReview>): React.ReactElement => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (author) {
        const data = await getUserById(author.toString());
        setUser(data.data);
      }
    };

    fetchUser();
  }, [author]);

  const stars = [...Array(5)].map((_, index) => {
    return index < Math.round(rating ?? 0) ? (
      <FaStar key={index} />
    ) : (
      <FaRegStar key={index} />
    );
  });
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
          {createdAt
            ? new Date(createdAt).toLocaleDateString("uk-UA", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : "Unknown date"}
        </CardHeader>
        <CardBody>
          <ReviewsRating>{stars}</ReviewsRating>
          <VolunteersItemText>{text}</VolunteersItemText>
        </CardBody>
      </VolunteersItemContainer>
    </Card>
  );
};

export default ProfileReviewsItem;
