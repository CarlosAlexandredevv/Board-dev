import Link from 'next/link';
import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

function CardRoot({ className, ...props }: ComponentProps<'a'>) {
  return (
    <Link
      href="/"
      className={twMerge(
        'bg-navy-700 border-[0.5px] border-navy-600 p-3 space-y-4 rounded-lg block',
        'hover:bg-navy-600/50 hover:border-navy-500 transition-colors duration-150',
        'outline-none focus-visible:ring-2 focus-visible:ring-navy-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950',
        className,
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div className={twMerge('flex flex-col gap-2', className)} {...props} />
  );
}

function CardTitle({ className, ...props }: ComponentProps<'span'>) {
  return (
    <span className={twMerge('text-sm font-medium', className)} {...props} />
  );
}

function CardNumber({ className, ...props }: ComponentProps<'span'>) {
  return (
    <span className={twMerge('text-xs text-navy-200', className)} {...props} />
  );
}

function CardFooter({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div className={twMerge('flex items-center gap-2', className)} {...props} />
  );
}

export const Card = {
  Root: CardRoot,
  Header: CardHeader,
  Title: CardTitle,
  Number: CardNumber,
  Footer: CardFooter,
};
