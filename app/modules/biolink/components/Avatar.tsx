import Image from "next/image";

interface Props {
  src?: string;
  alt: string;
}

export default function Avatar({ src, alt }: Props) {
  if (!src) return null;

  return (
    <div
      className="mx-auto mb-4 flex items-center justify-center rounded-full bg-white"
      style={{
        width: "var(--avatar-size)",
        height: "var(--avatar-size)",
        boxShadow: "var(--avatar-shadow)",
      }}
    >
      <div
        className="overflow-hidden rounded-full"
        style={{
          width: "calc(var(--avatar-size) - 8px)",
          height: "calc(var(--avatar-size) - 8px)",
          border: "2px solid var(--avatar-border)",
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={200}
          height={200}
          className="h-full w-full object-cover"
          priority
        />
      </div>
    </div>
  );
}
