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
import Link from "next/link";
import { DateFormatter } from "..";

const NeedsItem = ({
  _id,
  title,
  body,
  location,
  ImageURL,
  author,
  createdAt,
}: Partial<INeed>): React.ReactElement => {
  return (
    <Card shadow="sm" as={Link} href={`needs/${_id}`}>
      <NeedsItemContainer>
        <CardHeader className="justify-between gap-4">
          <NeedsItemTitle>{title}</NeedsItemTitle>
          <NeedsItemDate>
            {location} - <DateFormatter date={createdAt} />
          </NeedsItemDate>
        </CardHeader>
        <CardBody>
          <NeedsItemBody>
            <NeedsItemImage $url={ImageURL ?? ""} />
            <NeedsItemText>{body}</NeedsItemText>
          </NeedsItemBody>
        </CardBody>
        <CardFooter className="justify-between rounded-large">
          <User
            name={author ?? ""}
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
