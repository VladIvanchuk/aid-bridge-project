import { Recommendations } from "@/components";
import { ForYouTitle, ForYouWrapper } from "@/styles/ForYouStyles";
import { Card } from "@nextui-org/react";

const ForYou = (): React.ReactElement => {
  return (
    <ForYouWrapper>
      <Card className="p-4" shadow="sm" fullWidth>
        <ForYouTitle>
          Ми підбібрали для вас те що зможе вас зацікавити
        </ForYouTitle>
      </Card>
      <Recommendations />
    </ForYouWrapper>
  );
};

export default ForYou;
