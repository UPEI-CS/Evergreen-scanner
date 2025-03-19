import Navbar from "@/components/Navbar";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col min-h-screen ">
      <Navbar />
      <div className="flex-1 ">
        {children}
      </div>
    </main>
  );
}
