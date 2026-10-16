import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import RevealOnScroll from '@/components/RevealOnScroll';
import PendingNote from '@/components/PendingNote';

const highlights = [
  { icon: 'BanknotesIcon', text: 'Rates in MAD with indicative EUR conversion' },
  { icon: 'ClockIcon', text: 'Check-in from 15:00, check-out by 11:00' },
  { icon: 'ShieldCheckIcon', text: 'Cancellation terms stated before you pay' },
];

export default function RatesCtaSection() {
  return (
    <section className="bg-secondary/60 pb-20 pt-12 md:pb-24 md:pt-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 md:px-8 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <RevealOnScroll className="flex flex-col justify-between gap-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Rates and terms</p>
            <h2 className="font-display text-display-lg mt-3 text-foreground">
              Straight prices, written conditions.
            </h2>
            <ul className="mt-8 flex flex-col gap-4">
              {highlights.map((h) => (
                <li key={h.text} className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-card text-primary">
                    <Icon name={h.icon as 'BanknotesIcon'} size={20} />
                  </span>
                  <span className="pt-2 text-base text-foreground">{h.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <PendingNote>
            Final rates, booking conditions and cancellation terms are pending owner confirmation. Figures
            shown are indicative.
          </PendingNote>
        </RevealOnScroll>

        <RevealOnScroll delayMs={150}>
          <div className="relative overflow-hidden rounded-3xl bg-accent p-8 text-accent-foreground shadow-2xl md:p-10">
            <div className="blob-primary pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-60" />
            <p className="relative text-xs font-semibold uppercase tracking-[0.2em] text-saffron">Ready when you are</p>
            <h3 className="font-display relative mt-3 text-3xl leading-tight">
              Pick your dates and request your room.
            </h3>
            <p className="relative mt-4 text-base leading-relaxed text-accent-foreground/90">
              You will see a price estimate before sending anything. Our hosts confirm by email.
            </p>
            <div className="relative mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/booking"
                className="flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-background px-7 text-base font-semibold text-foreground transition-transform hover:scale-[1.03]"
              >
                Start booking
                <Icon name="ArrowRightIcon" size={18} />
              </Link>
              <Link
                href="/rates-policies"
                className="flex min-h-[48px] items-center justify-center rounded-full border border-accent-foreground/40 px-7 text-base font-semibold text-accent-foreground transition-colors hover:bg-accent-foreground/10"
              >
                Read the policies
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}