import { memo, useState } from "react";
import viditAvif from "@/assets/reviews/review-vidit-aren.avif";
import vidit600Avif from "@/assets/reviews/review-vidit-aren-600.avif";
import viditWebp from "@/assets/reviews/review-vidit-aren.webp";
import vidit600Webp from "@/assets/reviews/review-vidit-aren-600.webp";
import viditJpg from "@/assets/reviews/review-vidit-aren.jpg";

import muzaffarAvif from "@/assets/reviews/review-muzaffarnagar-emergency.avif";
import muzaffar600Avif from "@/assets/reviews/review-muzaffarnagar-emergency-600.avif";
import muzaffarWebp from "@/assets/reviews/review-muzaffarnagar-emergency.webp";
import muzaffar600Webp from "@/assets/reviews/review-muzaffarnagar-emergency-600.webp";
import muzaffarJpg from "@/assets/reviews/review-muzaffarnagar-emergency.jpg";

import fortisAvif from "@/assets/reviews/review-fortis-recovery.avif";
import fortis600Avif from "@/assets/reviews/review-fortis-recovery-600.avif";
import fortisWebp from "@/assets/reviews/review-fortis-recovery.webp";
import fortis600Webp from "@/assets/reviews/review-fortis-recovery-600.webp";
import fortisJpg from "@/assets/reviews/review-fortis-recovery.jpg";

import { featuredReviews, reviewAggregate, type PatientReviewItem } from "@/data/reviews";
import { siteConfig } from "@/data/site-config";

const REVIEW_IMAGES: Record<
  string,
  {
    avif: string;
    avif600: string;
    webp: string;
    webp600: string;
    fallback: string;
  }
> = {
  "vidit-aren": {
    avif: viditAvif,
    avif600: vidit600Avif,
    webp: viditWebp,
    webp600: vidit600Webp,
    fallback: viditJpg,
  },
  "muzaffarnagar-emergency": {
    avif: muzaffarAvif,
    avif600: muzaffar600Avif,
    webp: muzaffarWebp,
    webp600: muzaffar600Webp,
    fallback: muzaffarJpg,
  },
  "fortis-recovery": {
    avif: fortisAvif,
    avif600: fortis600Avif,
    webp: fortisWebp,
    webp600: fortis600Webp,
    fallback: fortisJpg,
  },
};

function GoogleIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-0.5" role="img" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="h-4 w-4 fill-amber-400 text-amber-400"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

