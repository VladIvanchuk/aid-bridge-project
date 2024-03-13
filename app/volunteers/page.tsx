import { VolunteersItem } from "@/components";
import {
  VolunteersFilter,
  VolunteersContainer,
  VolunteersWrapper,
} from "@/styles/VolunteersStyles";
import { Chip } from "@nextui-org/react";

const Volunteers = (): React.ReactElement => {
  return (
    <VolunteersWrapper>
      <VolunteersFilter>
        <Chip color="warning" variant="flat">
          Одяг
        </Chip>
        <Chip color="secondary" variant="flat">
          Спорядження
        </Chip>
        <Chip color="success" variant="flat">
          Військові
        </Chip>
      </VolunteersFilter>
      <VolunteersContainer>
        {[...Array(13)].map((_, index) => (
          <VolunteersItem key={index} />
        ))}
      </VolunteersContainer>
    </VolunteersWrapper>
  );
};

export default Volunteers;
