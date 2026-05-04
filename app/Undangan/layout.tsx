export default function UndanganLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 pb-24">
        {children}
      </main>
    </div>
  );
}