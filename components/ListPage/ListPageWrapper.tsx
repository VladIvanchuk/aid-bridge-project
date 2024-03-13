import { ListPageContainer } from "@/styles/ListPageStyles";
import { ListPageHeader } from "..";

const ListPageWrapper = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {
  return (
    <ListPageContainer>
      <ListPageHeader />
      {children}
    </ListPageContainer>
  );
};

export default ListPageWrapper;
