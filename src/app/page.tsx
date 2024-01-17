import Image from 'next/image';

import nub from '@/assets/images/nub.png';
import { Container } from '@/components/Container';
import { CopyButton } from '@/components/CopyButton';
import { getLatestPhrase } from '@/services/phrase-api/functions';

export default async function Home() {
  const { phrase } = await getLatestPhrase();

  return (
    <Container
      className="relative flex h-screen max-h-screen flex-col justify-center overflow-visible"
      Wrapper={({ children }) => (
        <div className="relative overflow-hidden">{children}</div>
      )}
    >
      <p className="mt-[-12rem] text-center text-2xl font-bold lowercase">
        {phrase?.text}
      </p>

      <div className="custom-image-animation mt-[4rem]">
        <Image alt="nub" src={nub} width={150} height={150} />
      </div>

      <div className="fixed bottom-0 left-0 flex w-full p-8">
        <CopyButton text={phrase?.text}>copy</CopyButton>
      </div>
    </Container>
  );
}

// lindo
