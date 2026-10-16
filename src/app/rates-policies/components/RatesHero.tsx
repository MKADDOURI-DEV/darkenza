import React from 'react';
import RevealOnScroll from '@/components/RevealOnScroll';
import PendingNote from '@/components/PendingNote';

export default function RatesHero() {
  return (
    <section className="relative overflow-hidden pb-10 pt-12 md:pb-14 md:pt-20">
      <div className="zellige pointer-events-none absolute inset-0 opacity-60" />
      <div className="blob-accent pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-70" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 md:px-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <RevealOnScroll>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Rates and policies</p>
          <h1 className="font-display text-display-lg mt-3 max-w-2xl text-foreground">
            What it costs, and what happens if plans change.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Prices per room per night, breakfast included. EUR figures are indicative and use a rounded
            exchange rate.
          </p>
        </RevealOnScroll>
        <RevealOnScroll delayMs={120}>
          <PendingNote>
            All rates, booking and cancellation conditions on this page are pending owner confirmation
            and must be validated before publication.
          </PendingNote>
        </RevealOnScroll>
      </div>
    </section>
  );
}