import React from 'react';
import AppImage from '@/components/ui/AppImage';
import RevealOnScroll from '@/components/RevealOnScroll';
import PendingNote from '@/components/PendingNote';
import { galleryImages } from '@/components/data';

/*
BENTO AUDIT
Array has 6 cards: g0..g5
lg (4 cols, 3 rows):
  Row 1: [1..2 g0 cs-2 rs-2] [3 g1] [4 g2]
  Row 2: [1..2 g0 row-span]  [3..4 g3 cs-2]
  Row 3: [1 g4] [2..4 g5 cs-3]
Placed 6/6 ✓ (no empty cells)
md (2 cols):
  Row 1: [1..2 g0 cs-2]
  Row 2: [1 g1] [2 g2]
  Row 3: [1..2 g3 cs-2]
  Row 4: [1 g4] [2 g5]
Placed 6/6 ✓
*/

const spans = [
  'md:col-span-2 lg:col-span-2 lg:row-span-2 min-h-[320px]',
  'min-h-[200px]',
  'min-h-[200px]',
  'md:col-span-2 lg:col-span-2 min-h-[220px]',
  'min-h-[220px]',
  'lg:col-span-3 min-h-[220px]',
];

export default function PhotoGallery() {
  return (
    <section className="bg-secondary/60 pb-16 pt-12 md:pb-20 md:pt-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <RevealOnScroll className="mb-10 max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Gallery</p>
          <h2 className="font-display text-display-lg mt-3 text-foreground">The house in pictures.</h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
          {galleryImages?.map((img, i) => (
            // GRID CARD: gallery image {i}
            <RevealOnScroll key={img?.src} delayMs={i * 70} className={spans?.[i]}>
              <div className="relative h-full min-h-[inherit] overflow-hidden rounded-2xl border border-border">
                <AppImage
                  src={img?.src}
                  alt={img?.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <PendingNote className="mt-8">
          Official photographs from the owner are pending. Images shown are illustrative.
        </PendingNote>
      </div>
    </section>
  );
}