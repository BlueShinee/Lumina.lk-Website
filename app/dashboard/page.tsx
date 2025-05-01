"use client";

/* import { currentUser } from "@clerk/nextjs/server"; */
import { useUser } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";

import { getAnnouncements } from "@/database/index";

import { redirect } from "next/navigation";
import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  CalendarDays,
  GraduationCap,
  BookOpen,
  Clock,
  Sunrise,
  Sun,
  Sunset,
  Moon,
  Bell,
} from "lucide-react";

export const dynamic = "force-dynamic";

type announcementType = Awaited<ReturnType<typeof getAnnouncements>>;

const formatDate = (dateNumber: number) => {
  const dateStr = dateNumber.toString();
  const year = dateStr.slice(0, 4);
  const month = parseInt(dateStr.slice(4, 6)) - 1;
  const day = parseInt(dateStr.slice(6, 8));

  const date = new Date(parseInt(year), month, day);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const HomePage = () => {
  const { data: announcements, isLoading } = useQuery<announcementType>({
    queryKey: ["announcements"],
    queryFn: getAnnouncements,
  });

  const formattedDates = React.useMemo(() => {
    if (!announcements) return {};
    return announcements.reduce((acc, ann) => {
      acc[ann.date] = formatDate(ann.date);
      return acc;
    }, {} as { [key: number]: string });
  }, [announcements]);

  const [selectedAnnouncement, setSelectedAnnouncement] = React.useState<
    announcementType[number] | null
  >(null);

  const { isSignedIn, user, isLoaded } = useUser();
  if (!isLoaded) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-zinc-50">
        <span className="loading loading-spinner loading-xl text-orange-600"></span>
      </div>
    );
  }

  if (!isSignedIn) {
    redirect("/signin");
  }

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 2 && hour < 12) return { text: "Good morning", icon: Sunrise };
    if (hour >= 12 && hour < 17) return { text: "Good afternoon", icon: Sun };
    if (hour >= 17 && hour < 19) return { text: "Good evening", icon: Sunset };
    return { text: "Good night", icon: Moon };
  };

  const { text: greeting, icon: GreetingIcon } = getGreeting();

  const notifications: any[] = [
    /*     {
      title: "New Course Available",
      description: "Advanced React Development is now available",
      timestamp: "1 hour ago",
    }, */
  ];

  return (
    <div className="w-full min-h-screen p-6 space-y-8 bg-zinc-50">
      <div className="flex items-center space-x-4 p-4 rounded-xl bg-orange-500 bg-[url('/orange_gradient.png')] bg-cover bg-center ">
        <div className="h-16 w-16 rounded-full border-2 border-orange-600 overflow-hidden flex-shrink-0">
          <img
            src={user.imageUrl}
            alt="Profile"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white drop-shadow-lg">
            Welcome back, {user.fullName}!
          </h1>
          <div className="flex items-center gap-2 text-zinc-100 drop-shadow-md">
            <GreetingIcon className="h-4 w-4" />
            <p>{greeting}, here's an overview of your learning progress</p>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex-grow ">
          <Card className="h-[500px] overflow-hidden border-orange-400">
            {isLoading ? (
              <div className="w-full h-full flex justify-center items-center">
                <span className="loading loading-spinner loading-xl text-orange-600"></span>
              </div>
            ) : (
              <>
                <CardHeader>
                  <CardTitle className="text-orange-600 text-2xl -mb-3 flex items-center gap-2">
                    Announcements
                  </CardTitle>
                  <CardDescription>
                    Latest announcements and updates
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-[calc(500px-5rem)] overflow-y-auto">
                  <div className="grid grid-cols-2 gap-4">
                    {announcements?.map((announcement, index) => (
                      <div
                        key={index}
                        className="space-y-2 hover:cursor-pointer rounded-lg hover:bg-orange-200 p-2 group"
                        onClick={() => setSelectedAnnouncement(announcement)}
                      >
                        <p className="text-sm font-medium leading-none group-hover:text-orange-500 transition-colors">
                          {announcement.title}
                        </p>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {announcement.content}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {formattedDates[announcement.date]}
                        </p>
                      </div>
                    ))}

                    <Dialog
                      open={selectedAnnouncement !== null}
                      onOpenChange={() => setSelectedAnnouncement(null)}
                    >
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle className="text-xl font-bold text-orange-600">
                            {selectedAnnouncement?.title}
                          </DialogTitle>
                          <DialogDescription className="text-sm text-muted-foreground">
                            Posted{" "}
                            {selectedAnnouncement
                              ? formattedDates[selectedAnnouncement.date]
                              : ""}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="mt-4 text-sm">
                          {selectedAnnouncement?.content}
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>{" "}
              </>
            )}
          </Card>
        </div>
        <div className="w-[30%] min-w-[300px] ">
          <Card className="h-[500px] overflow-hidden border-orange-400">
            <CardHeader>
              <CardTitle className="text-orange-600 text-2xl -mb-3 flex items-center gap-2">
                Notifications
              </CardTitle>
              <CardDescription>
                Your latest updates and announcements
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[calc(500px-5rem)] overflow-y-auto">
              <div className="space-y-4">
                {notifications?.map((notification, index) => (
                  <div key={index} className="flex items-center">
                    <div className="space-y-1 w-full">
                      <p className="text-sm font-medium leading-none">
                        {notification.title}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {notification.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <p className="text-xs text-muted-foreground">
                          {notification.timestamp}
                        </p>
                        <button className="text-xs  rounded-full px-2 hover:text-white text-orange-500 hover:bg-orange-500 font-medium hover:cursor-pointer">
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/*       <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Study Hours
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24.5</div>
            <p className="text-xs text-muted-foreground">+2.5 from last week</p>
          </CardContent>
        </Card>
      </div> */}

      {/*       <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>
            Your learning activities from the past week
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">
                  Completed Python Basics
                </p>
                <p className="text-sm text-muted-foreground">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">
                  Started JavaScript Advanced
                </p>
                <p className="text-sm text-muted-foreground">Yesterday</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card> */}
    </div>
  );
};

export default HomePage;
