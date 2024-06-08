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
  selectedCategoryId,
  setSelectedCategoryId,
}: {
  buttonTitle?: string;
  onClick?: () => void;
  selectedCategoryId?: string;
  setSelectedCategoryId?: React.Dispatch<React.SetStateAction<string>>;
}): React.ReactElement => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data.data);
    });
  }, []);

  const handleToggle = (id: string) => {
    if (!setSelectedCategoryId) return;
    if (selectedCategoryId === id) {
      setSelectedCategoryId("");
    } else {
      setSelectedCategoryId(id);
    }
  };

  return (
    <ListPageHeaderContainer>
      <ListPageHeaderFilter>
        {categories.map(({ _id, color, name }) => (
          <Chip
            key={_id}
            color={color as "primary" | "secondary"}
            variant="flat"
            onClick={() => handleToggle(_id)}
            className={selectedCategoryId === _id ? "bg-white" : ""}
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
