export interface Room {
  id: string;
  name: string;
  type: 'double' | 'family' | 'suite';
  blurb: string;
  guests: number;
  size: string;
  priceMad: number;
  image: string;
  alt: string;
  amenities: string[];
}

export const rooms: Room[] = [
{
  id: 'kenza',
  name: 'Chambre Kenza',
  type: 'suite',
  blurb: 'The house suite: carved cedar ceiling, a deep window seat over the courtyard and a private tadelakt bathroom.',
  guests: 2,
  size: '32 m²',
  priceMad: 1450,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1cf78b66d-1784052318574.png",
  alt: 'Moroccan suite with carved wooden ceiling, white linens and warm terracotta walls',
  amenities: ['King bed', 'Private bathroom', 'Courtyard view', 'Air conditioning']
},
{
  id: 'atlas',
  name: 'Chambre Atlas',
  type: 'double',
  blurb: 'A calm double room with views toward the foothills and hand-woven wool rugs.',
  guests: 2,
  size: '24 m²',
  priceMad: 980,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_139cfee83-1772359362556.png",
  alt: 'Bright double bedroom with white bedding and wooden furniture in warm light',
  amenities: ['Queen bed', 'Private bathroom', 'Mountain view']
},
{
  id: 'safran',
  name: 'Chambre Safran',
  type: 'double',
  blurb: 'Saffron-toned walls, a small reading corner and a rain shower finished in local tadelakt.',
  guests: 2,
  size: '22 m²',
  priceMad: 920,
  image: "https://images.unsplash.com/photo-1721522281949-6bc303afc977",
  alt: 'Cozy bedroom with golden toned walls, lanterns and layered textiles',
  amenities: ['Queen bed', 'Rain shower', 'Reading corner']
},
{
  id: 'famille',
  name: 'Suite Familiale',
  type: 'family',
  blurb: 'Two connected sleeping areas around a shared sitting room, made for families and small groups.',
  guests: 4,
  size: '44 m²',
  priceMad: 1780,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1723a8463-1778304394696.png",
  alt: 'Spacious family suite with two beds and a seating area in neutral warm tones',
  amenities: ['1 king + 2 single beds', 'Sitting room', 'Private bathroom']
},
{
  id: 'jasmin',
  name: 'Chambre Jasmin',
  type: 'double',
  blurb: 'Garden level with a private terrace, steps from breakfast under the lemon tree.',
  guests: 2,
  size: '26 m²',
  priceMad: 1050,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_118cf1528-1772247831056.png",
  alt: 'Garden level bedroom opening to a private terrace with potted plants',
  amenities: ['Queen bed', 'Private terrace', 'Garden access']
}];


export const galleryImages = [
{ src: "https://images.unsplash.com/photo-1669657319250-f34ee98ea412", alt: 'Moroccan courtyard with arched doorways and tiled floor in morning light' },
{ src: "https://images.unsplash.com/photo-1668342081577-9c568eb1d550", alt: 'Rooftop terrace with low seating and view over rooftops at golden hour' },
{ src: "https://img.rocket.new/generatedImages/rocket_gen_img_1a0f882bf-1771504620941.png", alt: 'Moroccan tagine served with bread and mint tea on a wooden table' },
{ src: "https://img.rocket.new/generatedImages/rocket_gen_img_11ca16856-1778777379683.png", alt: 'Hand-painted zellige tile detail in blue and white pattern' },
{ src: "https://images.unsplash.com/photo-1609262724583-d39f307209ff", alt: 'Atlas mountain landscape with dry valley and clear sky' },
{ src: "https://img.rocket.new/generatedImages/rocket_gen_img_1453eda15-1774846323565.png", alt: 'Glass lanterns hanging in a warmly lit Moroccan living room' }];


export function formatMad(value: number): string {
  return `${value.toLocaleString('en-US')} MAD`;
}

export function toEur(mad: number): number {
  return Math.round(mad / 10.8);
}