import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export function Skeleton({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={twMerge('bg-navy-700 rounded-lg animate-pulse', className)}
      {...props}
    />
  );
}
