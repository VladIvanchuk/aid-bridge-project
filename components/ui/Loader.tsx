import { LoaderContainer } from "@/styles/UiStyles";
import { Spinner } from "@nextui-org/react";

const Loader = ({
  isFullscreen = false,
}: {
  isFullscreen?: boolean;
}): React.ReactElement => {
  return (
    <LoaderContainer $isFullscreen={isFullscreen}>
      <Spinner size="lg" />
    </LoaderContainer>
  );
};

export default Loader;
