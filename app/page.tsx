import {
  RecentNeeds,
  BestVolunteers,
  NewOpportunities,
  MapBanner,
  News,
} from "@/components";
import { HomeContainer, HomeTopContainer } from "@/styles/HomeStyles";

const Home = (): React.ReactElement => {
  return (
    <HomeContainer>
      <HomeTopContainer>
        <RecentNeeds />
        <BestVolunteers />
      </HomeTopContainer>
      <NewOpportunities />
      <MapBanner />
      <News />
    </HomeContainer>
  );
};

export default Home;
