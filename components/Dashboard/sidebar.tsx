"use client"

import {
  ArrowBigLeft,
  Calendar,
  Home,
  Inbox,
  Plus,
  Search,
  Settings,
  FileJson2,
  MessagesSquare,
  NotepadText,
  Video,
  Lightbulb,
  User,
} from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "../ui/separator";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Tutes",
    url: "/dashboard/tutes",
    icon: Inbox,
  },
  {
    title: "Recordings",
    url: "/dashboard/recordings",
    icon: Video,
  },
  {
    title: "MCQ Tests",
    url: "/dashboard/mcq",
    icon: NotepadText,
  },
  {
    title: "Student Forms",
    url: "/dashboard/forms",
    icon: MessagesSquare,
  },
  {
    title: "Code Editor",
    url: "/dashboard/ide",
    icon: FileJson2,
  },
];

interface AppSidebarProps {
  username: string;
  email: string;
  imageUrl?: string;
}

export function AppSidebar({ username, email, imageUrl }: AppSidebarProps) {
  const pathname = usePathname();
  return (
    <Sidebar collapsible="icon" className="border-r ">
      <SidebarHeader className="flex w-full justify-end bg-white">
        <div className="px-4 py-2 flex justify-center items-center">
          <Lightbulb className="h-auto w-8 text-orange-500 drop-shadow-lg" />
          <span className="font-jua text-2xl ml-2 text-orange-500 drop-shadow-xl">
            Lumina
          </span>
        </div>
      </SidebarHeader>
      <Separator />
      <SidebarContent className=" bg-white">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={`hover:bg-orange-200 text-zinc-700 hover:text-orange-600 active:text-orange-600 active:scale-95 transition-all duration-150 ease-in-out active:bg-orange-300 ${
                      pathname === item.url
                        ? "bg-orange-200 text-orange-600"
                        : ""
                    }`}
                  >
                    <a href={item.url}>
                      <item.icon className="" />
                      <span className="text-[1.025rem]">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-white">
        <SidebarMenuButton className="mb-1 bg-orange-200 active:bg-orange-400 rounded-full h-10 p-1 hover:bg-orange-300 hover:cursor-pointer">
          <Avatar className="border border-orange-600 flex justify-center items-center">
            {imageUrl ? (
              <AvatarImage src={imageUrl} />
            ) : (
              <User className="h-5 w-5 text-orange-600" />
            )}
            <AvatarFallback>
              {username?.split(" ").length > 1
                ? username?.split(" ")[0]?.charAt(0)?.toUpperCase() +
                  username?.split(" ")[1]?.charAt(0)?.toUpperCase()
                : username?.slice(0, 2)?.toUpperCase() || "U"}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-orange-700 font-semibold tracking-tighter w-[20ch] truncate">
              {username}
            </span>
            <span className="text-orange-700 tracking-tighter text-xs -mt-1.5 w-[20ch] truncate">
              {email}
            </span>
          </div>
        </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  );
}
