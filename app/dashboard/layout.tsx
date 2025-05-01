import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { currentUser } from "@clerk/nextjs/server";
import { AppSidebar } from "@/components/Dashboard/sidebar";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function Layout({ children }: { children: React.ReactNode }) {
    
  const user = await currentUser();
  if (!user) {
    redirect('/signin')
  }

    
  return (
    <SidebarProvider>
          <AppSidebar username={user?.fullName || 'Undifined'} email={user?.primaryEmailAddress?.emailAddress || 'Undifined'} imageUrl={user?.imageUrl} />
      <main className="w-full">{children}</main>
    </SidebarProvider>
  );
}
