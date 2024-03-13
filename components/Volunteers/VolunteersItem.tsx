import { BestVolunteersListRate } from "@/styles/HomeStyles";
import {
  VolunteersItemContainer,
  VolunteersItemLocation,
  VolunteersItemLocationText,
  VolunteersItemText,
} from "@/styles/VolunteersStyles";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
  User,
} from "@nextui-org/react";
import { FaStar } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";

const VolunteersItem = (): React.ReactElement => {
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
          <BestVolunteersListRate>
            {(Math.random() * 10).toFixed(1)}/10
            <FaStar fill="var(--base-accent)" />
          </BestVolunteersListRate>
        </CardHeader>
        <Divider />
        <CardBody>
          <VolunteersItemLocation>
            <MdLocationPin />
            <VolunteersItemLocationText>
              Lviv city center
            </VolunteersItemLocationText>
          </VolunteersItemLocation>
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

export default VolunteersItem;
