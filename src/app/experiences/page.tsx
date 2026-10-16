import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ExperiencesHero from './components/ExperiencesHero';
import ExperienceTiles from './components/ExperienceTiles';
import DayInTheHouse from './components/DayInTheHouse';

export const metadata: Metadata = {
  title: 'Experiences & Services — Dar Kenza',
  description:
    'Meals, hammam, guided walks and transfers at Dar Kenza. See how a day in the house unfolds.',
  alternates: { canonical: '/experiences' },
};

export default function ExperiencesPage() {
  return (
    <main className="bg-background">
      <Header />
      <ExperiencesHero />
      <ExperienceTiles />
      <DayInTheHouse />
      <Footer />
    </main>
  );
}