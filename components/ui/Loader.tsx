import { LoaderContainer } from "@/styles/UiStyles";
import { Spinner } from "@nextui-org/react";

const Loader = (): React.ReactElement => {
  return (
    <LoaderContainer>
      <Spinner size="lg" />
    </LoaderContainer>
  );
};

export default Loader;
