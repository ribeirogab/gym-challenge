'use client';

import { ReactNode, useState } from 'react';

import { Toast } from './Toast';
import { poppins } from '@/assets/fonts/poppins';

type CopyButtonProps = {
  children: ReactNode;
  className?: string;
  text: string;
};

export const CopyButton = ({
  className = '',
  children,
  text,
}: CopyButtonProps) => {
  const [toastIsVisible, setToastIsVisible] = useState(false);

  const copyToClipboard = async () => {
    navigator.clipboard.writeText(text);

    setToastIsVisible(true);

    await new Promise((resolve) =>
      setTimeout(
        () => {
          setToastIsVisible(false);
          resolve(true);
        },
        4000, // 4 seconds
      ),
    );
  };

  return (
    <>
      {toastIsVisible && (
        <Toast type="success">Texto copiado com sucesso!</Toast>
      )}

      <button
        className={`${className} btn-outline btn my-0 mx-auto w-full max-w-6xl border-2 text-lg font-bold text-gray-900 ${poppins.className}`}
        onClick={copyToClipboard}
      >
        {children}
      </button>
    </>
  );
};
