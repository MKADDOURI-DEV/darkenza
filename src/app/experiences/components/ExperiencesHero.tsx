import React from 'react';
import RevealOnScroll from '@/components/RevealOnScroll';
import PendingNote from '@/components/PendingNote';

export default function ExperiencesHero() {
  return (
    <section className="relative overflow-hidden pb-10 pt-12 md:pb-14 md:pt-20">
      <div className="zellige pointer-events-none absolute inset-0 opacity-60" />
      <div className="blob-primary pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full opacity-70" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 md:px-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <RevealOnScroll>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Services and experiences</p>
          <h1 className="font-display text-display-lg mt-3 max-w-2xl text-foreground">
            What happens between breakfast and the last glass of tea.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Some things are part of every stay, others are arranged on request. Ask when you book.
          </p>
        </RevealOnScroll>
        <RevealOnScroll delayMs={120}>
          <PendingNote>
            The complete list of amenities and services is pending confirmation from the owner. Items
            below describe the intended offer.
          </PendingNote>
        </RevealOnScroll>
      </div>
    </section>
  );
}