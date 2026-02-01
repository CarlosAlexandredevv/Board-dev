import { Header } from './header';

export default function BoardLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <div className="max-w-[1620px] w-full mx-auto p-6 sm:p-10 flex flex-col gap-8 h-dvh">
      <Header />

      {children}
      {modal}
    </div>
  );
}
