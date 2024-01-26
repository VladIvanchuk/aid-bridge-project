import { RecentNeeds, BestVolunteers, NewOpportunities } from "@/components";
import { HomeContainer, HomeTopContainer } from "@/styles/HomeStyles";

const Home = (): React.ReactElement => {
  return (
    <HomeContainer>
      <HomeTopContainer>
        <RecentNeeds />
        <BestVolunteers />
      </HomeTopContainer>
      <NewOpportunities />
    </HomeContainer>
  );
};

export default Home;
