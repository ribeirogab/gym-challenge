import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export const Container = ({ children, className = '' }: ContainerProps) => {
  return (
    <main className={`${className} my-0 mx-auto max-w-6xl p-8 pt-[6rem]`}>
      {children}
    </main>
  );
};
