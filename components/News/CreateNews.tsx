"use client";
import { useAuth } from "@/contexts/AuthContext";
import { createNews } from "@/lib/news/api";
import {
  CreateNeedContainer,
  CreateNeedContainerFooter,
  CreateNeedContainerHeader,
  ImagePickerContainer,
} from "@/styles/NeedsStyles";
import { Button, Input, Textarea } from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CreateModal } from "..";

interface FormData {
  title: string;
  author?: string;
  body: string;
  ImageURL: string;
}

interface CreateNewsProps {
  isOpen: boolean;
  onOpenChange: () => void;
  setUpdateList: React.Dispatch<React.SetStateAction<boolean>>;
}
const CreateNews = ({
  isOpen,
  onOpenChange,
  setUpdateList,
}: CreateNewsProps): React.ReactElement => {
  const { user } = useAuth();
  const [formData, setFormData] = useState<FormData>({
    title: "",
    body: "",
    author: user?._id as string,
    ImageURL: "",
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
      const response = await createNews(formData);
      console.log("Need created:", response);
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
      title="Створити статтю"
      size="4xl"
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
          label="Текст"
          name="body"
          placeholder="Введіть текст статті"
          value={formData.body}
          onChange={handleChange}
        />
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

export default CreateNews;
