'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function HeroSection() {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [minDate, setMinDate] = useState('');

  useEffect(() => {
    setMinDate(new Date().toISOString().split('T')[0]);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translate3d(0, ${window.scrollY * 0.25}px, 0) scale(1.08)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleMouse = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setOffset({ x, y });
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (checkIn) params.set('in', checkIn);
    if (checkOut) params.set('out', checkOut);
    params.set('guests', guests);
    router.push(`/booking?${params.toString()}`);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouse}
      className="relative min-h-screen w-full overflow-hidden bg-foreground">
      
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        <AppImage
          src="https://images.unsplash.com/photo-1605541814064-659fd22243ad"
          alt="Warmly lit Moroccan courtyard with arched doorways, tiled floor and a fountain at dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover" />
        
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/55 to-foreground/40" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/20 to-transparent" />

      <div
        className="blob-primary pointer-events-none absolute -left-20 top-1/3 h-[420px] w-[420px] rounded-full opacity-70 float-slow"
        style={{ transform: `translate(${offset.x * 40}px, ${offset.y * 30}px)` }} />
      
      <div
        className="blob-accent pointer-events-none absolute -right-24 bottom-10 h-[360px] w-[360px] rounded-full opacity-60"
        style={{ transform: `translate(${offset.x * -30}px, ${offset.y * -24}px)` }} />
      
      <div className="grain absolute inset-0" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-4 pb-10 pt-32 md:px-8 md:pb-14">
        <p className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-background/30 bg-foreground/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-background backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-saffron" />
          Maison d&apos;hôtes · Morocco
        </p>

        <h1 className="font-display text-hero-xl max-w-4xl text-background">
          A house to <span className="italic text-saffron">arrive</span> at,
          <br /> not just sleep in.
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-background/90 md:text-lg">
          Dar Kenza is a small Moroccan guesthouse with handmade rooms, breakfast under the lemon tree
          and one clear rule: book direct, talk to the people who host you.
        </p>

        <form
          onSubmit={submit}
          className="mt-10 grid w-full max-w-4xl grid-cols-1 gap-3 rounded-2xl border border-background/20 bg-card/95 p-3 shadow-2xl backdrop-blur-md md:grid-cols-[1fr_1fr_0.7fr_auto] md:items-end md:gap-2 md:p-4"
          aria-label="Check availability">
          
          <label className="flex flex-col gap-1 px-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Arrival</span>
            <input
              type="date"
              min={minDate}
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="min-h-[44px] rounded-lg border border-input bg-background px-3 text-base text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            
          </label>
          <label className="flex flex-col gap-1 px-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Departure</span>
            <input
              type="date"
              min={checkIn || minDate}
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="min-h-[44px] rounded-lg border border-input bg-background px-3 text-base text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            
          </label>
          <label className="flex flex-col gap-1 px-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Guests</span>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="min-h-[44px] rounded-lg border border-input bg-background px-3 text-base text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
              
              {[1, 2, 3, 4, 5, 6].map((n) =>
              <option key={n} value={n}>
                  {n} {n === 1 ? 'guest' : 'guests'}
                </option>
              )}
            </select>
          </label>
          <button
            type="submit"
            className="group flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-primary px-6 text-base font-semibold text-primary-foreground transition-transform hover:scale-[1.02]">
            
            Check availability
            <Icon name="ArrowRightIcon" size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
        </form>
      </div>
    </section>);

}