import React, { useState } from "react";
import {
  Monitor,
  Flag,
  Heart,
  Folder,
  Settings,
  User,
  FileText,
  Bell,
  Menu,
  X,
  CirclePlus,
} from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Menu Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 bg-white p-2 rounded-md shadow-md md:hidden"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-screen 
          bg-white 
          shadow-lg 
          transition-all 
          duration-300 
          ease-in-out 
          z-40 
          ${isOpen ? "w-64" : "w-0 overflow-hidden"}
          md:relative 
          md:block 
          md:w-64
        `}
      >
        <div className="p-6 flex flex-col gap-8 h-full overflow-y-auto">
          {/* Close button for mobile */}
          <button
            onClick={toggleSidebar}
            className="absolute top-4 right-4 md:hidden"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Home Link */}
          {/* <Link to="/" className="text-2xl font-bold text-emerald-600 hover:text-emerald-700">
            GreenVoyants
          </Link> */}

          <h2 className="text-2xl font-semibold text-gray-700">Overview</h2>

          <div className="space-y-4">
            <a
              href="/monitor"
              className="flex items-center justify-between bg-emerald-200 rounded-full p-4 cursor-pointer hover:bg-emerald-300 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Monitor className="w-5 h-5" />
                <span className="font-medium">Monitor</span>
              </div>
              <span className="bg-emerald-100 px-2 py-1 rounded-full text-sm">
                24
              </span>
            </a>

            <SidebarItem icon={Flag} label="Predictions" href="/predictions"/>
            <SidebarItem icon={Heart} label="Suggestions" />
            <SidebarItem icon={CirclePlus} label="Fields" href="/Fields" />
          </div>
          <hr />
          <SidebarSection title="Weather">
            <SidebarItem icon={Folder} label="Analysis" />
            <SidebarItem icon={Folder} label="Forecasts" />
            <SidebarItem icon={Folder} label="Climate" />
          </SidebarSection>
          <hr />
          <SidebarSection title="Settings">
            <SidebarItem icon={User} label="Profile" />
            <SidebarItem icon={FileText} label="Documentation" />
            <SidebarItem icon={Bell} label="Notifications" />
          </SidebarSection>
        </div>
      </div>
    </>
  );
};

// Helper component for sidebar items to reduce repetition
const SidebarItem = ({ icon: Icon, label, href }) => (
  <a href={href} className="flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-100 rounded-full transition-colors">
    <Icon className="w-5 h-5" />
    <span className="font-medium">{label}</span>
  </a>
);

// Helper component for sidebar sections
const SidebarSection = ({ title, children }) => (
  <div className="space-y-4">
    <h2 className="text-2xl font-semibold text-gray-700">{title}</h2>
    {children}
  </div>
);

export default Sidebar;