export const ReviewsSection = memo(function ReviewsSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activeModalReview, setActiveModalReview] = useState<PatientReviewItem | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="relative bg-cream/70 px-6 py-20 md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Section Header */}
        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.35em] text-primary uppercase">
            Clinical Outcomes &amp; Patient Trust
          </p>
          <h2
            id="reviews-heading"
            className="mt-4 font-display text-3xl text-foreground sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.15]"
          >
            Stories of Restored Vitality
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg leading-relaxed">
            Unfiltered accounts from patients and families whose lives were transformed by Dr.
            Manish Aggarwal's minimally invasive precision and 24/7 cardiac commitment.
          </p>
        </div>

        {/* Aggregate Google Review Banner */}
        <div className="mx-auto mt-10 max-w-2xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-3xl border border-border/80 bg-card p-5 sm:px-7 sm:py-4.5 shadow-[var(--shadow-soft)]">
            <div className="flex items-center gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm border border-border/60">
                <GoogleIcon className="h-6 w-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-sans text-xl font-bold tracking-tight text-foreground">
                    {reviewAggregate.score}
                  </span>
                  <StarRating count={5} />
                </div>
                <p className="text-xs font-medium text-muted-foreground">
                  Based on{" "}
                  <strong className="font-semibold text-foreground">
                    {reviewAggregate.reviewCount}
                  </strong>{" "}
                  {reviewAggregate.source}
                </p>
              </div>
            </div>

            <a
              href={reviewAggregate.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-xs font-semibold text-navy-foreground transition hover:opacity-90 shadow-sm"
              title="Read all 370+ patient reviews directly on Google Maps"
            >
              <span>Read all 370+ on Google Maps</span>
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        </div>

        {/* 3 Featured Review Cards Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-start">
          {featuredReviews.map((review) => {
            const img = REVIEW_IMAGES[review.id];
            const isExpanded = expandedId === review.id;

            return (
              <article
                key={review.id}
                className="group flex flex-col rounded-3xl border border-border/80 bg-card overflow-hidden shadow-[var(--shadow-card)] transition-all duration-300 hover:border-primary/40 hover:shadow-xl"
              >
                {/* Photo Header */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-muted/40">
                  {img && (
                    <picture>
                      <source
                        type="image/avif"
                        srcSet={`${img.avif600} 600w, ${img.avif} 1024w`}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <source
                        type="image/webp"
                        srcSet={`${img.webp600} 600w, ${img.webp} 1024w`}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <img
                        src={img.fallback}
                        alt={review.image.alt}
                        loading="lazy"
                        decoding="async"
                        width={review.image.width}
                        height={review.image.height}
                        className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </picture>
                  )}

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />

                  {/* Verification & Location Badge Overlays */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-navy shadow-sm backdrop-blur-md">
                      <GoogleIcon className="h-3.5 w-3.5" />
                      <span>Verified Google Review</span>
                    </span>

                    <span className="inline-flex items-center rounded-full bg-navy/85 px-2.5 py-1 text-[10px] font-semibold text-white/90 backdrop-blur-md">
                      {review.city.split("/")[0].trim()}
                    </span>
                  </div>

                  {/* Bottom Caption Pill */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <p className="text-[11px] font-medium leading-tight text-white/90 line-clamp-1">
                      {review.image.caption}
                    </p>
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  {/* Top Metadata: Stars + Procedure Tag */}
                  <div className="flex items-center justify-between gap-2">
                    <StarRating count={review.rating} />
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold tracking-wide uppercase text-primary">
                      {review.procedureTag.split("&")[0].trim()}
                    </span>
                  </div>

                  {/* Reviewer Details */}
                  <div className="mt-4 border-b border-border/60 pb-4">
                    <h3 className="font-display text-xl font-medium text-foreground">
                      {review.name}
                    </h3>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {review.relation} · {review.city}
                    </p>
                  </div>

                  {/* Summary Callout Box */}
                  <div className="relative mt-5 rounded-2xl bg-cream/60 p-4 border border-border/50">
                    <QuoteIcon className="absolute right-3.5 top-3.5 h-6 w-6 text-foreground/10" />
                    <p className="font-serif italic text-sm md:text-[15px] font-medium leading-relaxed text-foreground/95 pr-6">
                      &ldquo;{review.summary}&rdquo;
                    </p>
                  </div>

                  {/* Expandable Review Text */}
                  <div className="mt-5 text-sm leading-relaxed text-muted-foreground space-y-3 text-pretty">
                    {isExpanded ? (
                      <div className="space-y-3 text-foreground/85 border-t border-border/60 pt-4 animate-in fade-in duration-300">
                        {review.fullText.split("\n\n").map((para, i) => (
                          <p key={i} className="leading-relaxed">
                            {para}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <p className="line-clamp-3 text-muted-foreground leading-relaxed">
                        {review.fullText.split("\n\n")[0]}
                      </p>
                    )}
                  </div>

                  {/* Action Toggles */}
                  <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => toggleExpand(review.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-colors hover:text-primary/80 focus:outline-none"
                    >
                      <span>{isExpanded ? "Collapse review" : "Read full review"}</span>
                      <svg
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveModalReview(review)}
                      className="inline-flex items-center gap-1 rounded-full border border-border/80 px-3 py-1 text-[11px] font-medium text-foreground/75 transition hover:bg-secondary hover:text-foreground"
                      title="Open full letter in reading modal"
                    >
                      <span>Full view</span>
                      <svg
                        className="h-3 w-3"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="15 3 21 3 21 9" />
                        <polyline points="9 21 3 21 3 15" />
                        <line x1="21" y1="3" x2="14" y2="10" />
                        <line x1="3" y1="21" x2="10" y2="14" />
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Luxury Reading Modal Dialog */}
      {activeModalReview && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-review-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveModalReview(null)}
        >
          <div
            className="relative flex flex-col max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-3xl bg-card border border-border shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-border/80 px-6 py-4.5 bg-muted/30">
              <div className="flex items-center gap-2.5">
                <GoogleIcon className="h-5 w-5" />
                <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  Verified Patient Experience
                </span>
              </div>

              <button
                type="button"
                onClick={() => setActiveModalReview(null)}
                className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground transition"
                aria-label="Close dialog"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Modal Body: Scrollable Content */}
            <div className="overflow-y-auto px-6 py-6 sm:px-8 space-y-6">
              {/* Reviewer Header */}
              <div>
                <div className="flex items-center gap-2">
                  <StarRating count={activeModalReview.rating} />
                  <span className="text-xs font-semibold text-primary">5.0 Star Rating</span>
                </div>
                <h3
                  id="modal-review-title"
                  className="mt-2 font-display text-2xl sm:text-3xl font-medium text-foreground"
                >
                  {activeModalReview.name}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                  {activeModalReview.relation} · {activeModalReview.city} ·{" "}
                  {activeModalReview.procedureTag}
                </p>
              </div>

              {/* Summary Highlight Box */}
              <div className="rounded-2xl border border-primary/20 bg-primary/[0.04] p-5">
                <p className="font-serif italic text-base sm:text-lg font-medium leading-relaxed text-foreground">
                  &ldquo;{activeModalReview.summary}&rdquo;
                </p>
              </div>

              {/* Uncropped Full Review Text */}
              <div className="space-y-4 text-sm sm:text-base leading-relaxed text-foreground/85 border-t border-border/60 pt-4">
                {activeModalReview.fullText.split("\n\n").map((para, i) => (
                  <p key={i} className="leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between border-t border-border/80 px-6 py-4 bg-muted/20">
              <span className="text-xs text-muted-foreground">
                In care of Dr. Manish Aggarwal ·{" "}
                <a
                  href={siteConfig.hospitalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition underline decoration-primary/40 underline-offset-2"
                  title="View Dr. Manish Aggarwal's Official Yashoda Medicity Profile"
                >
                  {siteConfig.hospital} ↗
                </a>
              </span>
              <button
                type="button"
                onClick={() => setActiveModalReview(null)}
                className="rounded-full bg-navy px-5 py-2 text-xs font-semibold text-white transition hover:opacity-90"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
});
