import { Container } from '@/components/Container';
import { CopyButton } from '@/components/CopyButton';
// import { publicUrl } from '@/constants';

export default async function Home() {
  // const response = await fetch(`${publicUrl}/api/phrases`, {
  //   method: 'GET',
  //   next: {
  //     revalidate: 10,
  //   },
  // });
  // const { phrase } = await response.json();

  const phrase = 'first test';

  return (
    <Container className="relative flex h-[100vh] flex-col justify-between overflow-hidden">
      <div />

      <p className="mt-[-4rem] text-center text-2xl font-bold uppercase">
        {phrase}
      </p>

      <CopyButton text={phrase}>Copy</CopyButton>
    </Container>
  );
}
