import Sidebar from "@/components/Dashboard/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full">
      <Sidebar />
      {children}
    </div>
  );
}
