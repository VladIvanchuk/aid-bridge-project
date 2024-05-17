import { ListPageWrapper, NeedsList } from "@/components";

const Needs = (): React.ReactElement => {
  return (
    <ListPageWrapper buttonTitle="Додати потребу">
      <NeedsList />
    </ListPageWrapper>
  );
};

export default Needs;
