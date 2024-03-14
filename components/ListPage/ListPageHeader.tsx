import {
  ListPageHeaderContainer,
  ListPageHeaderFilter,
} from "@/styles/ListPageStyles";
import { Chip, Button } from "@nextui-org/react";
import { FaPlus } from "react-icons/fa6";

const PageHeader = ({
  buttonTitle,
}: {
  buttonTitle: string;
}): React.ReactElement => {
  return (
    <ListPageHeaderContainer>
      <ListPageHeaderFilter>
        <Chip color="warning" variant="flat">
          Одяг
        </Chip>
        <Chip color="secondary" variant="flat">
          Спорядження
        </Chip>
        <Chip color="success" variant="flat">
          Військові
        </Chip>
      </ListPageHeaderFilter>
      <Button color="primary" endContent={<FaPlus />}>
        {buttonTitle}
      </Button>
    </ListPageHeaderContainer>
  );
};

export default PageHeader;
