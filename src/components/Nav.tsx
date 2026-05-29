const links = [
  { href: "#asesoria", label: "Asesoría" },
  { href: "#sobre", label: "Sobre" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#obra", label: "Obra" },
  { href: "#prensa", label: "Prensa" },
];

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-ink/70 border-b border-bone/10">
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4 font-sans text-sm">
        <a
          href="#top"
          className="font-display text-bone tracking-[0.3em] text-base font-bold"
        >
          YOSS
        </a>
        <ul className="hidden md:flex items-center gap-8 text-bone-dim">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-bone transition-colors uppercase tracking-widest text-xs"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contacto"
          className="hidden md:inline-flex items-center gap-2 border border-blood text-bone bg-blood/20 hover:bg-blood/40 px-4 py-2 text-xs uppercase tracking-widest transition-colors"
        >
          Contratar
        </a>
      </nav>
    </header>
  );
}
