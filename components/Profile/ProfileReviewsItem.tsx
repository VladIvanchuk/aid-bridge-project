import { BestVolunteersListRate } from "@/styles/HomeStyles";
import { ReviewsRating } from "@/styles/ProfileStyles";
import {
  VolunteersItemContainer,
  VolunteersItemLocation,
  VolunteersItemLocationText,
  VolunteersItemText,
} from "@/styles/VolunteersStyles";
import { Card, CardHeader, User, Divider, CardBody } from "@nextui-org/react";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";

const ProfileReviewsItem = (): React.ReactElement => {
  return (
    <Card shadow="sm" className="flex-1">
      <VolunteersItemContainer>
        <CardHeader className="flex gap-3 justify-between">
          <User
            name="Jane Doe"
            description="Volunteer"
            avatarProps={{
              src: `https://i.pravatar.cc/150?u=${Math.random() * 10}`,
            }}
          />
          10 березня 2024
        </CardHeader>
        <CardBody>
          <ReviewsRating>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
          </ReviewsRating>
          <VolunteersItemText>
            Make beautiful websites regardless of your design experience. Make
            beautiful websites regardless of your design experience. beautiful
            websites regardless of your design experience.
          </VolunteersItemText>
        </CardBody>
      </VolunteersItemContainer>
    </Card>
  );
};

export default ProfileReviewsItem;
