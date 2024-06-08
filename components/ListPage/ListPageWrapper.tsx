import { ListPageContainer } from "@/styles/ListPageStyles";
import { ListPageHeader } from "..";

const ListPageWrapper = ({
  children,
  buttonTitle,
  onClick,
  selectedCategoryId,
  setSelectedCategoryId,
}: {
  children: React.ReactNode;
  buttonTitle?: string;
  onClick?: () => void;
  selectedCategoryId?: string;
  setSelectedCategoryId?: React.Dispatch<React.SetStateAction<string>>;
}): React.ReactElement => {
  return (
    <ListPageContainer>
      <ListPageHeader
        buttonTitle={buttonTitle}
        onClick={onClick}
        selectedCategoryId={selectedCategoryId}
        setSelectedCategoryId={setSelectedCategoryId}
      />
      {children}
    </ListPageContainer>
  );
};

export default ListPageWrapper;
