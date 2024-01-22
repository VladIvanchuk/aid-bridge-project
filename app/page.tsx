import { RecentNeeds, BestVolunteers } from "@/components";
import { HomeContainer } from "@/styles/HomeStyles";

const Home = (): React.ReactElement => {
  return (
    <HomeContainer>
      <RecentNeeds />
      <BestVolunteers />
    </HomeContainer>
  );
};

export default Home;
