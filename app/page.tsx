export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-zinc-900 overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-white">

        {/* Glow decorativo */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#bc0202]/10 blur-[120px] rounded-full" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-48 text-center fade-up">

          <p className="section-subtitle">
            Producto digital • Branding • Estrategia
          </p>

          {/* ÚNICO H1 */}
          <h1 className="hero-title">
            Tu marca en un solo enlace
          </h1>

          <p className="hero-description">
            Biolinks SD no es una página de enlaces.
            Es una experiencia digital diseñada estratégicamente
            para marcas que quieren verse profesionales, coherentes y memorables.
          </p>

          <div className="mt-16 flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="#templates"
              className="px-12 py-4 rounded-full bg-[#bc0202] text-white text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Ver templates
            </a>

            <a
              href="#contacto"
              className="px-12 py-4 rounded-full border border-zinc-300 text-zinc-800 text-sm tracking-wide transition-all duration-300 hover:bg-zinc-100"
            >
              Solicitar versión personalizada
            </a>
          </div>

        </div>
      </section>


      {/* ================= PROBLEMA ================= */}
      <section className="bg-zinc-50 py-36 px-6">
        <div className="max-w-6xl mx-auto text-center">

          {/* H2 */}
          <h2 className="subtitle text-zinc-900 fade-in">
            El problema no son los enlaces.
          </h2>

          <p className="description mt-8 text-zinc-600 max-w-2xl mx-auto">
            Es la falta de identidad y estrategia detrás de ellos.
          </p>

          <div className="grid md:grid-cols-3 gap-16 mt-20">

            <div className="scale-in">
              <h3 className="font-juana text-2xl italic text-zinc-800">
                Demasiados enlaces
              </h3>
              <p className="mt-6 text-sm text-zinc-600">
                Redes, WhatsApp, tiendas, portafolios.
                Tu marca termina fragmentada en múltiples lugares.
              </p>
            </div>

            <div className="scale-in">
              <h3 className="font-juana text-2xl italic text-zinc-800">
                Poca identidad
              </h3>
              <p className="mt-6 text-sm text-zinc-600">
                Plataformas genéricas que no representan
                tu branding ni tu personalidad.
              </p>
            </div>

            <div className="scale-in">
              <h3 className="font-juana text-2xl italic text-zinc-800">
                Cero estrategia
              </h3>
              <p className="mt-6 text-sm text-zinc-600">
                Enlaces sin jerarquía, sin intención
                y sin experiencia visual.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* ================= TEMPLATES ================= */}
      <section id="templates" className="py-40 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">

          {/* H2 */}
          <h2 className="subtitle text-zinc-900 fade-in">
            Diseños con intención estratégica
          </h2>

          <p className="description mt-8 text-zinc-600 max-w-2xl mx-auto">
            Cada template responde a una identidad distinta,
            con coherencia visual y experiencia de marca.
          </p>

          <div className="grid md:grid-cols-3 gap-14 mt-24 text-left">

            {/* BRAND */}
            <div className="group rounded-[32px] p-12 border border-zinc-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 scale-in">
              <h3 className="font-juana text-3xl italic">
                Brand
              </h3>
              <p className="mt-6 text-sm text-zinc-600 leading-relaxed">
                Diseñado para empresas que necesitan coherencia visual
                y presencia sólida alineada a su branding.
              </p>
            </div>

            {/* DARK */}
            <div className="group rounded-[32px] p-12 bg-zinc-900 text-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 scale-in">
              <h3 className="font-juana text-3xl italic">
                Dark
              </h3>
              <p className="mt-6 text-sm text-zinc-300 leading-relaxed">
                Elegancia minimalista con estética oscura
                para estudios y marcas contemporáneas.
              </p>
            </div>

            {/* MINIMAL */}
            <div className="group rounded-[32px] p-12 border border-zinc-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 scale-in">
              <h3 className="font-juana text-3xl italic">
                Minimal
              </h3>
              <p className="mt-6 text-sm text-zinc-600 leading-relaxed">
                Diseño ligero y enfocado en experiencia.
                Ideal para profesionales y marcas personales.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* ================= PERSONALIZACIÓN ================= */}
      <section className="bg-zinc-950 text-white py-40 px-6 text-center">
        <div className="max-w-4xl mx-auto fade-up">

          {/* H2 */}
          <h2 className="subtitle text-white">
            Creamos identidad digital,
            no páginas genéricas.
          </h2>

          <p className="description mt-10 text-zinc-400">
            Adaptamos cada Biolink SD a la identidad visual de tu marca,
            integrando estrategia, diseño y experiencia.
          </p>

          <div className="mt-20 grid md:grid-cols-3 gap-10 text-sm text-zinc-400">
            <div>Branding estratégico</div>
            <div>Tipografía personalizada</div>
            <div>Dominio propio</div>
            <div>Optimización móvil</div>
            <div>Jerarquía de enlaces</div>
            <div>Experiencia premium</div>
          </div>

          <div className="mt-16">
            <a
              href="#contacto"
              className="px-12 py-4 rounded-full bg-white text-black text-sm tracking-wide transition-all duration-300 hover:scale-105"
            >
              Crear mi biolink
            </a>
          </div>

        </div>
      </section>


      {/* ================= FOOTER ================= */}
      <footer className="mt-auto bg-black py-20 text-center">
        <p className="text-xs tracking-widest uppercase text-zinc-500">
          Producto desarrollado por
        </p>

        <p className="mt-4 font-juana italic text-2xl text-white">
          Sinfonía Digital
        </p>

        <p className="mt-6 text-zinc-600 text-sm">
          Diseño • Branding • Desarrollo Web
        </p>
      </footer>

    </main>
  );
}
