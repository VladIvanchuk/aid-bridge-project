"use client";
import {
  CreateNeedContainer,
  CreateNeedContainerFooter,
  CreateNeedContainerHeader,
  CreateNeedContainerRow,
  ImagePickerContainer,
} from "@/styles/NeedsStyles";
import { CreateModal } from "..";
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { createNeed } from "@/lib/api";
import { useState } from "react";

export const categories = [
  { value: "category1", label: "Category 1" },
  { value: "category2", label: "Category 2" },
];

interface CreateNeedProps {
  isOpen: boolean;
  onOpenChange: () => void;
}
const CreateNeed = ({
  isOpen,
  onOpenChange,
}: CreateNeedProps): React.ReactElement => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    location: "",
    author: "Name",
  });

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value,
    );
    setFormData((prev) => ({
      ...prev,
      selectedCategories: selectedOptions,
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await createNeed(formData);
      console.log("Need created:", response);
      onOpenChange();
    } catch (error) {
      console.error("Error creating need:", error);
    }
  };

  return (
    <CreateModal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      title="Створити потребу"
    >
      <CreateNeedContainer>
        <CreateNeedContainerHeader>
          <ImagePickerContainer>
            <Input type="file" />
          </ImagePickerContainer>
          <Input
            type="text"
            name="title"
            label="Заголовок"
            value={formData.title}
            onChange={handleChange}
          />
        </CreateNeedContainerHeader>
        <Textarea
          label="Опис"
          name="body"
          placeholder="Введіть опис"
          value={formData.body}
          onChange={handleChange}
        />
        <CreateNeedContainerRow>
          <Input
            type="text"
            name="location"
            label="Місцезнаходження"
            value={formData.location}
            onChange={handleChange}
          />
          <Select
            label="Категорії"
            name="categories"
            placeholder="Оберіть категорії"
            selectionMode="multiple"
            onChange={handleCategoryChange}
          >
            {categories.map((category) => (
              <SelectItem key={category.value} value={category.value}>
                {category.label}
              </SelectItem>
            ))}
          </Select>
        </CreateNeedContainerRow>
        <CreateNeedContainerFooter>
          <Button color="default" onClick={onOpenChange}>
            Скасувати
          </Button>
          <Button color="primary" onClick={handleSubmit}>
            Опублікувати
          </Button>
        </CreateNeedContainerFooter>
      </CreateNeedContainer>
    </CreateModal>
  );
};

export default CreateNeed;
