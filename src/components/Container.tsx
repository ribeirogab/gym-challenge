import { Fragment, ReactElement, ReactNode } from 'react';

type ContainerProps = {
  Wrapper?: (props: { children: ReactNode }) => ReactElement;
  children: ReactNode;
  className?: string;
};

export const Container = ({
  Wrapper = ({ children }) => <Fragment>{children}</Fragment>,
  className = '',
  children,
}: ContainerProps) => {
  return (
    <Wrapper>
      <main className={`${className} my-0 mx-auto max-w-6xl p-8 pt-[6rem]`}>
        {children}
      </main>
    </Wrapper>
  );
};
