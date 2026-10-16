'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import PendingNote from '@/components/PendingNote';

const details = [
  { icon: 'MapPinIcon', label: 'Address', value: 'Douar Aït Aamer (or Douar Id Aomar), Morocco', note: 'Exact address pending owner confirmation' },
  { icon: 'PhoneIcon', label: 'Phone', value: '+212 6 00 00 00 00', note: 'Official number pending' },
  { icon: 'EnvelopeIcon', label: 'Email', value: 'hello@darkenza.example', note: 'Official email pending' },
  { icon: 'ClockIcon', label: 'Reception', value: 'Daily, 08:00 to 21:00', note: 'Hours to be confirmed' },
];

export default function ContactDetails() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !/^\S+@\S+\.\S+$/.test(email) || message.trim().length < 5) {
      setError('Please add your name, a valid email and a short message.');
      return;
    }
    setError('');
    // Connect this form to the owner's email service or PMS inbox here.
    setSent(true);
  };

  const inputClass =
    'min-h-[48px] w-full rounded-lg border border-input bg-background px-4 text-base text-foreground focus:outline-none focus:ring-2 focus:ring-ring';

  return (
    <section className="pb-16 pt-4 md:pb-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 md:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
        <div className="flex flex-col gap-6">
          <ul className="flex flex-col gap-3">
            {details.map((d) => (
              <li key={d.label} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                  <Icon name={d.icon as 'MapPinIcon'} size={22} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{d.label}</p>
                  <p className="mt-1 text-[16px] font-semibold text-foreground">{d.value}</p>
                  <p className="mt-1 text-[13px] text-muted-foreground">{d.note}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden rounded-2xl border border-border bg-secondary">
            <div className="zellige absolute inset-0 opacity-80" />
            <div className="relative flex flex-col items-center gap-3 px-6 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Icon name="MapPinIcon" size={28} />
              </span>
              <p className="font-display text-xl text-foreground">Map location pending</p>
              <p className="max-w-xs text-[14px] text-muted-foreground">
                The Google Maps link and exact coordinates will appear here once the owner provides them.
              </p>
            </div>
          </div>

          <PendingNote>
            Arrival directions and transfer options will be added with the exact location.
          </PendingNote>
        </div>

        <div className="flex">
          {sent ? (
            <div className="flex w-full flex-col items-center justify-center rounded-3xl border border-border bg-card p-8 text-center shadow-lg md:p-12">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-success text-success-foreground">
                <Icon name="CheckIcon" size={30} />
              </span>
              <h2 className="font-display mt-6 text-3xl text-foreground">Thank you, {name.split(' ')[0]}.</h2>
              <p className="mt-3 max-w-sm text-base leading-relaxed text-muted-foreground">
                Your message is with our hosts. Expect a reply at {email} within one working day.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} className="flex w-full flex-col gap-5 rounded-3xl border border-border bg-card p-6 shadow-lg md:p-9">
              <h2 className="font-display text-3xl text-foreground">Send a message</h2>
              <label className="flex flex-col gap-2">
                <span className="text-[15px] font-semibold text-foreground">Name</span>
                <input value={name} onChange={(e) => setName(e.target.value)} className={inputClass} placeholder="Daniel Weber" />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[15px] font-semibold text-foreground">Email</span>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} placeholder="daniel@example.com" />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[15px] font-semibold text-foreground">Message</span>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={6} className={`${inputClass} py-3`} placeholder="Tell us about your dates, group size or questions." />
              </label>
              {error && (
                <p role="alert" className="rounded-lg bg-destructive px-4 py-3 text-[14px] font-semibold text-destructive-foreground">
                  {error}
                </p>
              )}
              <button
                type="submit"
                className="flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                Send message
                <Icon name="PaperAirplaneIcon" size={18} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}