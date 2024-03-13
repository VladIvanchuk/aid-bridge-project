import { ListPageWrapper, VolunteersItem } from "@/components";
import { VolunteersContainer } from "@/styles/VolunteersStyles";

const Volunteers = (): React.ReactElement => {
  return (
    <ListPageWrapper>
      <VolunteersContainer>
        {[...Array(13)].map((_, index) => (
          <VolunteersItem key={index} />
        ))}
      </VolunteersContainer>
    </ListPageWrapper>
  );
};

export default Volunteers;
