"use client";

import { useEffect, useState } from "react";
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

  // Lock body scroll + close on Escape while the overlay is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-ink/80 border-b border-bone/10">
        <nav className="relative z-50 mx-auto max-w-7xl flex items-center justify-between px-6 py-4 font-sans text-sm">
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

        {/* Mobile hamburger — three bars that fold into an X */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="md:hidden relative -mr-1.5 flex h-10 w-10 flex-col items-center justify-center gap-[5px]"
        >
          <span
            className={`block h-[2px] w-7 origin-center bg-bone transition-all duration-300 ease-out ${
              open ? "translate-y-[7px] rotate-45 bg-flare" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-7 bg-bone transition-all duration-200 ease-out ${
              open ? "scale-x-0 opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-7 origin-center bg-bone transition-all duration-300 ease-out ${
              open ? "-translate-y-[7px] -rotate-45 bg-flare" : ""
            }`}
          />
        </button>
        </nav>
      </header>

      {/* Mobile full-screen overlay — kept OUTSIDE <header>: a position:fixed
          child of a backdrop-filter ancestor gets re-parented to that ancestor's
          box, which would smear the header blur across the whole viewport. */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        className={`md:hidden fixed inset-0 z-30 transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Tenebroso base + halftone screenprint corner + vignette */}
        <div aria-hidden className="absolute inset-0 bg-ink" />
        <div
          aria-hidden
          className="halftone-lg text-flare/20 absolute -top-10 right-0 h-64 w-2/3 halftone-fade-b pointer-events-none"
        />
        <div aria-hidden className="vignette absolute inset-0 pointer-events-none" />

        <div className="grain relative flex h-full flex-col px-8 pt-28 pb-10">
          <span
            className="font-sans text-[10px] uppercase tracking-[0.4em] text-bone-dim"
            style={{
              transitionDelay: open ? "120ms" : "0ms",
            }}
          >
            Menú
          </span>
          <div aria-hidden className="rule-blood mt-4 mb-8 h-px w-full" />

          <ul className="flex flex-col">
            {links.map((l, i) => (
              <li
                key={l.href}
                className={`border-b border-bone/10 transition-all duration-500 ease-out ${
                  open
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                }`}
                style={{ transitionDelay: open ? `${i * 55 + 160}ms` : "0ms" }}
              >
                <Link
                  href={l.href}
                  onClick={close}
                  className="group flex items-baseline gap-4 py-5"
                >
                  <span className="font-sans text-xs tabular-nums text-teal/70 tracking-widest">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="riso font-display font-bold uppercase text-bone text-3xl leading-none tracking-wide transition-colors group-hover:text-flare">
                    {l.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div
            className={`mt-auto transition-all duration-500 ease-out ${
              open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
            style={{
              transitionDelay: open ? `${links.length * 55 + 200}ms` : "0ms",
            }}
          >
            <Link
              href="/contacto"
              onClick={close}
              className="sheen flex items-center justify-center gap-2 border border-blood bg-blood text-bone px-4 py-4 text-sm uppercase tracking-[0.2em] transition-colors hover:bg-blood-bright"
            >
              Contratar →
            </Link>
            <p className="mt-6 text-center font-serif italic text-sm text-bone-dim">
              José Miguel Sánchez · La Habana
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
