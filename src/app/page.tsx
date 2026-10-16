import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import RoomsPreviewSection from './components/RoomsPreviewSection';
import ExperiencesPreviewSection from './components/ExperiencesPreviewSection';
import RatesCtaSection from './components/RatesCtaSection';

export const metadata: Metadata = {
  title: 'Dar Kenza — Moroccan Guesthouse, Book Direct',
  description:
    'Stay at Dar Kenza, a Moroccan guesthouse with handmade rooms, home-cooked meals and clear direct-booking terms.',
  alternates: { canonical: '/' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'Dar Kenza',
      url: 'https://darkenza.example',
    },
    {
      '@type': 'LodgingBusiness',
      name: 'Dar Kenza',
      description: 'Moroccan guesthouse with handmade rooms and home-cooked meals.',
      address: { '@type': 'PostalAddress', addressCountry: 'MA' },
    },
    {
      '@type': 'WebPage',
      name: 'Dar Kenza — Moroccan Guesthouse',
    },
  ],
};

export default function HomePage() {
  return (
    <main className="bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header overHero />
      <HeroSection />
      <StorySection />
      <RoomsPreviewSection />
      <ExperiencesPreviewSection />
      <RatesCtaSection />
      <Footer />
    </main>
  );
}