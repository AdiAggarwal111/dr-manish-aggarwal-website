import { memo } from "react";
import { Link } from "@tanstack/react-router";
import type { Procedure } from "@/data/procedures";

interface ProcedureCardProps {
  procedure: Procedure;
  isReveal?: boolean;
}

export const ProcedureCard = memo(function ProcedureCard({
  procedure,
  isReveal = false,
}: ProcedureCardProps) {
  return (
    <Link
      to="/procedures/$slug"
      params={{ slug: procedure.slug }}
      className={`group flex h-full min-h-[240px] flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-card)] ${
        isReveal ? "reveal" : ""
      }`}
      style={{ boxShadow: "var(--shadow-soft)" }}
    >
      <h3 className="font-display text-xl leading-tight text-foreground group-hover:text-primary transition-colors">
        {procedure.title}
      </h3>
      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground text-justify-docs">
        {procedure.desc}
      </p>
      <div className="mt-auto pt-5">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground/80 transition-all group-hover:gap-2.5 group-hover:text-primary">
          Learn more{" "}
          <svg
            className="h-3.5 w-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
});
