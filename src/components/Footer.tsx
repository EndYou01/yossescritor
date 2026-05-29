import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-bone/10 bg-ink py-12 px-6">
      <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-6 font-sans text-xs text-bone-dim uppercase tracking-widest">
        <span className="font-display tracking-[0.3em] text-bone text-sm font-bold">
          YOSS
        </span>
        <span>
          {site.fullName} · {site.city}
        </span>
        <span>© {site.birthYear}–{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
