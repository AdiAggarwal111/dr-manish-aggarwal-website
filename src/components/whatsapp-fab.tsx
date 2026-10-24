import { memo } from "react";
import { PhoneCall } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export const WhatsappFab = memo(function WhatsappFab() {
  const cleanPhone = siteConfig.phoneRaw.replace(/[^0-9]/g, "");

  return (
    <aside
      aria-label="Emergency and Instant Consultation Quick Actions"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2.5 sm:gap-3"
    >
      {/* 24/7 Cardiac Emergency 1-Tap Call Button */}
      <a
        href={`tel:${siteConfig.phoneRaw}`}
        aria-label="Call Dr. Manish Aggarwal's 24/7 Emergency Helpline"
        title={`24/7 Cardiac Emergency Helpline (${siteConfig.phoneDisplay})`}
        className="group relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gradient-to-tr from-red-600 via-rose-600 to-red-500 text-white shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-500/50"
      >
        <span className="relative flex h-full w-full items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-25" />
          <PhoneCall className="h-5 w-5 sm:h-6 sm:w-6 transition group-hover:rotate-12" />
        </span>
      </a>

      {/* WhatsApp Instant Consultation FAB */}
      <a
        href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(
          "Hello Dr. Manish Aggarwal's team, I would like to inquire about a consultation / cardiac evaluation.",
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Dr. Manish Aggarwal's clinic"
        title="Chat with Clinical Team on WhatsApp"
        className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-[#20ba59] focus:outline-none focus:ring-2 focus:ring-[#25D366]/40"
      >
        <svg
          className="h-6 w-6 sm:h-7 sm:w-7"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
        </svg>
      </a>
    </aside>
  );
});
