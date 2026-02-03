import { BIOLINKS } from "@/data/biolinks";
import { BioLinkData } from "@/modules/biolink/types/biolink.types";

export async function getBioLink(
  username: string
): Promise<BioLinkData | null> {
  return BIOLINKS[username] ?? null;
}
