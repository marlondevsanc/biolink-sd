import { getBioLink } from "@/lib/getBioLink";
import { BioTemplateRenderer } from "@/modules/biolink/components/BioTemplateRenderer";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    username: string;
  }>;
}

export default async function BioLinkPage({ params }: Props) {
  const { username } = await params;

  console.log("Fetching biolink for username:", username);
  const data = await getBioLink(username);

  if (!data) notFound();

  return <BioTemplateRenderer data={data} />;
}
