import { INeed } from "@/models/need";
import {
  NeedsItemBody,
  NeedsItemContainer,
  NeedsItemDate,
  NeedsItemImage,
  NeedsItemTags,
  NeedsItemText,
  NeedsItemTitle,
} from "@/styles/NeedsStyles";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  User,
} from "@nextui-org/react";

const NeedsItem = ({
  title,
  body,
  location,
}: Partial<INeed>): React.ReactElement => {
  return (
    <Card shadow="sm">
      <NeedsItemContainer>
        <CardHeader className="justify-between gap-4">
          <NeedsItemTitle>{title}</NeedsItemTitle>
          <NeedsItemDate>{location} - 23 жовтня 2023 р.</NeedsItemDate>
        </CardHeader>
        <CardBody>
          <NeedsItemBody>
            <NeedsItemImage $url="https://images.unsplash.com/photo-1710279750007-15bbdcc94033?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8" />
            <NeedsItemText>{body}</NeedsItemText>
          </NeedsItemBody>
        </CardBody>
        <CardFooter className="justify-between rounded-large">
          <User
            name="Jane Doe"
            avatarProps={{
              src: `https://i.pravatar.cc/150?u=${Math.random() * 20}`,
              size: "sm",
            }}
          />
          <NeedsItemTags>
            <Chip color="warning" variant="flat">
              Одяг
            </Chip>
            <Chip color="secondary" variant="flat">
              Спорядження
            </Chip>
            <Chip color="success" variant="flat">
              Військові
            </Chip>
          </NeedsItemTags>
        </CardFooter>
      </NeedsItemContainer>
    </Card>
  );
};

export default NeedsItem;
