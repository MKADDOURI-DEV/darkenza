import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface PendingNoteProps {
  children: React.ReactNode;
  className?: string;
}

export default function PendingNote({ children, className = '' }: PendingNoteProps) {
  return (
    <div
      className={`flex items-start gap-3 rounded-lg border border-saffron/50 bg-saffron/10 p-4 text-[14px] leading-relaxed text-foreground ${className}`}
    >
      <Icon name="InformationCircleIcon" size={20} className="mt-0.5 shrink-0 text-primary" />
      <p>{children}</p>
    </div>
  );
}