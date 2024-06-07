"use client";
import { getCategories } from "@/lib/category/api";
import { ICategory } from "@/models/category";
import {
  ListPageHeaderContainer,
  ListPageHeaderFilter,
} from "@/styles/ListPageStyles";
import { Button, Chip } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import Loader from "../ui/Loader";

const PageHeader = ({
  buttonTitle,
  onClick,
}: {
  buttonTitle?: string;
  onClick?: () => void;
}): React.ReactElement => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data.data);
    });
  }, []);

  return (
    <ListPageHeaderContainer>
      <ListPageHeaderFilter>
        {categories.map(({ _id, color, name }) => (
          <Chip
            key={_id}
            color={color as "primary" | "secondary"}
            variant="flat"
          >
            {name}
          </Chip>
        ))}
      </ListPageHeaderFilter>
      {buttonTitle && (
        <Button color="primary" endContent={<FaPlus />} onClick={onClick}>
          {buttonTitle}
        </Button>
      )}
    </ListPageHeaderContainer>
  );
};

export default PageHeader;
