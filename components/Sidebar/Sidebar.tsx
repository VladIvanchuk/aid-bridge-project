import { User } from "@nextui-org/react";
import { Navbar } from "..";

const Sidebar = (): React.ReactElement => {
  return (
    <div className="w-64 shrink-0">
      <div className="p-4 fixed h-full w-64 overflow-y-auto z-100 border-r-1 border-stone-300 bg-stone-100">
        <div className="py-4 h-20 flex">Logo</div>
        <Navbar />
        <div className="py-4 absolute bottom-0">
          <User
            name="Jane Doe"
            description="Volunteer"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
