import { RecentNeedsItem } from "..";

const RecentNeeds = (): React.ReactElement => {
  return (
    <div>
      <h2>Останні потреби</h2>
      <RecentNeedsItem />
      <RecentNeedsItem />
      <RecentNeedsItem />
    </div>
  );
};

export default RecentNeeds;
