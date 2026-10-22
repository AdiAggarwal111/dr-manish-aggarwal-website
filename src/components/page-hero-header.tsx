import { memo, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";

export interface PageHeroHeaderProps {
  backLink?: {
    to: string;
    label: string;
  };
  title: string;
  subtitle?: string;
  description?: string;
  badges?: ReactNode;
  className?: string;
}

export const PageHeroHeader = memo(function PageHeroHeader({
  backLink,
  title,
  subtitle,
  description,
  badges,
  className = "",
}: PageHeroHeaderProps) {
  return (
    <header className={`mb-10 border-b border-border pb-8 ${className}`}>
      {backLink && (
        <div className="mb-4">
          <Link
            to={backLink.to}
            className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-muted-foreground uppercase transition hover:text-foreground"
          >
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
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            {backLink.label}
          </Link>
        </div>
      )}

      {/* Intro Block with Proper Width & Horizontal Balance */}
      <div className="w-full max-w-4xl">
        {/* Single Heading Element combining Title & Subtitle with Text Balancing */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-display font-medium tracking-tight leading-tight text-foreground [text-wrap:balance]">
          <span className="text-foreground">{title}</span>
          {subtitle && (
            <span className="block mt-2 text-2xl md:text-3xl lg:text-4xl font-normal text-muted-foreground leading-snug [text-wrap:balance]">
              {subtitle}
            </span>
          )}
        </h1>

        {/* Short summary paragraph below it */}
        {description && (
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg text-justify-docs">
            {description}
          </p>
        )}
      </div>

      {/* Badges: Neatly wrapped horizontally beneath the intro block with proper spacing */}
      {badges && <div className="mt-6 flex flex-wrap items-center gap-2.5 pt-1">{badges}</div>}
    </header>
  );
});
