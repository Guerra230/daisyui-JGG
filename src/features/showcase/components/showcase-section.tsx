import type { ReactNode } from "react";

export interface ShowcaseSectionProps {
  number: string;
  title: string;
  children: ReactNode;
}

export default function ShowcaseSection({ number, title, children }: ShowcaseSectionProps) {
  return (
    <section className="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm sm:p-6">
      <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-base-content/60">
        <span className="badge badge-primary badge-sm font-mono">{number}</span>
        {title}
      </h2>
      {children}
    </section>
  );
}
