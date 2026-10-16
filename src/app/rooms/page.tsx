import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RoomsHero from './components/RoomsHero';
import RoomCatalogue from './components/RoomCatalogue';
import PhotoGallery from './components/PhotoGallery';

export const metadata: Metadata = {
  title: 'Rooms — Dar Kenza Moroccan Guesthouse',
  description:
    'Browse the rooms at Dar Kenza: doubles, a family suite and the house suite, with photos, amenities and nightly rates in MAD.',
  alternates: { canonical: '/rooms' },
};

export default function RoomsPage() {
  return (
    <main className="bg-background">
      <Header />
      <RoomsHero />
      <RoomCatalogue />
      <PhotoGallery />
      <Footer />
    </main>
  );
}