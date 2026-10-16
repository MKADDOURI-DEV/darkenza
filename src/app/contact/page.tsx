import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from './components/ContactHero';
import ContactDetails from './components/ContactDetails';

export const metadata: Metadata = {
  title: 'Contact & Location — Dar Kenza',
  description:
    'Reach Dar Kenza by email, phone or message form, and find directions to the guesthouse.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <main className="bg-background">
      <Header />
      <ContactHero />
      <ContactDetails />
      <Footer />
    </main>
  );
}