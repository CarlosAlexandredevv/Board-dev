'use client';

import { Input } from '@/components/input';
import { Loader2Icon, LogInIcon, SearchIcon } from 'lucide-react';
import { useQueryState, parseAsString, debounce } from 'nuqs';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';

export function Header() {
  const { data: session, isPending } = authClient.useSession();
  const [search, setSearch] = useQueryState('q', parseAsString.withDefault(''));

  function handleSearchUpdate(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value, {
      limitUrlUpdates:
        event.target.value.length !== 0 ? debounce(500) : undefined,
    });
  }

  async function handleSignIn() {
    await authClient.signIn.social({ provider: 'github', callbackURL: '/' });
  }

  async function handleSignOut() {
    await authClient.signOut();
  }

  return (
    <header className="max-w-[900px] mx-auto w-full flex flex-col md:flex-row  gap-4 items-start md:justify-between md:items-center justify-start">
      <div className="space-y-1">
        <h1 className="font-semibold text-xl">Product Roadmap</h1>
        <p className="text-md text-navy-100">
          Follow the development progress of our entire platform.
        </p>
      </div>

      <div className="flex items-center w-full md:w-auto gap-2">
        <div className="relative w-full md:w-auto">
          <SearchIcon className="absolute size-4 text-navy-200 left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />

          <Input
            type="text"
            placeholder="Search for features..."
            className="w-full md:w-[270px] pl-8"
            value={search}
            onChange={handleSearchUpdate}
          />
        </div>
        {isPending ? (
          <div className="size-8 rounded-full bg-navy-700 border border-navy-500 flex items-center justify-center">
            <Loader2Icon className="size-3.5 text-navy-200 animate-spin" />
          </div>
        ) : session?.user ? (
          <button
            type="button"
            onClick={handleSignOut}
            className="size-8 rounded-full overflow-hidden cursor-pointer border-2 border-transparent hover:border-navy-200 transition-colors duration-150"
          >
            <Image
              width={32}
              height={32}
              src={session.user.image ?? ''}
              alt={session.user.name}
              className="size-8 rounded-full"
            />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSignIn}
            className="size-8 rounded-full bg-navy-700 border border-navy-500 flex items-center justify-center hover:bg-navy-600 transition-colors duration-150 cursor-pointer"
          >
            <LogInIcon className="size-3.5 text-navy-200" />
          </button>
        )}
      </div>
    </header>
  );
}
