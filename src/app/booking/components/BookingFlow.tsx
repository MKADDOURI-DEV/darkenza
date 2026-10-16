'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';
import PendingNote from '@/components/PendingNote';
import { rooms, formatMad, toEur } from '@/components/data';

function nightsBetween(a: string, b: string): number {
  if (!a || !b) return 0;
  const diff = new Date(b).getTime() - new Date(a).getTime();
  return diff > 0 ? Math.round(diff / 86400000) : 0;
}

const steps = ['Dates', 'Room', 'Your details', 'Review'];

export default function BookingFlow() {
  const params = useSearchParams();
  const [step, setStep] = useState(0);
  const [minDate, setMinDate] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  const [roomId, setRoomId] = useState(rooms[0].id);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setMinDate(new Date().toISOString().split('T')[0]);
    const i = params.get('in');
    const o = params.get('out');
    const g = params.get('guests');
    const r = params.get('room');
    if (i) setCheckIn(i);
    if (o) setCheckOut(o);
    if (g) setGuests(Number(g) || 2);
    if (r && rooms.some((x) => x.id === r)) setRoomId(r);
  }, [params]);

  const room = rooms.find((r) => r.id === roomId) ?? rooms[0];
  const nights = nightsBetween(checkIn, checkOut);
  const total = nights * room.priceMad;

  const eligibleRooms = useMemo(() => rooms.filter((r) => r.guests >= guests), [guests]);

  useEffect(() => {
    if (!eligibleRooms.some((r) => r.id === roomId) && eligibleRooms.length) {
      setRoomId(eligibleRooms[0].id);
    }
  }, [eligibleRooms, roomId]);

  const next = () => {
    setError('');
    if (step === 0 && nights < 1) {
      setError('Please choose an arrival date and a later departure date.');
      return;
    }
    if (step === 2 && (!name.trim() || !/^\S+@\S+\.\S+$/.test(email))) {
      setError('Please enter your name and a valid email address.');
      return;
    }
    setStep((s) => Math.min(s + 1, 3));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // Connect to the owner's Booking Engine / PMS here once the link is provided.
    setSent(true);
  };

  const inputClass =
    'min-h-[48px] w-full rounded-lg border border-input bg-background px-4 text-base text-foreground focus:outline-none focus:ring-2 focus:ring-ring';

  if (sent) {
    return (
      <section className="pb-20 pt-6">
        <div className="mx-auto max-w-2xl px-4 md:px-8">
          <div className="rounded-3xl border border-border bg-card p-8 text-center shadow-xl md:p-12">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success text-success-foreground">
              <Icon name="CheckIcon" size={30} />
            </span>
            <h2 className="font-display mt-6 text-3xl text-foreground">Request received, {name.split(' ')[0]}.</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We will email {email} within 24 hours to confirm availability for {room.name}, {nights}{' '}
              {nights === 1 ? 'night' : 'nights'}, and share payment instructions. Nothing is charged
              until you confirm.
            </p>
            <Link
              href="/"
              className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pb-16 pt-6 md:pb-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 md:px-8 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
        <form onSubmit={submit} className="rounded-3xl border border-border bg-card p-6 shadow-lg md:p-9">
          <ol className="mb-8 flex flex-wrap gap-2" aria-label="Booking steps">
            {steps.map((s, i) => (
              <li
                key={s}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-[14px] font-semibold ${
                  i === step
                    ? 'bg-primary text-primary-foreground'
                    : i < step
                    ? 'bg-secondary text-foreground'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                <span>{i + 1}</span>
                <span>{s}</span>
              </li>
            ))}
          </ol>

          {step === 0 && (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2" style={{ animation: 'fadeSlide 0.5s both' }}>
              <label className="flex flex-col gap-2">
                <span className="text-[15px] font-semibold text-foreground">Arrival</span>
                <input type="date" min={minDate} value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className={inputClass} />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[15px] font-semibold text-foreground">Departure</span>
                <input type="date" min={checkIn || minDate} value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className={inputClass} />
              </label>
              <label className="flex flex-col gap-2 sm:col-span-2">
                <span className="text-[15px] font-semibold text-foreground">Guests</span>
                <select value={guests} onChange={(e) => setGuests(Number(e.target.value))} className={inputClass}>
                  {[1, 2, 3, 4].map((n) => (
                    <option key={n} value={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>
                  ))}
                </select>
              </label>
            </div>
          )}

          {step === 1 && (
            <div className="flex flex-col gap-3" style={{ animation: 'fadeSlide 0.5s both' }}>
              {eligibleRooms.map((r) => (
                <label
                  key={r.id}
                  className={`flex cursor-pointer items-center justify-between gap-4 rounded-xl border p-4 transition-colors ${
                    roomId === r.id ? 'border-primary bg-primary/10' : 'border-border bg-background hover:bg-secondary'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="room"
                      checked={roomId === r.id}
                      onChange={() => setRoomId(r.id)}
                      className="h-5 w-5 accent-primary"
                    />
                    <span>
                      <span className="block font-display text-lg text-foreground">{r.name}</span>
                      <span className="block text-[14px] text-muted-foreground">Up to {r.guests} guests · {r.size}</span>
                    </span>
                  </span>
                  <span className="text-right text-[15px] font-semibold text-foreground">{formatMad(r.priceMad)}</span>
                </label>
              ))}
            </div>
          )}

          {step === 2 && (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2" style={{ animation: 'fadeSlide 0.5s both' }}>
              <label className="flex flex-col gap-2">
                <span className="text-[15px] font-semibold text-foreground">Full name</span>
                <input value={name} onChange={(e) => setName(e.target.value)} className={inputClass} placeholder="Sofia Martinez" />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[15px] font-semibold text-foreground">Email</span>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} placeholder="sofia@example.com" />
              </label>
              <label className="flex flex-col gap-2 sm:col-span-2">
                <span className="text-[15px] font-semibold text-foreground">Phone (optional)</span>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} className={inputClass} placeholder="+34 612 345 678" />
              </label>
              <label className="flex flex-col gap-2 sm:col-span-2">
                <span className="text-[15px] font-semibold text-foreground">Arrival time, allergies, requests</span>
                <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={4} className={`${inputClass} py-3`} />
              </label>
            </div>
          )}

          {step === 3 && (
            <div className="flex flex-col gap-4" style={{ animation: 'fadeSlide 0.5s both' }}>
              <h2 className="font-display text-2xl text-foreground">Review your request</h2>
              <dl className="grid grid-cols-1 gap-3 rounded-xl border border-border bg-background p-5 text-[15px] sm:grid-cols-2">
                <div><dt className="text-muted-foreground">Dates</dt><dd className="font-semibold text-foreground">{checkIn} to {checkOut}</dd></div>
                <div><dt className="text-muted-foreground">Room</dt><dd className="font-semibold text-foreground">{room.name}</dd></div>
                <div><dt className="text-muted-foreground">Guests</dt><dd className="font-semibold text-foreground">{guests}</dd></div>
                <div><dt className="text-muted-foreground">Contact</dt><dd className="font-semibold text-foreground">{name}, {email}{phone ? `, ${phone}` : ''}</dd></div>
              </dl>
              <PendingNote>
                Online payment and the Booking Engine link are pending from the owner. This sends a
                request; our hosts confirm by email.
              </PendingNote>
            </div>
          )}

          {error && (
            <p role="alert" className="mt-5 rounded-lg bg-destructive px-4 py-3 text-[14px] font-semibold text-destructive-foreground">
              {error}
            </p>
          )}

          <div className="mt-8 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className="min-h-[48px] rounded-full border border-border px-6 text-[15px] font-semibold text-foreground disabled:opacity-40"
            >
              Back
            </button>
            {step < 3 ? (
              <button
                type="button"
                onClick={next}
                className="flex min-h-[48px] items-center gap-2 rounded-full bg-primary px-7 text-[15px] font-semibold text-primary-foreground"
              >
                Continue
                <Icon name="ArrowRightIcon" size={18} />
              </button>
            ) : (
              <button
                type="submit"
                className="flex min-h-[48px] items-center gap-2 rounded-full bg-primary px-7 text-[15px] font-semibold text-primary-foreground"
              >
                Send booking request
                <Icon name="PaperAirplaneIcon" size={18} />
              </button>
            )}
          </div>
        </form>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-3xl bg-accent p-7 text-accent-foreground shadow-xl md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-saffron">Your estimate</p>
            <h3 className="font-display mt-3 text-2xl">{room.name}</h3>
            <dl className="mt-6 flex flex-col gap-3 text-[15px]">
              <div className="flex justify-between"><dt>Nightly rate</dt><dd className="font-semibold">{formatMad(room.priceMad)}</dd></div>
              <div className="flex justify-between"><dt>Nights</dt><dd className="font-semibold">{nights || '—'}</dd></div>
              <div className="flex justify-between border-t border-accent-foreground/30 pt-3 text-lg">
                <dt>Total</dt>
                <dd className="font-semibold">{nights ? formatMad(total) : '—'}</dd>
              </div>
              {nights > 0 && (
                <p className="text-[14px] text-accent-foreground/80">About {toEur(total)} EUR · breakfast included · taxes to be confirmed</p>
              )}
            </dl>
          </div>
        </aside>
      </div>
    </section>
  );
}