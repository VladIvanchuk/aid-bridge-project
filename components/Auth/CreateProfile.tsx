"use client";

import {
  CreateNeedContainer,
  CreateNeedContainerHeader,
  ImagePickerContainer,
  CreateNeedContainerRow,
  CreateNeedContainerFooter,
} from "@/styles/NeedsStyles";
import { Textarea, Select, SelectItem, Button, Input } from "@nextui-org/react";
import { useRef, useState } from "react";
import Image from "next/image";
import { useAuth } from "@/contexts/AuthContext";
import { updateUserData } from "@/lib/user/api";

export const roles = [
  { value: "Волонтер", label: "Волонтер" },
  { value: "Бенефіціар", label: "Бенефіціар" },
];

const CreateProfile = (): React.ReactElement => {
  const { onOpenChange, fetchUserData } = useAuth();
  const [imageURL, setImageURL] = useState<string>("");
  const [formData, setFormData] = useState({
    username: "",
    role: "",
    location: "",
    profilePhoto: "",
    bio: "",
    rating: 0,
  });

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

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      role: value,
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
      await updateUserData(formData);
      fetchUserData();
      onOpenChange();
    } catch (error) {
      console.error("Error creating profile:", error);
    }
  };
  return (
    <div>
      <CreateNeedContainer>
        <CreateNeedContainerHeader>
          <ImagePickerContainer onClick={handleImageSelect}>
            {imageURL ? (
              <Image
                src={imageURL}
                alt="Фото користувача"
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
            name="username"
            label="Ваше ім'я"
            value={formData.username}
            onChange={handleChange}
          />
        </CreateNeedContainerHeader>
        <Textarea
          label="Про себе"
          name="bio"
          value={formData.bio}
          onChange={handleChange}
        />
        <CreateNeedContainerRow>
          <Input
            type="text"
            name="location"
            label="Ведіть місцезнаходження"
            value={formData.location}
            onChange={handleChange}
          />
          <Select
            label="Роль"
            name="role"
            placeholder="Оберіть свою роль"
            onChange={handleCategoryChange}
          >
            {roles.map((role) => (
              <SelectItem key={role.value} value={role.value}>
                {role.label}
              </SelectItem>
            ))}
          </Select>
        </CreateNeedContainerRow>
        <CreateNeedContainerFooter>
          <Button color="primary" onClick={handleSubmit}>
            Завершити
          </Button>
        </CreateNeedContainerFooter>
      </CreateNeedContainer>
    </div>
  );
};

export default CreateProfile;
