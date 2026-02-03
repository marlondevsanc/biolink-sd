import { BioLinkData } from "../../types/biolink.types";
import BioHeader from "../../components/BioHeader";
import BioLinks from "../../components/BioLinks";

interface Props {
  data: BioLinkData;
}

export default function MinimalTemplate({ data }: Props) {
  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6">
      <BioHeader name={data.name} bio={data.bio} />
      <BioLinks links={data.links} />

      <footer className="mt-10 text-center text-xs text-neutral-400">
        © {new Date().getFullYear()} {data.name}
      </footer>
    </main>
  );
}
