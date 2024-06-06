import { ListPageContainer } from "@/styles/ListPageStyles";
import { ListPageHeader } from "..";

const ListPageWrapper = ({
  children,
  buttonTitle,
  onClick,
}: {
  children: React.ReactNode;
  buttonTitle?: string;
  onClick?: () => void;
}): React.ReactElement => {
  return (
    <ListPageContainer>
      <ListPageHeader buttonTitle={buttonTitle} onClick={onClick} />
      {children}
    </ListPageContainer>
  );
};

export default ListPageWrapper;
