import { ListPageContainer } from "@/styles/ListPageStyles";
import { ListPageHeader } from "..";

const ListPageWrapper = ({
  children,
  buttonTitle,
}: {
  children: React.ReactNode;
  buttonTitle: string;
}): React.ReactElement => {
  return (
    <ListPageContainer>
      <ListPageHeader buttonTitle={buttonTitle} />
      {children}
    </ListPageContainer>
  );
};

export default ListPageWrapper;
