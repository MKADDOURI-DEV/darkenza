import React from 'react';
import RevealOnScroll from '@/components/RevealOnScroll';

export default function BookingHero() {
  return (
    <section className="relative overflow-hidden pb-6 pt-12 md:pb-8 md:pt-20">
      <div className="zellige pointer-events-none absolute inset-0 opacity-60" />
      <div className="blob-accent pointer-events-none absolute -left-20 -top-16 h-72 w-72 rounded-full opacity-70" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <RevealOnScroll>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Booking</p>
          <h1 className="font-display text-display-lg mt-3 max-w-3xl text-foreground">
            Four short steps from dates to confirmed.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Pick your dates, choose a room, tell us who is travelling. We reply by email to confirm
            availability and payment details.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}