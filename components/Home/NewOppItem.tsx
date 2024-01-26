import { NewOppItemContainer, NewOppItemText } from "@/styles/HomeStyles";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  User,
} from "@nextui-org/react";

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
          <NewOppItemText>
            Make beautiful websites regardless of your design experience. Make
            beautiful websites regardless of your design experience. beautiful
            websites regardless of your design experience.
          </NewOppItemText>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href="https://github.com/nextui-org/nextui"
          >
            Зв&apos;язатися з волонтером
          </Link>
        </CardFooter>
      </NewOppItemContainer>
    </Card>
  );
};

export default NewOppItem;
