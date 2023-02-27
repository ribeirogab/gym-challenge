import Link from 'next/link';

import { PathsEnum } from '@/constants';

type HeaderProps = {
  className?: string;
};

export const Header = ({ className = '' }: HeaderProps) => {
  return (
    <header
      className={`${className} mx-auto my-0 flex h-24 w-full items-center justify-center`}
    >
      <nav className="flex items-center justify-center gap-8">
        <Link href={PathsEnum.Home} className="text-lg">
          Frase
        </Link>
        <span>|</span>
        <Link href={PathsEnum.Rules} className="text-lg">
          Regras
        </Link>
      </nav>
    </header>
  );
};
