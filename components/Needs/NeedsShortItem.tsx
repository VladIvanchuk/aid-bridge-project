import {
  NeedsItemDate,
  NeedsItemImage,
  NeedsItemTags,
  NeedsItemText,
  NeedsShortItemBody,
  NeedsShortItemContainer,
  NeedsShortItemImage,
  NeedsShortItemTitle,
} from "@/styles/NeedsStyles";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  User,
} from "@nextui-org/react";

const NeedsShortItem = (): React.ReactElement => {
  return (
    <Card shadow="sm">
      <NeedsShortItemContainer>
        <CardHeader className="justify-between gap-4">
          <User
            name="Jane Doe"
            avatarProps={{
              src: `https://i.pravatar.cc/150?u=${Math.random() * 20}`,
              size: "sm",
            }}
          />
          <NeedsItemDate>Бахмут - 23 жовтня 2023 р.</NeedsItemDate>
        </CardHeader>
        <CardBody>
          <NeedsShortItemTitle>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit.
          </NeedsShortItemTitle>
          <NeedsShortItemBody>
            <NeedsShortItemImage $url="https://images.unsplash.com/photo-1710279750007-15bbdcc94033?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8" />
            <NeedsItemText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              pharetra diam eget diam imperdiet blandit. Donec a justo semper,
              fermentum nibh vel, vulputate ex. Curabitur imperdiet diam nec
              arcu consequat, eu tincidunt ex hendrerit. Ut mauris dui, molestie
              id purus vel, maximus maximus magna. Quisque lacinia quam aliquet
              augue malesuada consectetur in eleifend diam. Donec ut dolor
              laoreet lorem pulvinar pharetra. Nunc iaculis rhoncus eros vel
              vehicula. Sed sed dolor orci. Proin sed metus ac quam tincidunt
              scelerisque. Quisque vel quam non nulla tincidunt pellentesque. In
              erat ipsum, finibus ornare sapien nec, elementum consequat quam.
              Praesent eu lacinia nulla, eu tincidunt nibh. Morbi pellentesque
              enim pulvinar, ornare dui congue, suscipit mi.
            </NeedsItemText>
          </NeedsShortItemBody>
        </CardBody>
        <CardFooter className="justify-between rounded-large">
          <NeedsItemTags>
            <Chip color="warning" variant="flat">
              Одяг
            </Chip>
            <Chip color="secondary" variant="flat">
              Спорядження
            </Chip>
            <Chip color="success" variant="flat">
              Військові
            </Chip>
          </NeedsItemTags>
        </CardFooter>
      </NeedsShortItemContainer>
    </Card>
  );
};

export default NeedsShortItem;
