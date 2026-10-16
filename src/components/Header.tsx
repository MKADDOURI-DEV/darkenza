'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Rooms', href: '/rooms' },
  { label: 'Experiences', href: '/experiences' },
  { label: 'Rates & Policies', href: '/rates-policies' },
  { label: 'Contact', href: '/contact' },
];

interface HeaderProps {
  overHero?: boolean;
}

export default function Header({ overHero = false }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      if (open) setOpen(false);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const transparent = overHero && !scrolled && !open;

  return (
    <header
      className={`${overHero ? 'absolute' : 'sticky'} top-0 left-0 z-50 w-full transition-colors duration-300 ${
        transparent ? 'bg-transparent' : 'bg-background/90 backdrop-blur-md border-b border-border'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="Dar Kenza home">
          <AppLogo size={40} />
          <span
            className={`font-display text-xl tracking-tight ${
              transparent ? 'text-background' : 'text-foreground'
            }`}
          >
            Dar Kenza
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-semibold transition-colors ${
                transparent
                  ? 'text-background/90 hover:text-background' :'text-muted-foreground hover:text-foreground'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/booking"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Book a stay
          </Link>
        </nav>

        <button
          type="button"
          className={`flex h-11 w-11 items-center justify-center rounded-full md:hidden ${
            transparent ? 'text-background' : 'text-foreground'
          }`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <Icon name={open ? 'XMarkIcon' : 'Bars3Icon'} size={26} />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 top-[64px] z-40 bg-background/95 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-2 px-6 pt-8" aria-label="Mobile">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 font-display text-2xl text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/booking"
              onClick={() => setOpen(false)}
              className="mt-6 rounded-full bg-primary px-6 py-4 text-center text-base font-semibold text-primary-foreground"
            >
              Book a stay
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}