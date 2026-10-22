import { memo } from "react";
import { timeline } from "@/data/timeline";
import { siteConfig } from "@/data/site-config";

export const CareerTimeline = memo(function CareerTimeline({
  isSticky = false,
}: {
  isSticky?: boolean;
}) {
  return (
    <div className={isSticky ? "lg:sticky lg:top-28" : ""}>
      <h2 className="font-display text-2xl font-medium text-foreground md:text-3xl">
        Timeline of Trust
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Three decades across Delhi NCR's most respected cardiac institutions.
      </p>
      <div className="relative mt-8 pl-7">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" aria-hidden="true" />
        {timeline.map((item, index) => (
          <div key={`${item.period}-${index}`} className="relative mb-7 last:mb-0">
            <div
              className="absolute -left-[26px] top-1.5 h-3.5 w-3.5 rounded-full bg-primary ring-4 ring-background"
              aria-hidden="true"
            />
            <p className="text-[10px] font-semibold tracking-[0.2em] text-primary uppercase">
              {item.period}
            </p>
            <h3 className="mt-1 font-display text-base font-medium leading-snug text-foreground">
              {item.title}
            </h3>
            <p className="mt-0.5 text-xs text-muted-foreground">{item.place}</p>
          </div>
        ))}
      </div>
    </div>
  );
});

export function NarrativeBlock({
  title,
  pull,
  children,
}: {
  title: string;
  pull: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="font-display text-3xl leading-tight md:text-4xl">{title}</h2>
      <blockquote className="mt-6 border-l-2 border-primary pl-5 font-display text-xl italic text-foreground/85 md:text-2xl">
        "{pull}"
      </blockquote>
      <div className="mt-6 space-y-4 text-base text-muted-foreground md:text-lg">{children}</div>
    </div>
  );
}

export function DirectorNarrative() {
  return (
    <article className="space-y-16">
      <NarrativeBlock
        title="The Director's Mission & Precision"
        pull="In cardiology, the difference between a good outcome and a life-changing one is millimetric precision."
      >
        <p className="leading-relaxed">
          At the helm of cardiovascular care as Director of Interventional Cardiology &amp;
          Structural Heart at{" "}
          <a
            href={siteConfig.hospitalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-foreground underline decoration-primary/40 underline-offset-4 hover:text-primary transition"
            title="View Dr. Manish Aggarwal's Official Yashoda Medicity Profile"
          >
            {siteConfig.hospital} ↗
          </a>
          , Dr. Manish Aggarwal operates on an uncompromising clinical philosophy: the human heart
          deserves solutions that restore vitality without the trauma of open-chest surgery.
          Specializing in advanced{" "}
          <strong className="font-semibold text-foreground">structural heart solutions</strong>, he
          focuses on repairing failing heart valves and resolving complex, long-standing arterial
          blockages through microscopic, pinhole catheter access. In an arena where anatomical
          margins are measured in fractions of a millimeter, Dr. Aggarwal&apos;s practice is
          anchored by the fundamental conviction that millimetric precision separates an ordinary
          clinical outcome from a truly life-changing one—sparing fragile patients the physical toll
          of a sternotomy and returning them to their families with renewed cardiac reserve.
        </p>
      </NarrativeBlock>

      <NarrativeBlock
        title="Global Pedigree & European Standards"
        pull="Budapest-trained. Indirapuram-anchored. World-class structural heart standards."
      >
        <p className="leading-relaxed">
          Dr. Aggarwal&apos;s surgical mindset is forged through elite international pedigree,
          having completed his specialized{" "}
          <strong className="font-semibold text-foreground">
            European Fellowship in Structural Heart Interventions
          </strong>{" "}
          at the historic Gottsegen György Hungarian Institute of Cardiology in Budapest. Immersed
          in Europe&apos;s most demanding transcatheter valve programs, he mastered the complex
          spatial geomodeling and live 3D echocardiographic guidance required for next-generation{" "}
          <strong className="font-semibold text-foreground">
            Transcatheter Aortic Valve Implantation (TAVI / TAVR)
          </strong>{" "}
          and percutaneous edge-to-edge mitral repair (
          <strong className="font-semibold text-foreground">MitraClip</strong>). By transplanting
          these stringent European procedural protocols and minimalist conscious-sedation paradigms
          directly into{" "}
          <a
            href={siteConfig.hospitalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-foreground underline decoration-primary/40 underline-offset-4 hover:text-primary transition"
            title="View Dr. Manish Aggarwal's Official Yashoda Medicity Profile"
          >
            {siteConfig.hospital}&apos;s ↗
          </a>{" "}
          state-of-the-art hybrid cath lab in Indirapuram, Dr. Aggarwal provides patients across{" "}
          <strong className="font-semibold text-foreground">Noida, Ghaziabad, and Delhi NCR</strong>{" "}
          access to the same world-class valve therapies and 48-hour recovery standards found in
          leading medical capitals worldwide.
        </p>
      </NarrativeBlock>

      <NarrativeBlock
        title="Complex Interventions & Radically Honest Advocacy"
        pull="A radically honest approach to the complex cardiac cases other centres refuse."
      >
        <p className="leading-relaxed">
          Widely regarded across Delhi NCR as the &ldquo;cardiologist&apos;s cardiologist,&rdquo;
          Dr. Aggarwal specializes in high-risk, complex coronary interventions (CHIP) that other
          institutions routinely deem inoperable or untreatable. Where standard catheterization
          reaches its limits, he deploys diamond-tipped{" "}
          <strong className="font-semibold text-foreground">
            rotational atherectomy (rotablation)
          </strong>{" "}
          at 160,000 RPM and specialized retrograde-antegrade dissection techniques to conquer
          rock-hard calcifications and reopen{" "}
          <strong className="font-semibold text-foreground">
            100% blocked Chronic Total Occlusions (CTOs)
          </strong>
          . Complementing this technical mastery is his defining ethos of{" "}
          <strong className="font-semibold text-foreground">Radical Honesty</strong>: an unwavering
          patient-advocacy commitment providing rigorous, objective second opinions for individuals
          told that emergency open-heart bypass surgery (CABG) or multiple stents are their only
          option. In Dr. Aggarwal&apos;s care, science and patient longevity always precede
          procedural volume.
        </p>
      </NarrativeBlock>
    </article>
  );
}

export const TimelineSection = memo(function TimelineSection() {
  return (
    <section className="relative z-20 bg-background px-6 pt-16 pb-16 md:px-12 md:pt-20 md:pb-28">
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-12 lg:gap-16 lg:divide-x lg:divide-border">
        <aside className="lg:col-span-4">
          <CareerTimeline isSticky />
        </aside>
        <div className="lg:col-span-8 lg:pl-16">
          <DirectorNarrative />
        </div>
      </div>
    </section>
  );
});
