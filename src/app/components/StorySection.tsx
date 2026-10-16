import React from 'react';
import AppImage from '@/components/ui/AppImage';
import RevealOnScroll from '@/components/RevealOnScroll';
import PendingNote from '@/components/PendingNote';

const facts = [
{ label: 'Hosted by', value: 'Your hosts, on site' },
{ label: 'Meals', value: 'Breakfast and home dinners' },
{ label: 'Booking', value: 'Direct, no marketplace fees' }];


export default function StorySection() {
  return (
    <section className="relative overflow-hidden bg-background pb-16 pt-12 md:pb-20 md:pt-20">
      <div className="zellige pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 md:px-8 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
        <div className="flex flex-col justify-between gap-10">
          <RevealOnScroll>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">The house</p>
            <h2 className="font-display text-display-lg mt-4 max-w-2xl text-foreground">
              Cedar ceilings, lime-washed walls and a courtyard that keeps its own time.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              We keep Dar Kenza small on purpose. A handful of rooms means we know your name by the
              first evening, and breakfast is whatever the kitchen found good that morning: warm
              msemen, olives, honey, fresh orange juice and strong coffee.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delayMs={120}>
            <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
              {facts?.map((f) =>
              <div key={f?.label} className="bg-card p-5">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{f?.label}</dt>
                  <dd className="mt-2 font-display text-lg text-foreground">{f?.value}</dd>
                </div>
              )}
            </dl>
          </RevealOnScroll>

          <RevealOnScroll delayMs={200}>
            <PendingNote>
              Information being confirmed with the owner: exact address, official phone and email, room
              count and capacity. Details shown on this site are placeholders until validated.
            </PendingNote>
          </RevealOnScroll>
        </div>

        <RevealOnScroll delayMs={150} className="flex flex-col">
          <div className="relative h-full min-h-[460px]">
            <div className="arch-top relative h-full min-h-[460px] overflow-hidden border border-border shadow-xl">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_11ca16856-1778777379683.png"
                alt="Hand-painted zellige tile detail in blue and white geometric pattern"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
              <blockquote className="absolute bottom-0 left-0 right-0 p-6 text-background">
                <p className="font-display text-xl italic leading-snug">
                  &ldquo;It felt less like a hotel and more like being handed the keys to a family home.&rdquo;
                </p>
                <footer className="mt-3 text-sm font-semibold">Claire, Lyon</footer>
              </blockquote>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>);

}