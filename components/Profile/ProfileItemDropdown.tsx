"use client";
import { deleteNeed } from "@/lib/need/api";
import { deleteOpportunities } from "@/lib/opportunity/api";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  useDisclosure,
} from "@nextui-org/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import EditNeed from "../Needs/EditNeed";
import EditOpportunity from "../Volunteers/EditOpportunity";

const ProfileItemDropdown = ({
  id,
  role,
  setUpdateList,
}: {
  id: string;
  role: string;
  setUpdateList: React.Dispatch<React.SetStateAction<boolean>>;
}): React.ReactElement => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const editAction = () => {
    onOpen();
  };
  const deleteAction = () => {
    switch (role) {
      case "Волонтер":
        deleteOpportunities(id);
        setUpdateList(true);
        break;
      case "Бенефіціар":
        deleteNeed(id);
        setUpdateList(true);
        break;
      default:
        break;
    }
  };

  const handleAction = (key: string | number) => {
    switch (key) {
      case "edit":
        editAction();
        break;
      case "delete":
        deleteAction();
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Dropdown>
        <DropdownTrigger
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            e.preventDefault()
          }
        >
          <Button variant="light" isIconOnly>
            <BsThreeDotsVertical />
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Actions"
          onAction={(key) => handleAction(key)}
        >
          <DropdownItem key="edit">Редагувати</DropdownItem>
          <DropdownItem key="delete" className="text-danger" color="danger">
            Видалити
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      {role === "Волонтер" && (
        <EditOpportunity
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          setUpdateList={setUpdateList}
          id={id}
        />
      )}
      {role === "Бенефіціар" && (
        <EditNeed
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          setUpdateList={setUpdateList}
          id={id}
        />
      )}
    </>
  );
};

export default ProfileItemDropdown;
