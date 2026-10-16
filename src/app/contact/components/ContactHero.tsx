import React from 'react';
import RevealOnScroll from '@/components/RevealOnScroll';

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden pb-8 pt-12 md:pb-10 md:pt-20">
      <div className="zellige pointer-events-none absolute inset-0 opacity-60" />
      <div className="blob-primary pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-70" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <RevealOnScroll>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Contact</p>
          <h1 className="font-display text-display-lg mt-3 max-w-3xl text-foreground">
            Write to us, or come and find the door.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            We usually answer within one working day. For quick questions about dates, the booking
            form is the fastest route.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}