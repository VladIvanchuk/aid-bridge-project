"use client";
import { usePathname } from "next/navigation";
import { NavContainer } from "@/styles/SidebarStyles";
import { AiFillHome } from "react-icons/ai";
import { MdEmergencyShare } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoMdChatbubbles } from "react-icons/io";
import { FaAddressBook } from "react-icons/fa";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const Navbar = (): React.ReactElement => {
  const menuItems = [
    { name: "Головна", path: "/", icon: <AiFillHome /> },
    { name: "Потреби", path: "/needs", icon: <MdEmergencyShare /> },
    { name: "Можливості", path: "/opportunities", icon: <FaAddressBook /> },
    {
      name: "Обговорення",
      path: "/discussions",
      icon: <IoMdChatbubbles />,
    },
    { name: "Волонтери", path: "/volunteers", icon: <FaPeopleGroup /> },
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
          className="justify-start"
          startContent={icon}
        >
          {name}
        </Button>
      ))}
    </NavContainer>
  );
};

export default Navbar;
