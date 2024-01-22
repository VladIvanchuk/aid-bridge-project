import {
  BestVolunteersContainer,
  BestVolunteersList,
  BestVolunteersListItem,
  BestVolunteersListRate,
  BestVolunteersTitle,
} from "@/styles/HomeStyles";
import { Card, CardBody, CardHeader, User } from "@nextui-org/react";
import { FaStar } from "react-icons/fa";

const BestVolunteers = (): React.ReactElement => {
  return (
    <Card shadow="sm" className="flex-1 bg-[#c4daf3]">
      <BestVolunteersContainer>
        <CardHeader className="flex items-start justify-center">
          <BestVolunteersTitle>Кращі волонтери місяця</BestVolunteersTitle>
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
                {(Math.random() * index).toFixed(1)}/10
                <FaStar fill="#318bf1" />
              </BestVolunteersListRate>
            </BestVolunteersListItem>
          ))}
        </BestVolunteersList>
      </BestVolunteersContainer>
    </Card>
  );
};

export default BestVolunteers;
