import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story | Amthane Valley Farm",
  description:
    "Discover how Amthane Valley Farm began as a family retreat and became a private Goan haven for true Susegad.",
};

export default function AboutPage() {
  return (
    <section className="section-spacing bg-cream-soft/70">
      <div className="mx-auto max-w-4xl space-y-6 rounded-[2.5rem] bg-white/90 p-10 shadow-soft">
        <h1 className="text-4xl font-semibold text-forest">
          Our Story: The Search for Susegad that Became Amthane Valley
        </h1>
        <p className="text-lg text-forest-muted">
          Our journey began with a simple desire: to find a piece of land where our family could experience true Goan Susegad. A place to unwind, to celebrate without a schedule, and to reconnect with nature. We found it here, by the tranquil waters of the Amthane Dam, surrounded by the rustling of palm leaves.
        </p>
        <p className="text-lg text-forest-muted">
          What started as our private haven soon became a place our friends and their families wanted to share. We realized the Susegad we had built was something special. Today, we have opened our gates to you. We&apos;ve added modern comforts, but the essence remains: Amthane Valley is an invitation to experience the Goan way of life—a life of leisure, celebration, togetherness, and unhurried joy.
        </p>
      </div>
    </section>
  );
}
