import Link from "next/link";

interface Props {
  label: string;
  url: string;
}

export default function LinkButton({ label, url }: Props) {
  return (
    <Link
      href={url}
      target="_blank"
      className="block w-full rounded-xl border border-neutral-300 px-4 py-3 text-center font-medium transition hover:bg-neutral-900 hover:text-white"
    >
      {label}
    </Link>
  );
}
