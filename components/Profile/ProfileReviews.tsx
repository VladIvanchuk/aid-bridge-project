"use client";

import {
  ProfileOppContainer,
  ProfileReviewsTitle,
} from "@/styles/ProfileStyles";
import { Button, Card } from "@nextui-org/react";
import { FaPlus } from "react-icons/fa6";
import { ProfileReviewsItem } from "..";

const ProfileReviews = (): React.ReactElement => {
  return (
    <ProfileOppContainer>
      <Card
        shadow="sm"
        className="flex-1 flex-row justify-between px-4 py-2 items-center"
      >
        <ProfileReviewsTitle>Залиште свій відгук</ProfileReviewsTitle>
        <Button color="primary" endContent={<FaPlus />}>
          Написати відгук
        </Button>
      </Card>
      {[...Array(8)].map((_, index) => (
        <ProfileReviewsItem key={index} />
      ))}
    </ProfileOppContainer>
  );
};

export default ProfileReviews;
