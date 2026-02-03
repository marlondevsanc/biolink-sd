import { BioLinkData } from "../types/biolink.types";
import MinimalTemplate from "../templates/minimal/MinimalTemplate";

interface Props {
  data: BioLinkData;
}

export function BioTemplateRenderer({ data }: Props) {
  switch (data.template) {
    case "minimal":
    default:
      return <MinimalTemplate data={data} />;
  }
}
