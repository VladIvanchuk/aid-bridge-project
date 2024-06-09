"use client";
import { useCreateChat } from "@/hooks/useCreateChat";
import { getUserById } from "@/lib/user/api";
import { IOpportunity } from "@/models/opportunity";
import { IUser } from "@/models/user";
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
import { useState, useEffect } from "react";
import { MdLocationPin } from "react-icons/md";

const NewOppItem = ({
  title,
  location,
  author,
}: Partial<IOpportunity>): React.ReactElement => {
  const [user, setUser] = useState<IUser | null>(null);
  const { handleCreate } = useCreateChat(user?._id);

  useEffect(() => {
    if (!author) return;
    async function fetchData() {
      const data = await getUserById(author?.toString() ?? "");
      setUser(data.data);
    }
    if (!user) {
      fetchData();
    }
  }, [setUser, user, author]);
  return (
    <Card shadow="sm" className="flex-1">
      <NewOppItemContainer>
        <CardHeader className="flex gap-3">
          <User
            name={user?.userProfile?.username ?? ""}
            description={user?.userProfile?.role ?? ""}
            avatarProps={{
              src: user?.userProfile.profilePhoto ?? "",
            }}
          />
        </CardHeader>
        <Divider />
        <CardBody>
          <NewOppItemLocation>
            <MdLocationPin />
            <NewOppItemLocationText>{location}</NewOppItemLocationText>
          </NewOppItemLocation>
          <NewOppItemText>{title}</NewOppItemText>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link isExternal showAnchorIcon onClick={handleCreate}>
            Зв&apos;язатися з волонтером
          </Link>
        </CardFooter>
      </NewOppItemContainer>
    </Card>
  );
};

export default NewOppItem;
