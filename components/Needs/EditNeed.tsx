"use client";
import { useAuth } from "@/contexts/AuthContext";
import { getCategories } from "@/lib/category/api";
import { getNeedById, updateNeed } from "@/lib/need/api";
import { ICategory } from "@/models/category";
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
  Selection,
  Textarea,
} from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CreateModal } from "..";

interface FormData {
  title: string;
  body: string;
  location: string;
  author: string | undefined;
  categories: string[];
  ImageURL: string;
}

interface EditNeedProps {
  isOpen: boolean;
  onOpenChange: () => void;
  setUpdateList: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
}
const EditNeed = ({
  isOpen,
  onOpenChange,
  setUpdateList,
  id,
}: EditNeedProps): React.ReactElement => {
  const { user } = useAuth();
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<Selection>(
    new Set([]),
  );
  const [formData, setFormData] = useState<FormData>({
    title: "",
    body: "",
    location: "",
    author: user?._id,
    categories: [],
    ImageURL: "123",
  });

  useEffect(() => {
    getNeedById(id).then((data) => {
      const need = data.data;
      setFormData((prev) => ({
        ...prev,
        title: need.title,
        body: need.body,
        location: need.location,
        author: need.author,
        categories: need.categories,
        ImageURL: need.ImageURL,
      }));
    });
  }, [id]);

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
      const response = await updateNeed(id, formData);
      console.log("Need updated:", response);
      onOpenChange();
      setUpdateList(true);
    } catch (error) {
      console.error("Error updating need:", error);
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
            Зберегти
          </Button>
        </CreateNeedContainerFooter>
      </CreateNeedContainer>
    </CreateModal>
  );
};

export default EditNeed;
