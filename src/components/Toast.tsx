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
  const toastTypeClass = `alert-${type}`;

  return (
    <div
      className={`
        ${containerClassName}
        custom-alert-show
        absolute
        bottom-32
        right-8
        w-[17rem]
        transition-all
        duration-200
      `}
    >
      <div className={`alert ${toastTypeClass} w-full text-center`}>
        {children}
      </div>
    </div>
  );
};
