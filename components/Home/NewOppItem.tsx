import { NewOppItemContainer } from "@/styles/HomeStyles";
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
    <Card shadow="sm">
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
          <p>Make beautiful websites regardless of your design experience.</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href="https://github.com/nextui-org/nextui"
          >
            Visit source code on GitHub.
          </Link>
        </CardFooter>
      </NewOppItemContainer>
    </Card>
  );
};

export default NewOppItem;
