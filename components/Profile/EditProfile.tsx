"use client";

import { updateUserData } from "@/lib/user/api";
import { IUser } from "@/models/user";
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
import { useAuth } from "@/contexts/AuthContext";

export const roles = [
  { value: "Волонтер", label: "Волонтер" },
  { value: "Бенефіціар", label: "Бенефіціар" },
];

interface EditProfileProps {
  isOpen: boolean;
  onOpenChange: () => void;
}

const EditProfile = ({
  isOpen,
  onOpenChange,
  userProfile,
}: EditProfileProps & Partial<IUser>): React.ReactElement => {
  const { fetchUserData } = useAuth();
  const [imageURL, setImageURL] = useState<string>("");
  const [formData, setFormData] = useState({
    username: "",
    role: "",
    location: "",
    profilePhoto: "",
    bio: "",
  });

  useEffect(() => {
    if (userProfile) {
      setFormData((prev) => ({
        ...prev,
        username: userProfile.username,
        role: userProfile.role,
        location: userProfile.location,
        profilePhoto: userProfile.profilePhoto,
        bio: userProfile.bio,
      }));
    }
  }, [userProfile]);

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
    <CreateModal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      title="Редагувати профіль"
    >
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
    </CreateModal>
  );
};

export default EditProfile;
