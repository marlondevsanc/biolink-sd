import Avatar from "./Avatar";

interface Props {
  name: string;
  bio: string;
  avatar?: string;
}

export default function BioHeader({ name, bio, avatar }: Props) {
  return (
    <header className="text-center">
      <Avatar src={avatar} alt={name} />

      <h1
        className="text-2xl tracking-tight"
        style={{ fontWeight: "var(--name-weight, 600)" }}
      >
        {name}
      </h1>

      <p className="mt-2 text-sm text-[var(--muted)]">
        {bio}
      </p>
    </header>
  );
}
