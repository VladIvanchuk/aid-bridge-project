"use client";
import { useAuth } from "@/contexts/AuthContext";
import { createNeed } from "@/lib/need/api";
import {
  CreateNeedContainer,
  CreateNeedContainerFooter,
  CreateNeedContainerHeader,
  CreateNeedContainerRow,
  ImagePickerContainer,
} from "@/styles/NeedsStyles";
import {
  Button,
  Input,
  Select,
  SelectItem,
  Textarea,
  Selection,
} from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CreateModal } from "..";
import { ICategory } from "@/models/category";
import { getCategories } from "@/lib/category/api";

interface FormData {
  title: string;
  body: string;
  location: string;
  author: string | undefined;
  categories: string[];
  ImageURL: string;
}

interface CreateNeedProps {
  isOpen: boolean;
  onOpenChange: () => void;
  setUpdateList: React.Dispatch<React.SetStateAction<boolean>>;
}
const CreateNeed = ({
  isOpen,
  onOpenChange,
  setUpdateList,
}: CreateNeedProps): React.ReactElement => {
  const { user } = useAuth();
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<Selection>(
    new Set([]),
  );
  const [formData, setFormData] = useState<FormData>({
    title: "",
    body: "",
    location: "",
    author: user?._id as string,
    categories: [],
    ImageURL: "123",
  });

  const [imageURL, setImageURL] = useState<string>("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageSelect = () => {
    fileInputRef.current?.click();
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
      const response = await createNeed(formData);
      console.log("Need created:", response);
      onOpenChange();
      setUpdateList(true);
    } catch (error) {
      console.error("Error creating need:", error);
    }
  };

  useEffect(() => {
    const categoryIds = Array.from(selectedCategories).map((key) =>
      String(key),
    );
    setFormData((prev) => ({
      ...prev,
      categories: categoryIds,
    }));
  }, [selectedCategories]);

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data.data);
    });
  }, []);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      author: user?._id as string,
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
          <ImagePickerContainer onClick={handleImageSelect}>
            {imageURL ? (
              <Image
                src={imageURL}
                alt="Фото потреби"
                width={300}
                height={150}
              />
            ) : (
              <>
                <span>Натисніть для завантаження зображення</span>
                <Input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                />
              </>
            )}
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
            onSelectionChange={setSelectedCategories}
            value={formData.categories}
          >
            {categories.map((category) => (
              <SelectItem key={category._id} value={category.name}>
                {category.name}
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
