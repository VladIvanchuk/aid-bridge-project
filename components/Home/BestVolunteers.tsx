import {
  BestVolunteersContainer,
  BestVolunteersList,
  BestVolunteersListItem,
  BestVolunteersListRate,
  BestVolunteersTitle,
} from "@/styles/HomeStyles";
import { Card, CardHeader, User } from "@nextui-org/react";
import { FaStar } from "react-icons/fa";

const BestVolunteers = (): React.ReactElement => {
  return (
    <Card shadow="sm" className="flex-1 bg-[var(--background-light)] w-10">
      <BestVolunteersContainer>
        <CardHeader className="flex items-start justify-center">
          <BestVolunteersTitle>Кращі волонтери</BestVolunteersTitle>
        </CardHeader>
        <BestVolunteersList>
          {[...Array(13)].map((_, index) => (
            <BestVolunteersListItem key={index}>
              <User
                name="Jane Doe"
                avatarProps={{
                  src: `https://i.pravatar.cc/150?u=${Math.random() * 20}`,
                  size: "sm",
                }}
              />
              <BestVolunteersListRate>
                <p>{(Math.random() * 5).toFixed(1)}/5</p>
                <FaStar />
              </BestVolunteersListRate>
            </BestVolunteersListItem>
          ))}
        </BestVolunteersList>
      </BestVolunteersContainer>
    </Card>
  );
};

export default BestVolunteers;
