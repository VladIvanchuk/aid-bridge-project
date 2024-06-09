"use client";

import { useAuth } from "@/contexts/AuthContext";
import { getReviewsByTarget } from "@/lib/review/api";
import { IReview } from "@/models/review";
import { IUser } from "@/models/user";
import {
  ProfileOppContainer,
  ProfileReviewsTitle,
} from "@/styles/ProfileStyles";
import { Button, Card, useDisclosure } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { ProfileReviewsItem } from "..";
import CreateReview from "./CreateReview";

const ProfileReviews = ({ _id }: Partial<IUser>): React.ReactElement => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [updateList, setUpdateList] = useState(false);
  const [reviews, setReviews] = useState<IReview[]>([]);
  const { user } = useAuth();

  const isCurrentUser = user?._id === _id;

  useEffect(() => {
    getReviewsByTarget(_id).then((data) => {
      const sortedReviews = data.data.sort(
        (a: IReview, b: IReview) =>
          new Date(b.createdAt ?? 0).getTime() -
          new Date(a.createdAt ?? 0).getTime(),
      );
      setReviews(sortedReviews);
    });
  }, [updateList]);

  return (
    <ProfileOppContainer>
      {!isCurrentUser && (
        <Card
          shadow="sm"
          className="flex-1 flex-row justify-between px-4 py-2 items-center"
        >
          <ProfileReviewsTitle>Залиште свій відгук</ProfileReviewsTitle>
          <Button color="primary" endContent={<FaPlus />} onClick={onOpen}>
            Написати відгук
          </Button>
        </Card>
      )}
      {reviews.map((review) => (
        <ProfileReviewsItem key={review._id} {...review} />
      ))}
      <CreateReview
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        setUpdateList={setUpdateList}
        target={_id}
      />
    </ProfileOppContainer>
  );
};

export default ProfileReviews;
