'use client';

import { Loader2Icon, LogInIcon } from 'lucide-react';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';

export function UserButton() {
  const { data: session, isPending } = authClient.useSession();

  async function handleSignIn() {
    await authClient.signIn.social({ provider: 'github', callbackURL: '/' });
  }

  async function handleSignOut() {
    await authClient.signOut();
  }

  return (
    <>
      {isPending ? (
        <div className="size-10 md:size-8 rounded-full bg-navy-700 border border-navy-500 flex items-center justify-center">
          <Loader2Icon className="size-4 md:size-3.5 text-navy-200 animate-spin" />
        </div>
      ) : session?.user ? (
        <button
          type="button"
          onClick={handleSignOut}
          className="size-10 md:size-8 rounded-full overflow-hidden cursor-pointer border-2 border-transparent hover:border-navy-200 transition-colors duration-150"
        >
          <Image
            width={40}
            height={40}
            src={session.user.image ?? ''}
            alt={session.user.name}
            className="size-10 md:size-8 rounded-full"
          />
        </button>
      ) : (
        <button
          type="button"
          onClick={handleSignIn}
          className="size-10 md:size-8 rounded-full bg-navy-700 border border-navy-500 flex items-center justify-center hover:bg-navy-600 transition-colors duration-150 cursor-pointer"
        >
          <LogInIcon className="size-4 md:size-3.5 text-navy-200" />
        </button>
      )}
    </>
  );
}
