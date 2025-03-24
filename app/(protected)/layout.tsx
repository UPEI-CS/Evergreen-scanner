import Navbar from "@/components/custom/navbar";
import { SettingsProvider } from "@/hooks/use-settings";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SettingsProvider>
      <div className="flex flex-col h-screen overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-hidden">
          {children}
        </main>
      </div>
    </SettingsProvider>
  );
}
