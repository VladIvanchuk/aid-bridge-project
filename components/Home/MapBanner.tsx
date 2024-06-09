import {
  MapBannerButton,
  MapBannerContainer,
  MapBannerText,
} from "@/styles/HomeStyles";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const MapBanner = (): React.ReactElement => {
  return (
    <MapBannerContainer>
      <MapBannerText>
        Перегляньте найближчі потреби або волонтерські можливості
      </MapBannerText>
      <MapBannerButton as={Link} href={"/map"}>
        Відкрити карту <MdArrowOutward />
      </MapBannerButton>
    </MapBannerContainer>
  );
};

export default MapBanner;
