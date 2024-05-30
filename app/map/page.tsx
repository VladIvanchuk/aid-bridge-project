import { Map } from "@/components";
import { ForYouTitle } from "@/styles/ForYouStyles";
import { MapPageContainer } from "@/styles/NeedsStyles";
import { Card } from "@nextui-org/react";

const MapPage = (): React.ReactElement => {
  return (
    <MapPageContainer>
      <Card className="p-4" shadow="sm" fullWidth>
        <ForYouTitle>Перегляньте потреби на карті</ForYouTitle>
      </Card>
      <Map />
    </MapPageContainer>
  );
};

export default MapPage;
