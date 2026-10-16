'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import PendingNote from '@/components/PendingNote';

interface Policy {
  q: string;
  a: string;
}

const policies: Policy[] = [
  {
    q: 'How do I book and pay?',
    a: 'Send a booking request with your dates and room. Our hosts confirm availability by email within 24 hours and share payment details. A deposit may be requested to secure the room; the exact amount is pending owner confirmation.',
  },
  {
    q: 'What is the cancellation policy?',
    a: 'Proposed terms, pending confirmation: free cancellation up to 7 days before arrival, 50% of the first night charged between 7 and 2 days, and the first night charged for later cancellations or no-shows.',
  },
  {
    q: 'What are check-in and check-out times?',
    a: 'Check-in from 15:00 and check-out by 11:00. Earlier arrival or later departure can be arranged when the room is free; tell us your arrival time when you book.',
  },
  {
    q: 'Can I stay with children or a group?',
    a: 'Yes. The family suite sleeps up to four. For groups needing several rooms, contact us so we can check capacity and offer a joint rate.',
  },
  {
    q: 'Do you cater to dietary needs?',
    a: 'Vegetarian, vegan, gluten-free and allergy-aware meals are possible with notice. Please mention requirements in your booking request.',
  },
];

export default function PoliciesAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-secondary/60 pb-20 pt-12 md:pb-24 md:pt-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 md:px-8 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Policies</p>
          <h2 className="font-display text-display-lg mt-3 text-foreground">The small print, in plain words.</h2>
          <ul className="mt-8 flex flex-col gap-3">
            {policies.map((p, i) => {
              const isOpen = open === i;
              return (
                <li key={p.q} className="overflow-hidden rounded-2xl border border-border bg-card">
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex min-h-[56px] w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <span className="font-display text-lg text-foreground">{p.q}</span>
                      <Icon
                        name="PlusIcon"
                        size={22}
                        className={`shrink-0 text-primary transition-transform ${isOpen ? 'rotate-45' : ''}`}
                      />
                    </button>
                  </h3>
                  {isOpen && (
                    <div className="px-5 pb-5 text-[15px] leading-relaxed text-muted-foreground" style={{ animation: 'fadeSlide 0.4s both' }}>
                      {p.a}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex">
          <div className="flex w-full flex-col justify-between gap-8 rounded-3xl bg-accent p-8 text-accent-foreground shadow-xl md:p-10">
            <div>
              <Icon name="ShieldCheckIcon" size={32} className="text-saffron" />
              <h3 className="font-display mt-5 text-3xl leading-tight">Questions before you book?</h3>
              <p className="mt-4 text-base leading-relaxed text-accent-foreground/90">
                Ask the hosts directly. We answer in English, French, Spanish or Arabic.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="/contact"
                className="flex min-h-[48px] items-center justify-center rounded-full bg-background px-6 text-[15px] font-semibold text-foreground"
              >
                Contact the hosts
              </Link>
              <Link
                href="/booking"
                className="flex min-h-[48px] items-center justify-center rounded-full border border-accent-foreground/40 px-6 text-[15px] font-semibold text-accent-foreground"
              >
                Start a booking
              </Link>
            </div>
            <PendingNote>
              Policies shown here are proposals until the owner provides official conditions.
            </PendingNote>
          </div>
        </div>
      </div>
    </section>
  );
}