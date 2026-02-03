import "@/styles/globals.css";

export const metadata = {
  title: "BioLinks",
  description: "BioLinks premium",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
