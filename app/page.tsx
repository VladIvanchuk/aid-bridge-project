import {
  BestVolunteers,
  MapBanner,
  NewOpportunities,
  News,
  RecentNeeds,
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
    </HomeContainer>
  );
};

export default Home;
