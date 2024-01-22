"use client";
import { usePathname } from "next/navigation";

const Navbar = (): React.ReactElement => {
  const menuItems = [
    { name: "Головна", path: "/", icon: "" },
    { name: "Потреби", path: "/needs", icon: "" },
    { name: "Можливості", path: "/opportunities", icon: "" },
    {
      name: "Обговорення",
      path: "/discussions",
      icon: "",
    },
    { name: "Волонтери", path: "/volunteers", icon: "" },
  ];
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <div className="flex flex-col gap-8">
      {menuItems.map(({ name, path, icon }) => (
        <button key={path}>{name}</button>
      ))}
    </div>
  );
};

export default Navbar;
