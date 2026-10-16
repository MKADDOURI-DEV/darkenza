import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import RevealOnScroll from '@/components/RevealOnScroll';
import { rooms, formatMad } from '@/components/data';

/*
BENTO AUDIT
Array has 5 cards: Kenza, Atlas, Safran, Famille, Jasmin
Desktop (lg: 6 cols, 2 rows):
  Row 1: [col-1..3: Kenza cs-3 rs-2] [col-4..6: Atlas cs-3]
  Row 2: [col-1..3: Kenza (row-span)] [col-4..5: Safran cs-2] [col-6: Famille?]
Revised to fit exactly 5 cards in 3 rows of a 6-col grid:
  Row 1: [col-1..4: Kenza cs-4 rs-2] [col-5..6: Atlas cs-2]
  Row 2: [col-1..4: Kenza (row-span)] [col-5..6: Safran cs-2]
  Row 3: [col-1..3: Famille cs-3] [col-4..6: Jasmin cs-3]
Placed 5/5 cards ✓ (no empty cells)
Mobile (1 col): each card stacked
Tablet (md: 2 cols):
  Row 1: [col-1..2: Kenza cs-2]
  Row 2: [col-1: Atlas] [col-2: Safran]
  Row 3: [col-1: Famille] [col-2: Jasmin]
Placed 5/5 cards ✓
*/

const layout: Record<string, string> = {
  kenza: 'md:col-span-2 lg:col-span-4 lg:row-span-2 min-h-[420px] lg:min-h-[560px]',
  atlas: 'lg:col-span-2 min-h-[260px]',
  safran: 'lg:col-span-2 min-h-[260px]',
  famille: 'lg:col-span-3 min-h-[300px]',
  jasmin: 'lg:col-span-3 min-h-[300px]',
};

export default function RoomsPreviewSection() {
  return (
    <section className="bg-secondary/60 pb-16 pt-12 md:pb-20 md:pt-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <RevealOnScroll className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Rooms</p>
            <h2 className="font-display text-display-lg mt-3 max-w-xl text-foreground">
              Five rooms, each with its own mood.
            </h2>
          </div>
          <Link
            href="/rooms"
            className="inline-flex min-h-[44px] items-center gap-2 text-[15px] font-semibold text-accent hover:underline"
          >
            See all rooms and photos
            <Icon name="ArrowRightIcon" size={18} />
          </Link>
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
          {rooms.map((room, i) => (
            // GRID CARD: {room.name} | spans: {layout[room.id]}
            <RevealOnScroll key={room.id} delayMs={i * 90} className={layout[room.id]}>
              <Link
                href="/rooms"
                className="group relative flex h-full min-h-[inherit] overflow-hidden rounded-2xl border border-border bg-foreground"
              >
                <AppImage
                  src={room.image}
                  alt={room.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/35 to-transparent" />
                <div className="relative mt-auto flex w-full flex-col gap-2 p-5 text-background md:p-6">
                  <span className="w-fit rounded-full border border-background/30 bg-foreground/40 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
                    {room.guests} guests · {room.size}
                  </span>
                  <h3 className="font-display text-2xl">{room.name}</h3>
                  <p className="text-[15px] text-background/90">
                    From <span className="font-semibold">{formatMad(room.priceMad)}</span> / night
                  </p>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}