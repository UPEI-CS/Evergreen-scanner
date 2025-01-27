export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (<main>
    <div>
      header
      </div>
      {children}
      <div>footer</div>
    </main>
  );
}
