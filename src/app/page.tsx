import { Container } from '@/components/Container';
import { CopyButton } from '@/components/CopyButton';

export default async function Home() {
  const response = await fetch('http://localhost:3000/api/phrases', {
    method: 'GET',
    next: {
      revalidate: 10,
    },
  });
  const { phrase } = await response.json();

  return (
    <Container className="flex h-[100vh] flex-col justify-between">
      <div />

      <p className="mt-[-4rem] text-center text-2xl font-bold uppercase">
        {phrase}
      </p>

      <CopyButton text={phrase}>Copy</CopyButton>
    </Container>
  );
}
