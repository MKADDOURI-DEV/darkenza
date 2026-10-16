import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import RevealOnScroll from '@/components/RevealOnScroll';

/*
BENTO AUDIT
Array has 5 cards: Meals, Walks, Hammam, Transfers, Rooftop
lg (6 cols, 2 rows):
  Row 1: [1..3 Meals cs-3 rs-2] [4..6 Walks cs-3]
  Row 2: [1..3 Meals row-span]  [4..5 Hammam cs-2] [6 Transfers cs-1]
Rooftop would be a 5th → revised:
  Row 1: [1..4 Meals cs-4] [5..6 Hammam cs-2 rs-2]
  Row 2: [1..2 Walks cs-2] [3..4 Transfers cs-2] [5..6 Hammam row-span]
  Row 3: [1..6 Rooftop cs-6]
Placed 5/5 ✓ (no empty cells)
md (2 cols):
  Row 1: [Meals cs-2]
  Row 2: [Hammam] [Walks]
  Row 3: [Transfers] [Rooftop]  Placed 5/5 ✓
*/

interface Tile {
  id: string;
  title: string;
  text: string;
  icon: string;
  image: string;
  alt: string;
  span: string;
}

const tiles: Tile[] = [
{
  id: 'meals',
  title: 'Home-cooked meals',
  text: 'Breakfast every morning, dinner on request. Vegetarian and allergy-aware menus.',
  icon: 'FireIcon',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_156f113fe-1772079177114.png",
  alt: 'Moroccan tagine with vegetables served with fresh bread',
  span: 'md:col-span-2 lg:col-span-4 min-h-[340px]'
},
{
  id: 'hammam',
  title: 'Hammam and massage',
  text: 'Traditional steam and black soap scrub, booked in advance.',
  icon: 'SparklesIcon',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_183e9dc94-1772144485545.png",
  alt: 'Softly lit spa interior with lanterns and warm tones',
  span: 'lg:col-span-2 lg:row-span-2 min-h-[340px]'
},
{
  id: 'walks',
  title: 'Guided walks',
  text: 'Half and full-day routes in the foothills with a local guide.',
  icon: 'MapIcon',
  image: "https://images.unsplash.com/photo-1653966675766-80f9459ee2e3",
  alt: 'Dry valley hiking path with distant mountains',
  span: 'lg:col-span-2 min-h-[260px]'
},
{
  id: 'transfers',
  title: 'Airport and city transfers',
  text: 'Private pick-up arranged for your arrival time.',
  icon: 'TruckIcon',
  image: "https://images.unsplash.com/photo-1630343681744-563714437148",
  alt: 'Warmly lit hallway with traditional arches',
  span: 'lg:col-span-2 min-h-[260px]'
},
{
  id: 'rooftop',
  title: 'Rooftop terrace',
  text: 'Open to all guests from morning to late evening, with tea and blankets at dusk.',
  icon: 'SunIcon',
  image: "https://images.unsplash.com/photo-1597218544531-3c10f1d25898",
  alt: 'Rooftop terrace at sunset with seating and lanterns',
  span: 'md:col-span-2 lg:col-span-6 min-h-[280px]'
}];


export default function ExperienceTiles() {
  return (
    <section className="pb-16 pt-2 md:pb-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
          {tiles.map((t, i) =>
          // GRID CARD: {t.title}
          <RevealOnScroll key={t.id} delayMs={i * 80} className={t.span}>
              <article className="group relative flex h-full min-h-[inherit] overflow-hidden rounded-2xl border border-border bg-foreground">
                <AppImage
                src={t.image}
                alt={t.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/45 to-foreground/10" />
                <div className="relative mt-auto flex flex-col gap-2 p-6 text-background">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-background/20 backdrop-blur-sm">
                    <Icon name={t.icon as 'FireIcon'} size={20} />
                  </span>
                  <h3 className="font-display text-2xl">{t.title}</h3>
                  <p className="max-w-md text-[15px] leading-relaxed text-background/90">{t.text}</p>
                </div>
              </article>
            </RevealOnScroll>
          )}
        </div>
      </div>
    </section>);

}