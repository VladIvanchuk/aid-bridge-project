import {
  RecentNeedsItemContainer,
  RecentNeedsItemTitle,
  RecentNeedsItemDate,
  RecentNeedsItemTags,
  RecentNeedsItemText,
} from "@/styles/HomeStyles";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  User,
} from "@nextui-org/react";

const RecentNeedsItem = (): React.ReactElement => {
  return (
    <Card shadow="sm">
      <RecentNeedsItemContainer>
        <CardHeader className="justify-between gap-4">
          <RecentNeedsItemTitle>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit.
          </RecentNeedsItemTitle>
          <RecentNeedsItemDate>Бахмут - 23 жовтня 2023 р.</RecentNeedsItemDate>
        </CardHeader>
        <CardBody>
          <RecentNeedsItemText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            pharetra diam eget diam imperdiet blandit. Donec a justo semper,
            fermentum nibh vel, vulputate ex. Curabitur imperdiet diam nec arcu
            consequat, eu tincidunt ex hendrerit. Ut mauris dui, molestie id
            purus vel, maximus maximus magna. Quisque lacinia quam aliquet augue
            malesuada consectetur in eleifend diam. Donec ut dolor laoreet lorem
            pulvinar pharetra. Nunc iaculis rhoncus eros vel vehicula. Sed sed
            dolor orci. Proin sed metus ac quam tincidunt scelerisque. Quisque
            vel quam non nulla tincidunt pellentesque. In erat ipsum, finibus
            ornare sapien nec, elementum consequat quam. Praesent eu lacinia
            nulla, eu tincidunt nibh. Morbi pellentesque enim pulvinar, ornare
            dui congue, suscipit mi.
          </RecentNeedsItemText>
        </CardBody>
        <CardFooter className="justify-between rounded-large">
          <User
            name="Jane Doe"
            avatarProps={{
              src: `https://i.pravatar.cc/150?u=${Math.random() * 20}`,
              size: "sm",
            }}
          />
          <RecentNeedsItemTags>
            <Chip color="warning" variant="flat">
              Одяг
            </Chip>
            <Chip color="secondary" variant="flat">
              Спорядження
            </Chip>
            <Chip color="success" variant="flat">
              Військові
            </Chip>
          </RecentNeedsItemTags>
        </CardFooter>
      </RecentNeedsItemContainer>
    </Card>
  );
};

export default RecentNeedsItem;
