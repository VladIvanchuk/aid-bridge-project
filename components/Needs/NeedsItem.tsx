"use client";
import { getUserById } from "@/lib/user/api";
import { INeed } from "@/models/need";
import { IUser } from "@/models/user";
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
import { useEffect, useState } from "react";
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
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    if (!author) return;
    async function fetchData() {
      const data = await getUserById(author?.toString());
      setUser(data.data);
    }
    if (!user) {
      fetchData();
    }
  }, [setUser, user, author]);

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
            name={user?.userProfile?.username ?? ""}
            avatarProps={{
              src: user?.userProfile.profilePhoto ?? "",
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
