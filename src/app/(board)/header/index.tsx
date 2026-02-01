import { SearchInput } from './search-input';
import { UserButton } from '../../../components/header/user-button';
import { Suspense } from 'react';

export function Header() {
  return (
    <header className="max-w-[900px] mx-auto w-full flex flex-col sm:flex-row gap-4 sm:gap-0 items-start sm:items-center justify-between">
      <div className="space-y-1">
        <h1 className="font-semibold text-xl">Product Roadmap</h1>
        <p className="text-sm text-navy-100">
          Follow the development progress of our entire platform.
        </p>
      </div>

      <Suspense>
        <div className="flex items-center gap-2 md:gap-4 w-full sm:w-auto">
          <SearchInput />

          <UserButton />
        </div>
      </Suspense>
    </header>
  );
}
