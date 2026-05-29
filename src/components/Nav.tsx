"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/#asesoria", label: "Asesoría" },
  { href: "/sobre", label: "Sobre" },
  { href: "/obra", label: "Obra" },
  { href: "/otra-vida", label: "Otra vida" },
  { href: "/prensa", label: "Prensa" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-ink/80 border-b border-bone/10">
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4 font-sans text-sm">
        <Link
          href="/"
          onClick={close}
          className="font-display text-bone tracking-[0.3em] text-base font-bold"
        >
          YOSS
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 text-bone-dim">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="hover:text-bone transition-colors uppercase tracking-widest text-xs"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/contacto"
          className="hidden md:inline-flex items-center gap-2 border border-blood text-bone bg-blood/20 hover:bg-blood/40 px-4 py-2 text-xs uppercase tracking-widest transition-colors"
        >
          Contratar
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="md:hidden font-sans text-xs uppercase tracking-[0.3em] text-bone hover:text-gold transition-colors"
        >
          {open ? "Cerrar" : "Menú"}
        </button>
      </nav>

      {/* Mobile panel */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-6 pb-6 pt-2 border-t border-bone/10">
          {links.map((l) => (
            <li key={l.href} className="border-b border-bone/10">
              <Link
                href={l.href}
                onClick={close}
                className="block py-4 font-sans uppercase tracking-widest text-sm text-bone-dim hover:text-bone transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="pt-5">
            <Link
              href="/contacto"
              onClick={close}
              className="flex items-center justify-center gap-2 border border-blood bg-blood/20 text-bone px-4 py-3 text-xs uppercase tracking-widest hover:bg-blood/40 transition-colors"
            >
              Contratar →
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
