import { ReactNode } from 'react';

type ToastProps = {
  type?: 'success' | 'info' | 'error';
  children: ReactNode;
  containerClassName?: string;
};

export const Toast = ({
  containerClassName,
  type = 'success',
  children,
}: ToastProps) => {
  const types = {
    success: 'alert-success',
    error: 'alert-error',
    info: 'alert-info',
  };

  return (
    <div
      className={`
        ${containerClassName}
        custom-alert-animation
        absolute
        bottom-32
        right-8
        w-[17rem]
        transition-all
        duration-200
      `}
    >
      <div className={`${types[type]} alert w-full text-center`}>
        {children}
      </div>
    </div>
  );
};
