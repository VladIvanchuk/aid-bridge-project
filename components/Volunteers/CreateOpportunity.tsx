"use client";
import { useAuth } from "@/contexts/AuthContext";
import { createOpportunity } from "@/lib/opportunity/api";
import {
  CreateNeedContainer,
  CreateNeedContainerFooter,
  CreateNeedContainerHeader,
  CreateNeedContainerRow,
  ImagePickerContainer,
} from "@/styles/NeedsStyles";
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CreateModal } from "..";

export const categories = [
  { value: "category1", label: "Category 1" },
  { value: "category2", label: "Category 2" },
];

interface FormData {
  title: string;
  body: string;
  location: string;
  author: string | undefined;
  categories: string[];
}

interface CreateOpportunityProps {
  isOpen: boolean;
  onOpenChange: () => void;
  setUpdateList: React.Dispatch<React.SetStateAction<boolean>>;
}
const CreateOpportunity = ({
  isOpen,
  onOpenChange,
  setUpdateList,
}: CreateOpportunityProps): React.ReactElement => {
  const { user } = useAuth();
  const [formData, setFormData] = useState<FormData>({
    title: "",
    body: "",
    location: "",
    author: user?._id,
    categories: [],
  });

  const [imageURL, setImageURL] = useState<string>("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    setFormData((prev) => ({
      ...prev,
      categories: [newValue],
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

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const url = URL.createObjectURL(file);
      setImageURL(url);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await createOpportunity(formData);
      console.log("Opportunity created:", response);
      onOpenChange();
      setUpdateList(true);
    } catch (error) {
      console.error("Error creating need:", error);
    }
  };

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      author: user?._id,
    }));
  }, [user]);

  return (
    <CreateModal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      title="Створити потребу"
    >
      <CreateNeedContainer>
        <CreateNeedContainerHeader>
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
            multiple
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

export default CreateOpportunity;
