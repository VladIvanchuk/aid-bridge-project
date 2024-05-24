"use client";

import { DateFormatter } from "@/components";
import { getNeedById } from "@/lib/need/api";
import { INeed } from "@/models/need";
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
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getNeedById(params.id).then((data) => {
      setData(data.data);
      setLoading(false);
    });
  }, [params.id]);

  if (!need) return <p>No need data</p>;
  return (
    <NeedDetailContainer>
      <NeedDetailHeader>
        <NeedImage $url={need.ImageURL} />
        <NeedDetailHeaderText>
          <NeedDetailTitle>{need.title}</NeedDetailTitle>
          <NeedDetailHeaderBottom>
            <User
              name={need.author}
              avatarProps={{
                src: `https://i.pravatar.cc/150?u=${Math.random() * 20}`,
                size: "md",
              }}
            />
            <NeedDetailHeaderRow>
              <NeedsItemDate>
                {need.location} - <DateFormatter date={need.createdAt} />
              </NeedsItemDate>
              <Button color="primary">Відгукнутись</Button>
            </NeedDetailHeaderRow>
          </NeedDetailHeaderBottom>
        </NeedDetailHeaderText>
      </NeedDetailHeader>
      <NeedDetailBody>{need.body}</NeedDetailBody>
    </NeedDetailContainer>
  );
};

export default NeedDetail;
