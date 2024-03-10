import {
  MapBannerButton,
  MapBannerContainer,
  MapBannerText,
} from "@/styles/HomeStyles";
import { MdArrowOutward } from "react-icons/md";

const MapBanner = (): React.ReactElement => {
  return (
    <MapBannerContainer>
      <MapBannerText>
        Перегляньте найближчі потреби або волонтерські можливості
      </MapBannerText>
      <MapBannerButton>
        Відкрити карту <MdArrowOutward />
      </MapBannerButton>
    </MapBannerContainer>
  );
};

export default MapBanner;
