import { BIOLINKS } from "@/data/biolinks";
import { BioLinkData } from "@/modules/biolink/types/biolink.types";

export async function getBioLink(
  username: string
): Promise<BioLinkData | null> {
  console.log("BUSCANDO:", username);
  console.log("DISPONIBLES:", Object.keys(BIOLINKS));
  return BIOLINKS[username] ?? null;
}
