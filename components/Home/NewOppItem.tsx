import {
  NewOppItemContainer,
  NewOppItemLocation,
  NewOppItemLocationText,
  NewOppItemText,
} from "@/styles/HomeStyles";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
  User,
} from "@nextui-org/react";
import { MdLocationPin } from "react-icons/md";

const NewOppItem = (): React.ReactElement => {
  return (
    <Card shadow="sm" className="flex-1">
      <NewOppItemContainer>
        <CardHeader className="flex gap-3">
          <User
            name="Jane Doe"
            description="Volunteer"
            avatarProps={{
              src: `https://i.pravatar.cc/150?u=${Math.random() * 10}`,
            }}
          />
        </CardHeader>
        <Divider />
        <CardBody>
          <NewOppItemLocation>
            <MdLocationPin />
            <NewOppItemLocationText>Lviv city center</NewOppItemLocationText>
          </NewOppItemLocation>
          <NewOppItemText>
            Make beautiful websites regardless of your design experience. Make
            beautiful websites regardless of your design experience. beautiful
            websites regardless of your design experience.
          </NewOppItemText>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link isExternal showAnchorIcon href="">
            Зв&apos;язатися з волонтером
          </Link>
        </CardFooter>
      </NewOppItemContainer>
    </Card>
  );
};

export default NewOppItem;
