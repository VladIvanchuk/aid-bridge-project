"use client";

import { DateFormatter, Loader } from "@/components";
import { useCreateChat } from "@/hooks/useCreateChat";
import { getNeedById } from "@/lib/need/api";
import { getUserById } from "@/lib/user/api";
import { INeed } from "@/models/need";
import { IUser } from "@/models/user";
import {
  NeedDetailBody,
  NeedDetailContainer,
  NeedDetailHeader,
  NeedDetailHeaderBottom,
  NeedDetailHeaderRow,
  NeedDetailHeaderText,
  NeedDetailTitle,
  NeedImage,
  NeedsItemDate,
} from "@/styles/NeedsStyles";
import { Button, User } from "@nextui-org/react";
import { useEffect, useState } from "react";

const NeedDetail = ({
  params,
}: {
  params: { id: string };
}): React.ReactElement => {
  const [need, setData] = useState<INeed | null>(null);
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setLoading] = useState(true);


  const { handleCreate } = useCreateChat(user?._id);

  useEffect(() => {
    getNeedById(params.id).then((data) => {
      setData(data.data);
      setLoading(false);
    });
  }, [params.id]);

  useEffect(() => {
    async function fetchData() {
      if (need === null) return;
      const data = await getUserById(need.author?.toString());
      setUser(data.data);
    }
    if (!user) {
      fetchData();
    }
  }, [setUser, user, need]);

  if (isLoading) return <Loader isFullscreen={true} />;
  if (!need) return <p>No need data</p>;
  return (
    <NeedDetailContainer>
      <NeedDetailHeader>
        <NeedImage $url={need.ImageURL} />
        <NeedDetailHeaderText>
          <NeedDetailTitle>{need.title}</NeedDetailTitle>
          <NeedDetailHeaderBottom>
            <User
              name={user?.userProfile?.username ?? ""}
              avatarProps={{
                src: user?.userProfile.profilePhoto ?? "",
                size: "md",
              }}
            />
            <NeedDetailHeaderRow>
              <NeedsItemDate>
                {need.location} - <DateFormatter date={need.createdAt} />
              </NeedsItemDate>
              <Button color="primary" onClick={handleCreate}>
                Відгукнутись
              </Button>
            </NeedDetailHeaderRow>
          </NeedDetailHeaderBottom>
        </NeedDetailHeaderText>
      </NeedDetailHeader>
      <NeedDetailBody>{need.body}</NeedDetailBody>
    </NeedDetailContainer>
  );
};

export default NeedDetail;
