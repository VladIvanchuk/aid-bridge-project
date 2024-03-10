"use client";
import { NavContainer } from "@/styles/SidebarStyles";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillHome } from "react-icons/ai";
import { BsFillGearFill, BsStars } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoMdChatbubbles } from "react-icons/io";
import { MdEmergencyShare } from "react-icons/md";

const Navbar = (): React.ReactElement => {
  const menuItems = [
    { name: "Головна", path: "/", icon: <AiFillHome /> },
    { name: "Для вас", path: "/for-you", icon: <BsStars /> },
    { name: "Потреби", path: "/needs", icon: <MdEmergencyShare /> },
    { name: "Волонтери", path: "/volunteers", icon: <FaPeopleGroup /> },
    {
      name: "Новини та події",
      path: "/news",
      icon: <IoMdChatbubbles />,
    },
    {
      name: "Налаштування",
      path: "/settings",
      icon: <BsFillGearFill />,
    },
  ];
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <NavContainer>
      {menuItems.map(({ name, path, icon }) => (
        <Button
          key={path}
          href={path}
          as={Link}
          color="primary"
          variant={isActive(path) ? "solid" : "light"}
          className="justify-start font-bold"
          startContent={icon}
        >
          {name}
        </Button>
      ))}
    </NavContainer>
  );
};

export default Navbar;
