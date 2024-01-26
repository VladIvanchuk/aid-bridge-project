import { RecentNeedsContainer, HomeTitle } from "@/styles/HomeStyles";
import { RecentNeedsItem } from "..";
import { LinkContainer } from "@/styles/UiStyles";
import Link from "next/link";

const RecentNeeds = (): React.ReactElement => {
  return (
    <RecentNeedsContainer>
      <HomeTitle>Останні потреби</HomeTitle>
      {[...Array(3)].map((_, index) => (
        <RecentNeedsItem key={index} />
      ))}
      <LinkContainer>
        <Link href="/needs">Переглянути більше</Link>
      </LinkContainer>
    </RecentNeedsContainer>
  );
};

export default RecentNeeds;
