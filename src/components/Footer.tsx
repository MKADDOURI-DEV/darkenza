import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const links = [
  { label: 'Rooms', href: '/rooms' },
  { label: 'Experiences', href: '/experiences' },
  { label: 'Rates & Policies', href: '/rates-policies' },
  { label: 'Contact', href: '/contact' },
  { label: 'Book', href: '/booking' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-12 md:flex-row md:items-center md:justify-between md:px-8 md:py-16">
        <div className="flex items-center gap-2">
          <AppLogo size={36} />
          <span className="font-display text-lg tracking-tight text-foreground">Dar Kenza</span>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-2" aria-label="Footer">
          {links?.map((l) => (
            <Link
              key={l?.href}
              href={l?.href}
              className="inline-flex min-h-[44px] items-center text-[15px] font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              {l?.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-1 text-[14px] text-muted-foreground md:items-end">
          <span>© 2026 Dar Kenza</span>
          <span className="flex gap-4">
            <Link href="/rates-policies" className="hover:text-foreground">Privacy</Link>
            <Link href="/rates-policies" className="hover:text-foreground">Terms</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}