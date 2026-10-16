import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import RevealOnScroll from '@/components/RevealOnScroll';

const rows = [
{
  title: 'Dinner from the family kitchen',
  text: 'Slow tagines, seasonal salads and mint tea, served on the terrace or in the salon. Tell us allergies at booking.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a0f882bf-1771504620941.png",
  alt: 'Moroccan tagine with vegetables and bread served on a rustic table'
},
{
  title: 'Foothill walks with a local guide',
  text: 'Half-day routes through villages and terraced fields, matched to your pace. Pick-up from the house.',
  image: "https://images.unsplash.com/photo-1717753444248-816d8bb2965b",
  alt: 'Walking path through dry hills and valley under a clear blue sky'
},
{
  title: 'Rooftop evenings',
  text: 'A quiet place for the last light of the day, with cushions, lanterns and a view over the rooftops.',
  image: "https://images.unsplash.com/photo-1668342081577-9c568eb1d550",
  alt: 'Rooftop terrace with seating at golden hour overlooking rooftops'
}];


export default function ExperiencesPreviewSection() {
  return (
    <section className="bg-background pb-16 pt-12 md:pb-20 md:pt-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <RevealOnScroll className="mb-12 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Experiences</p>
          <h2 className="font-display text-display-lg mt-3 text-foreground">
            Days that fill up without feeling scheduled.
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
          <div className="flex flex-col gap-10">
            {rows?.map((row, i) =>
            <RevealOnScroll key={row?.title}>
                <article
                className={`grid grid-cols-1 items-center gap-5 md:grid-cols-2 md:gap-8 ${
                i % 2 === 1 ? 'md:[&>div:first-child]:order-2' : ''}`
                }>
                
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
                    <AppImage
                    src={row?.image}
                    alt={row?.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover" />
                  
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-foreground">{row?.title}</h3>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">{row?.text}</p>
                  </div>
                </article>
              </RevealOnScroll>
            )}
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <RevealOnScroll delayMs={120}>
              <div className="rounded-2xl border border-border bg-primary p-7 text-primary-foreground shadow-xl">
                <Icon name="ChatBubbleLeftRightIcon" size={28} className="text-saffron" />
                <p className="font-display mt-5 text-2xl italic leading-snug">
                  &ldquo;Our hosts planned a perfect three days: a hammam on arrival, a walk on day two,
                  and a dinner we still talk about.&rdquo;
                </p>
                <p className="mt-4 text-sm font-semibold">Oliver &amp; Hannah, Manchester</p>
                <Link
                  href="/experiences"
                  className="mt-7 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-background px-5 py-2.5 text-[15px] font-semibold text-foreground transition-transform hover:scale-[1.03]">
                  
                  Explore experiences
                  <Icon name="ArrowRightIcon" size={18} />
                </Link>
              </div>
            </RevealOnScroll>
          </aside>
        </div>
      </div>
    </section>);

}