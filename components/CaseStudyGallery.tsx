import Image from 'next/image';

export interface CaseStudyScreenshot {
  src: string;
  alt: string;
  caption?: string;
}

interface CaseStudyGalleryProps {
  items: CaseStudyScreenshot[];
}

export default function CaseStudyGallery({ items }: CaseStudyGalleryProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="mt-16">
      <div className="mb-8 text-center max-w-3xl mx-auto">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
          Product Screens
        </p>
        <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-2">
          Selected mobile web flows
        </h2>
        <p className="text-[var(--color-text-secondary)] mt-3">
          Representative screens from the delivered banking experience, focused on account overview,
          payments, and cross-currency transfers.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 max-w-4xl mx-auto">
        {items.map((item) => (
          <figure
            key={item.src}
            className="rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg-card)] p-3"
          >
            <div className="relative aspect-[9/16] overflow-hidden rounded-xl bg-[var(--color-bg-elevated)]">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain object-top"
              />
            </div>
            {item.caption && (
              <figcaption className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                {item.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}
