import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { currentUser } from "@clerk/nextjs/server";
import { AppSidebar } from "@/components/Dashboard/sidebar";
import { redirect } from "next/navigation";

  const user = await currentUser();
  if (!user) {
    redirect('/signin')
  }

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
          <AppSidebar username={user?.fullName || 'Undifined'} email={user?.primaryEmailAddress?.emailAddress || 'Undifined'} imageUrl={user?.imageUrl} />
      <main className="w-full">{children}</main>
    </SidebarProvider>
  );
}
