interface Props {
  name: string;
  bio: string;
}

export default function BioHeader({ name, bio }: Props) {
  return (
    <header className="text-center">
      <h1 className="text-2xl font-semibold">{name}</h1>
      <p className="mt-2 text-sm text-neutral-600">{bio}</p>
    </header>
  );
}
