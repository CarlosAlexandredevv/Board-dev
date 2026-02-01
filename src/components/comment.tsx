import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

function CommentRoot({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div className={twMerge('flex items-start gap-2', className)} {...props} />
  );
}

function CommentAvatar({ className, ...props }: ComponentProps<'img'>) {
  return (
    // biome-ignore lint/performance/noImgElement: GitHub image is already optimized
    <img
      className={twMerge('size-8 rounded-full', className)}
      alt=""
      {...props}
    />
  );
}

function CommentContent({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={twMerge(
        'flex-1 px-3 py-2.5 rounded-lg bg-navy-700 border-[0.5px] border-navy-600 flex flex-col gap-1',
        className,
      )}
      {...props}
    />
  );
}

function CommentHeader({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={twMerge('flex items-baseline gap-1', className)}
      {...props}
    />
  );
}

function CommentAuthor({ className, ...props }: ComponentProps<'span'>) {
  return (
    <span className={twMerge('text-sm font-medium', className)} {...props} />
  );
}

function CommentTime({ className, ...props }: ComponentProps<'span'>) {
  return (
    <span className={twMerge('text-xs text-navy-200', className)} {...props} />
  );
}

function CommentText({ className, ...props }: ComponentProps<'p'>) {
  return (
    <p
      className={twMerge('text-sm leading-relaxed text-navy-100', className)}
      {...props}
    />
  );
}

export const Comment = {
  Root: CommentRoot,
  Header: CommentHeader,
  Avatar: CommentAvatar,
  Content: CommentContent,
  Author: CommentAuthor,
  Time: CommentTime,
  Text: CommentText,
};
