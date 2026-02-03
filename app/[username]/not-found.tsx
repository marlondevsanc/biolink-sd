export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center text-center">
      <div>
        <h2 className="text-2xl font-semibold">BioLink no encontrado</h2>
        <p className="mt-2 text-neutral-500">
          Este enlace no existe o fue eliminado.
        </p>
      </div>
    </div>
  );
}
