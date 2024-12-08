"use client";

import { DateFormatter, Loader } from "@/components";
import { getNewsById } from "@/lib/news/api";
import { getUserById } from "@/lib/user/api";
import { INews } from "@/models/news";
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
import { User } from "@nextui-org/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const NewsDetail = ({ params }: { params: any }): React.ReactElement => {
  const [need, setData] = useState<INews | null>(null);
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getNewsById(params.id).then((data) => {
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
              as={Link}
              href={`/profile/${user?._id}`}
              avatarProps={{
                src: user?.userProfile.profilePhoto ?? "",
                size: "md",
              }}
            />
            <NeedDetailHeaderRow>
              <NeedsItemDate>
                <DateFormatter date={need.createdAt} />
              </NeedsItemDate>
            </NeedDetailHeaderRow>
          </NeedDetailHeaderBottom>
        </NeedDetailHeaderText>
      </NeedDetailHeader>
      <NeedDetailBody>{need.body}</NeedDetailBody>
    </NeedDetailContainer>
  );
};

export default NewsDetail;
