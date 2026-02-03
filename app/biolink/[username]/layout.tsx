export default function BioLinkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      {children}
    </main>
  );
}
