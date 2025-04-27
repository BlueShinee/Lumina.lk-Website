"use client"

import React from "react";

import {
  BookOpen,
  CheckCircle,
  LayoutDashboard,
  Users,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface SidebarItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const sidebarItems: SidebarItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboard className="w-4 h-4" />,
  },
  {
    label: "Courses",
    href: "/courses",
    icon: <BookOpen className="w-4 h-4" />,
  },
  {
    label: "Assignments",
    href: "/assignments",
    icon: <CheckCircle className="w-4 h-4" />,
  },
  { label: "Users", href: "/users", icon: <Users className="w-4 h-4" /> },
  {
    label: "Settings",
    href: "/settings",
    icon: <Settings className="w-4 h-4" />,
  },
];

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`
        bg-gray-900 text-white h-screen flex flex-col
        transition-width duration-300 ease-in-out
        ${isCollapsed ? "w-15" : "w-60"}
      `}
    >
      {/* Top Section: Logo and Collapse Button */}
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <div
          className={`flex items-center ${
            isCollapsed ? "justify-center" : "gap-2"
          }`}
        >
          {!isCollapsed && <span className="text-xl font-semibold">LMS</span>}
        </div>
        <button
          onClick={toggleSidebar}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          {isCollapsed ? (
            <ChevronRight className="w-6 h-6" />
          ) : (
            <ChevronLeft className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1">
        <ul className="p-2">
          {sidebarItems.map((item) => (
            <li key={item.label} className="mb-2">
              <a
                href={item.href}
                className={`
                  flex items-center gap-2 p-2 rounded
                  hover:bg-gray-800 transition-colors
                  ${isCollapsed ? "justify-center" : ""}
                `}
              >
                {item.icon}
                {!isCollapsed && <span className="text-sm">{item.label}</span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom Section: Logout */}
      <div className="p-4 border-t border-gray-800">
        <a
          href="/logout"
          className={`flex items-center gap-2 p-2 rounded hover:bg-gray-800 transition-colors ${
            isCollapsed ? "justify-center" : ""
          }`}
        >
          <LogOut className="w-4 h-4" />
          {!isCollapsed && <span className="text-sm">Logout</span>}
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
