'use client';

import { LikeButton } from '../like-button';
import { getIssueInteractions } from '@/http/get-issue-interactions';
import { useQuery } from '@tanstack/react-query';
import { Skeleton } from '../skeleton';

interface IssueLikeButtonProps {
  issueId: string;
}

export function IssueLikeButton({ issueId }: IssueLikeButtonProps) {
  const { data, isLoading } = useQuery({
    queryKey: ['issue-likes', issueId],
    queryFn: () => getIssueInteractions({ issueIds: [issueId] }),
  });

  if (isLoading) {
    return <Skeleton className="h-7 w-16" />;
  }

  const interaction = data?.interactions[0];

  return (
    <LikeButton
      issueId={issueId}
      initialLikes={interaction?.likesCount ?? 0}
      initialLiked={interaction?.isLiked ?? false}
    />
  );
}
