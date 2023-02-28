import Link from 'next/link';

import { PathsEnum } from '@/constants';

type HeaderProps = {
  className?: string;
};

export const Header = ({ className = '' }: HeaderProps) => {
  return (
    <header
      className={`${className} z-10 mx-auto my-0 flex h-24 w-full items-center justify-center overflow-auto`}
    >
      <nav className="flex items-center justify-center gap-8 ">
        <Link href={PathsEnum.Home} className="text-lg">
          frase
        </Link>

        <Link href={PathsEnum.Rules} className="text-lg">
          regras
        </Link>

        <Link href={PathsEnum.History} className="text-lg">
          histórico
        </Link>
      </nav>
    </header>
  );
};
