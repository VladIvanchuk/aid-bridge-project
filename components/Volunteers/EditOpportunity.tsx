"use client";
import { useAuth } from "@/contexts/AuthContext";
import {
  getOpportunitiesById,
  updateOpportunities,
} from "@/lib/opportunity/api";
import {
  CreateNeedContainer,
  CreateNeedContainerFooter,
  CreateNeedContainerHeader,
  CreateNeedContainerRow,
} from "@/styles/NeedsStyles";
import { Button, Input, Textarea } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { CreateModal } from "..";

interface FormData {
  title: string;
  body: string;
  location: string;
  author: string | undefined;
}

interface EditOpportunityProps {
  isOpen: boolean;
  onOpenChange: () => void;
  setUpdateList: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
}
const EditOpportunity = ({
  isOpen,
  onOpenChange,
  setUpdateList,
  id,
}: EditOpportunityProps): React.ReactElement => {
  const { user } = useAuth();
  const [formData, setFormData] = useState<FormData>({
    title: "",
    body: "",
    location: "",
    author: user?._id,
  });

  useEffect(() => {
    getOpportunitiesById(id).then((data) => {
      const opp = data.data;
      setFormData((prev) => ({
        ...prev,
        title: opp.title,
        body: opp.body,
        location: opp.location,
        author: opp.author,
      }));
    });
  }, [id]);

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
      const response = await updateOpportunities(id, formData);
      console.log("Opportunity updated:", response);
      onOpenChange();
      setUpdateList(true);
    } catch (error) {
      console.error("Error updating Opportunity:", error);
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
      size="2xl"
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

export default EditOpportunity;
