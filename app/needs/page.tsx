import { RecentNeedsItem } from "@/components";
import {
  NeedsWrapper,
  NeedsContainer,
  NeedsFilter,
} from "@/styles/NeedsStyles";
import { Chip } from "@nextui-org/react";

const Needs = (): React.ReactElement => {
  return (
    <NeedsWrapper>
      <NeedsFilter>
        <Chip color="warning" variant="flat">
          Одяг
        </Chip>
        <Chip color="secondary" variant="flat">
          Спорядження
        </Chip>
        <Chip color="success" variant="flat">
          Військові
        </Chip>
      </NeedsFilter>
      <NeedsContainer>
        {[...Array(3)].map((_, index) => (
          <RecentNeedsItem key={index} />
        ))}
      </NeedsContainer>
    </NeedsWrapper>
  );
};

export default Needs;
