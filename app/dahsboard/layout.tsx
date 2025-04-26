
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <aside className="w-1/5 bg-gray-100 p-4">
        {/* Sidebar content here */}
        Sidebar
      </aside>
      <main className="w-4/5 mt-10 p-4">
        {children}
      </main>
    </div>
  );
}