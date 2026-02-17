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
      className="
        block w-full text-center font-medium
        transition-all duration-200
        rounded-[var(--btn-radius)]
        border border-[var(--border)]
        bg-transparent text-[var(--fg)]
        px-4 py-3
        hover:bg-[var(--btn-hover-bg)]
        hover:text-[var(--btn-hover-fg)]
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-[var(--accent)]
      "
    >
      {label}
    </Link>
  );
}
