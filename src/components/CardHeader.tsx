import React from 'react';
import StarIcon from '@/assets/icons/star.svg';
import { twMerge } from 'tailwind-merge';

interface CardHeaderProps {
  title: string;
  description: string;
  className?: string;
  icon?: React.ReactNode; // Optional custom icon
}

function CardHeader({
  title,
  description,
  className,
  icon = <StarIcon className="size-7 md:size-8 text-emerald-400" />,
}: CardHeaderProps) {
  return (
    <header className={twMerge('flex flex-col md:p-8', className)}>
      <div className="flex items-center gap-2">
        {icon}
        <h3 className="font-serif text-2xl md:text-3xl font-medium text-white">
          {title}
        </h3>
      </div>
      {description && (
        <p className="text-sm md:text-base text-white/70 mt-2 md:mt-3">
          {description}
        </p>
      )}
    </header>
  );
}

export default CardHeader;