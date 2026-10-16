import React from 'react';
import RevealOnScroll from '@/components/RevealOnScroll';
import { rooms, formatMad, toEur } from '@/components/data';

const seasons = [
  { id: 'low', label: 'Low season', note: 'Jun to Aug', factor: 0.8 },
  { id: 'mid', label: 'Mid season', note: 'Jan to Mar, Nov', factor: 1 },
  { id: 'high', label: 'High season', note: 'Apr to May, Sep to Oct, Dec', factor: 1.25 },
];

export default function RatesTable() {
  return (
    <section className="pb-14 pt-2 md:pb-18">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <RevealOnScroll>
          <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-lg">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <caption className="sr-only">Nightly rates per room and season</caption>
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th scope="col" className="px-5 py-4 font-display text-lg font-semibold">Room</th>
                  {seasons?.map((s) => (
                    <th key={s?.id} scope="col" className="px-5 py-4">
                      <span className="block text-[15px] font-semibold">{s?.label}</span>
                      <span className="block text-[13px] font-normal opacity-90">{s?.note}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rooms?.map((r) => (
                  <tr key={r?.id} className="border-t border-border">
                    <th scope="row" className="px-5 py-4 align-top">
                      <span className="block font-display text-lg text-foreground">{r?.name}</span>
                      <span className="block text-[14px] text-muted-foreground">Up to {r?.guests} guests</span>
                    </th>
                    {seasons?.map((s) => {
                      const mad = Math.round((r?.priceMad * s?.factor) / 10) * 10;
                      return (
                        <td key={s?.id} className="px-5 py-4 align-top">
                          <span className="block text-[16px] font-semibold text-foreground">{formatMad(mad)}</span>
                          <span className="block text-[13px] text-muted-foreground">about {toEur(mad)} EUR</span>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delayMs={120} className="mt-6">
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <li className="rounded-2xl border border-border bg-card p-5">
              <p className="font-display text-lg text-foreground">Included</p>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                Breakfast, Wi-Fi, linens and daily housekeeping.
              </p>
            </li>
            <li className="rounded-2xl border border-border bg-card p-5">
              <p className="font-display text-lg text-foreground">Not included</p>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                Dinners, hammam sessions, guided walks and transfers, priced on request.
              </p>
            </li>
            <li className="rounded-2xl border border-border bg-card p-5">
              <p className="font-display text-lg text-foreground">Taxes</p>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                Local tourist tax is to be confirmed with the owner and shown before you pay.
              </p>
            </li>
          </ul>
        </RevealOnScroll>
      </div>
    </section>
  );
}