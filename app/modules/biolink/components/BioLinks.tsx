import { BioLinkItem } from "../types/biolink.types";
import LinkButton from "./LinkButton";

interface Props {
  links: BioLinkItem[];
}

export default function BioLinks({ links }: Props) {
  return (
    <div className="mt-6 flex flex-col gap-3">
      {links.map((link, index) => (
        <LinkButton key={index} {...link} />
      ))}
    </div>
  );
}
