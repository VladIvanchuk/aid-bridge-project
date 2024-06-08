"use client";
import { getCategoriesByIds } from "@/lib/category/api";
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
  categories,
}: Partial<INeed>): React.ReactElement => {
  const [user, setUser] = useState<IUser | null>(null);
  const [categoriesData, setCategoriesData] = useState<[]>([]);

  useEffect(() => {
    const fetchUser = async () => {
      if (author) {
        const data = await getUserById(author.toString());
        setUser(data.data);
      }
    };

    const fetchCategories = async () => {
      if (categories && categories.length > 0) {
        const data = await getCategoriesByIds(categories);
        setCategoriesData(data.data);
      }
    };

    fetchUser();
    fetchCategories();
  }, [author, categories]);

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
            as={Link}
            href={`profile/${user?._id}`}
            name={user?.userProfile?.username ?? ""}
            avatarProps={{
              src: user?.userProfile.profilePhoto ?? "",
              size: "sm",
            }}
          />
          <NeedsItemTags>
            {categoriesData.map(({ _id, color, name }) => (
              <Chip
                key={_id}
                color={color as "primary" | "secondary"}
                variant="flat"
              >
                {name}
              </Chip>
            ))}
          </NeedsItemTags>
        </CardFooter>
      </NeedsItemContainer>
    </Card>
  );
};

export default NeedsItem;
