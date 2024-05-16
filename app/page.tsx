import {
  BestVolunteers,
  MapBanner,
  NewOpportunities,
  News,
  Questions,
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
      <News />
      <Questions />
    </HomeContainer>
  );
};

export default Home;
