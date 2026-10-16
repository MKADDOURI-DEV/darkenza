import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingHero from './components/BookingHero';
import BookingFlow from './components/BookingFlow';

export const metadata: Metadata = {
  title: 'Book Your Stay — Dar Kenza Moroccan Guesthouse',
  description:
    'Choose dates, pick a room and send a booking request at Dar Kenza. See your price estimate before you confirm.',
  alternates: { canonical: '/booking' },
};

export default function BookingPage() {
  return (
    <main className="bg-background">
      <Header />
      <BookingHero />
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <BookingFlow />
      </Suspense>
      <Footer />
    </main>
  );
}