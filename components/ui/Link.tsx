import { LinkContainer } from "@/styles/UiStyles";
import Link from "next/link";

interface LinkComponentProps {
  text: string;
  to: string;
}

const LinkComponent = ({
  text,
  to,
}: LinkComponentProps): React.ReactElement => {
  return (
    <LinkContainer>
      <Link href={`/{to}`}>{text}</Link>
    </LinkContainer>
  );
};

export default LinkComponent;
