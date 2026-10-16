'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const moments = [
  { time: '08:00', title: 'Breakfast under the lemon tree', text: 'Msemen, honey, olives, eggs, fruit and coffee.' },
  { time: '10:30', title: 'Walk or wander', text: 'A guided route, or a slow morning with a book on the rooftop.' },
  { time: '13:30', title: 'Light lunch (on request)', text: 'Salads, grilled vegetables and fresh bread.' },
  { time: '16:30', title: 'Hammam hour', text: 'Steam, scrub and a long rest afterwards.' },
  { time: '20:00', title: 'Dinner in the salon', text: 'A set menu cooked that day, shared at the long table.' },
];

export default function DayInTheHouse() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-secondary/60 pb-20 pt-12 md:pb-24 md:pt-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 md:px-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">A day in the house</p>
          <h2 className="font-display text-display-lg mt-3 text-foreground">
            No programme, just good rhythm.
          </h2>
          <ul className="mt-8 flex flex-col gap-2">
            {moments?.map((m, i) => (
              <li key={m?.time}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className={`flex min-h-[56px] w-full items-center gap-4 rounded-xl border px-4 py-3 text-left transition-colors ${
                    active === i ? 'border-primary bg-card' : 'border-transparent hover:bg-card/60'
                  }`}
                >
                  <span className="font-display w-16 text-lg text-primary">{m?.time}</span>
                  <span className="text-[15px] font-semibold text-foreground">{m?.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex">
          <div className="flex w-full flex-col justify-between rounded-3xl bg-primary p-8 text-primary-foreground shadow-xl md:p-10">
            <div key={active} style={{ animation: 'fadeSlide 0.5s both' }}>
              <p className="font-display text-5xl text-saffron">{moments?.[active]?.time}</p>
              <h3 className="font-display mt-4 text-3xl leading-tight">{moments?.[active]?.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-primary-foreground/90">{moments?.[active]?.text}</p>
            </div>
            <Link
              href="/booking"
              className="mt-10 inline-flex min-h-[48px] w-fit items-center gap-2 rounded-full bg-background px-6 text-[15px] font-semibold text-foreground transition-transform hover:scale-[1.03]"
            >
              Plan your stay
              <Icon name="ArrowRightIcon" size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}