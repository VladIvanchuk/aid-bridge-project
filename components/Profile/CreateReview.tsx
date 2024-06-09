"use client";
import { createReview } from "@/lib/review/api";
import {
  CreateNeedContainer,
  CreateNeedContainerFooter,
  CreateNeedContainerHeader,
  CreateNeedContainerRow,
} from "@/styles/NeedsStyles";
import { Button, Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import CreateModal from "../CreateModal/CreateModal";
import { useAuth } from "@/contexts/AuthContext";

interface FormData {
  author: string;
  target: string;
  text: string;
  rating: number;
}

interface CreateReviewProps {
  isOpen: boolean;
  onOpenChange: () => void;
  setUpdateList: React.Dispatch<React.SetStateAction<boolean>>;
  target: string;
}
const CreateReview = ({
  isOpen,
  onOpenChange,
  setUpdateList,
  target,
}: CreateReviewProps): React.ReactElement => {
  const { user } = useAuth();
  const [formData, setFormData] = useState<FormData>({
    author: "",
    target: "",
    text: "",
    rating: 0,
  });

  useEffect(() => {
    if (target) {
      setFormData((prev) => ({
        ...prev,
        target: target,
      }));
    }
  }, [target]);

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        author: user?._id,
      }));
    }
  }, [user]);

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
      const response = await createReview(formData);
      console.log("Review created:", response);
      onOpenChange();
      setUpdateList(true);
    } catch (error) {
      console.error("Error creating review:", error);
    }
  };

  return (
    <CreateModal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      title="Додати відгук"
      size="2xl"
    >
      <CreateNeedContainer>
        <Input
          type="text"
          name="text"
          label="Текст відгуку"
          value={formData.text}
          onChange={handleChange}
        />
        <Input
          type="rating"
          name="rating"
          label="Оцінка"
          value={formData.rating.toString()}
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

export default CreateReview;
