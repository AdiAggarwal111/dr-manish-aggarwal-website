import { useEffect } from "react";

export function useScrollReveal(
  selector = ".reveal, .reveal-dot",
  deps: ReadonlyArray<unknown> = [],
) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    let io: IntersectionObserver | null = null;
    const schedule =
      typeof window.requestIdleCallback === "function"
        ? window.requestIdleCallback
        : (cb: () => void) => setTimeout(cb, 50);

    const handle = schedule(() => {
      const els = Array.from(document.querySelectorAll<HTMLElement>(selector));
      if (!els.length) return;

      if (!("IntersectionObserver" in window)) {
        els.forEach((el) => el.classList.add("is-visible"));
        return;
      }

      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("is-visible");
              io?.unobserve(e.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -5% 0px" },
      );

      els.forEach((el) => io?.observe(el));
    });

    return () => {
      if (typeof window.cancelIdleCallback === "function" && typeof handle === "number") {
        window.cancelIdleCallback(handle);
      }
      io?.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
