import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RatesHero from './components/RatesHero';
import RatesTable from './components/RatesTable';
import PoliciesAccordion from './components/PoliciesAccordion';

export const metadata: Metadata = {
  title: 'Rates & Policies — Dar Kenza',
  description:
    'Seasonal rates in MAD, booking conditions, cancellation terms and check-in details for Dar Kenza.',
  alternates: { canonical: '/rates-policies' },
};

export default function RatesPoliciesPage() {
  return (
    <main className="bg-background">
      <Header />
      <RatesHero />
      <RatesTable />
      <PoliciesAccordion />
      <Footer />
    </main>
  );
}