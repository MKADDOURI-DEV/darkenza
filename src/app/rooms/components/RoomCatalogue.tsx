'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { rooms, formatMad, toEur, type Room } from '@/components/data';

type Filter = 'all' | Room['type'];

const filters: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All rooms' },
  { id: 'double', label: 'Doubles' },
  { id: 'family', label: 'Family' },
  { id: 'suite', label: 'Suite' },
];

/*
BENTO AUDIT (every filter state, lg 6 cols)
all: 5 cards [Kenza, Atlas, Safran, Famille, Jasmin]
  Row 1: [1..4 Kenza cs-4 rs-2] [5..6 Atlas cs-2]
  Row 2: [1..4 Kenza row-span]  [5..6 Safran cs-2]
  Row 3: [1..3 Famille cs-3] [4..6 Jasmin cs-3]   Placed 5/5 ✓
double: 3 cards [Atlas, Safran, Jasmin] → each cs-2, one row of 3   Placed 3/3 ✓
family: 1 card [Famille] → cs-full   Placed 1/1 ✓
suite: 1 card [Kenza] → cs-full   Placed 1/1 ✓
*/

function spanClass(filter: Filter, id: string): string {
  if (filter === 'all') {
    const map: Record<string, string> = {
      kenza: 'md:col-span-2 lg:col-span-4 lg:row-span-2 min-h-[480px]',
      atlas: 'lg:col-span-2 min-h-[280px]',
      safran: 'lg:col-span-2 min-h-[280px]',
      famille: 'lg:col-span-3 min-h-[340px]',
      jasmin: 'lg:col-span-3 min-h-[340px]',
    };
    return map[id];
  }
  if (filter === 'double') return 'lg:col-span-2 min-h-[340px]';
  return 'md:col-span-2 lg:col-span-6 min-h-[420px]';
}

export default function RoomCatalogue() {
  const [filter, setFilter] = useState<Filter>('all');

  const visible = useMemo(
    () => (filter === 'all' ? rooms : rooms.filter((r) => r.type === filter)),
    [filter]
  );

  return (
    <section className="pb-16 pt-4 md:pb-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter rooms">
          {filters.map((f) => (
            <button
              key={f.id}
              role="tab"
              aria-selected={filter === f.id}
              onClick={() => setFilter(f.id)}
              className={`min-h-[44px] rounded-full border px-5 text-[15px] font-semibold transition-colors ${
                filter === f.id
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-card text-foreground hover:bg-secondary'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div
          key={filter}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6"
        >
          {visible.map((room, i) => (
            // GRID CARD: {room.name}
            <article
              key={room.id}
              className={`group relative flex overflow-hidden rounded-2xl border border-border bg-foreground ${spanClass(
                filter,
                room.id
              )}`}
              style={{ animation: `fadeSlide 0.6s ${i * 80}ms both` }}
            >
              <AppImage
                src={room.image}
                alt={room.alt}
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/45 to-foreground/10" />
              <div className="relative mt-auto flex w-full flex-col gap-3 p-5 text-background md:p-6">
                <div className="flex flex-wrap gap-2">
                  {room.amenities.map((a) => (
                    <span
                      key={a}
                      className="rounded-full border border-background/30 bg-foreground/40 px-3 py-1 text-xs font-semibold backdrop-blur-sm"
                    >
                      {a}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-2xl md:text-3xl">{room.name}</h3>
                <p className="max-w-lg text-[15px] leading-relaxed text-background/90">{room.blurb}</p>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-[15px]">
                    <span className="text-xl font-semibold">{formatMad(room.priceMad)}</span>
                    <span className="text-background/80"> / night · about {toEur(room.priceMad)} EUR · up to {room.guests} guests</span>
                  </p>
                  <Link
                    href={`/booking?room=${room.id}`}
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-background px-5 text-[15px] font-semibold text-foreground transition-transform hover:scale-[1.04]"
                  >
                    Book this room
                    <Icon name="ArrowRightIcon" size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}