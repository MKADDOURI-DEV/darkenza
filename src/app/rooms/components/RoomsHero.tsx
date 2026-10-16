import React from 'react';
import PendingNote from '@/components/PendingNote';
import RevealOnScroll from '@/components/RevealOnScroll';

export default function RoomsHero() {
  return (
    <section className="relative overflow-hidden pb-10 pt-12 md:pb-14 md:pt-20">
      <div className="zellige pointer-events-none absolute inset-0 opacity-60" />
      <div className="blob-primary pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-70" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 md:px-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <RevealOnScroll>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Rooms</p>
          <h1 className="font-display text-display-lg mt-3 max-w-2xl text-foreground">
            Choose the room that fits the way you travel.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Every room has its own bathroom, hand-finished walls and a window worth sitting by. Nightly
            rates include breakfast.
          </p>
        </RevealOnScroll>
        <RevealOnScroll delayMs={120}>
          <PendingNote>
            Current number of rooms and total capacity are pending owner confirmation. The five rooms
            below are a working catalogue.
          </PendingNote>
        </RevealOnScroll>
      </div>
    </section>
  );
}