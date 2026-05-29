"use client";

import { useState } from "react";
import { site } from "@/data/site";

const projectTypes = [
  "Novela",
  "Libro de cuentos",
  "Guion",
  "Desarrollo de mundo / biblia",
  "Otro / aún no lo sé",
];

const stages = [
  "Solo una idea",
  "Primer borrador en marcha",
  "Borrador terminado",
  "Casi listo, falta pulir",
];

const inputClass =
  "w-full bg-ink border border-bone/20 px-4 py-3 font-serif text-bone placeholder:text-bone-dim/50 focus:border-gold focus:outline-none transition-colors";
const labelClass =
  "block font-sans text-xs uppercase tracking-widest text-bone-dim mb-2";

export function Contact() {
  const [type, setType] = useState(projectTypes[0]);
  const [stage, setStage] = useState(stages[0]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const length = String(data.get("length") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = `Asesoría literaria — ${type}`;
    const body = [
      `Nombre: ${name}`,
      `Tipo de proyecto: ${type}`,
      `En qué punto está: ${stage}`,
      `Extensión aproximada: ${length}`,
      "",
      "Sobre el proyecto:",
      message,
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section
      id="contacto"
      className="relative py-32 px-6 bg-ink-soft border-t border-bone/10"
    >
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <p className="font-sans text-xs uppercase tracking-[0.4em] text-gold mb-6">
            Contacto
          </p>
          <h2 className="font-display font-bold text-bone text-5xl sm:text-7xl leading-[0.95] text-balance">
            Cuéntame
            <br />
            <span className="text-blood-bright italic font-serif font-normal">
              tu proyecto.
            </span>
          </h2>
          <p className="mt-8 font-serif text-bone-dim text-lg max-w-2xl mx-auto">
            Rellena el formulario con los datos del manuscrito y te respondo con
            una propuesta de trabajo y tarifa. Sin compromiso.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid sm:grid-cols-2 gap-6 text-left"
        >
          <div className="sm:col-span-2">
            <label htmlFor="name" className={labelClass}>
              Tu nombre
            </label>
            <input id="name" name="name" required className={inputClass} />
          </div>

          <div>
            <label htmlFor="type" className={labelClass}>
              Tipo de proyecto
            </label>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className={inputClass}
            >
              {projectTypes.map((t) => (
                <option key={t} value={t} className="bg-ink">
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="stage" className={labelClass}>
              ¿En qué punto está?
            </label>
            <select
              id="stage"
              value={stage}
              onChange={(e) => setStage(e.target.value)}
              className={inputClass}
            >
              {stages.map((s) => (
                <option key={s} value={s} className="bg-ink">
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="length" className={labelClass}>
              Extensión aproximada (páginas o palabras)
            </label>
            <input
              id="length"
              name="length"
              placeholder="p. ej. 80.000 palabras / 300 páginas"
              className={inputClass}
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className={labelClass}>
              Cuéntame de qué va
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Un resumen breve del proyecto y en qué crees que necesitas ayuda."
              className={`${inputClass} resize-y`}
            />
          </div>

          <div className="sm:col-span-2 flex flex-wrap items-center gap-4 pt-2">
            <button
              type="submit"
              className="inline-flex items-center gap-3 bg-blood text-bone px-8 py-4 uppercase tracking-widest text-xs font-semibold hover:bg-blood-bright transition-colors font-sans"
            >
              Enviar proyecto →
            </button>
            <p className="font-sans text-xs text-bone-dim">
              Se abrirá tu correo con todo prellenado. ¿Prefieres Instagram?{" "}
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-bone transition-colors"
              >
                {site.instagramHandle}
              </a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
