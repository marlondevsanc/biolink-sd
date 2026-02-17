import { getBioLink } from "@/lib/getBioLink";

interface Props {
  children: React.ReactNode;
  params: Promise<{
    username: string;
  }>;
}
export default async function BioLinkLayout({
  children,
  params,
}: Props) {

  const { username } = await params;
  console.log("USERNAME:", username);

  const data = await getBioLink(username);

  console.log("Layout data:", data);

  return (
    <main
      className="min-h-screen flex items-center justify-center"
      style={{
        background: data?.theme.colors.background,
        fontFamily: data?.theme.typography.fontFamily,
        color: data?.theme.colors.foreground,
      }}
    >
      {children}
    </main>
  );
}
