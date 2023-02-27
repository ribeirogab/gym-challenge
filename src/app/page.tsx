import { Container } from '@/components/Container';
import { CopyButton } from '@/components/CopyButton';
import { publicUrl } from '@/constants';

export default async function Home() {
  const response = await fetch(`${publicUrl}/api/phrases`, {
    method: 'GET',
    next: {
      revalidate: 10,
    },
  });
  const { phrase } = await response.json();

  return (
    <Container
      className="flex h-[100vh] max-h-[100vh] flex-col justify-between overflow-visible"
      Wrapper={({ children }) => (
        <div className="relative overflow-hidden">{children}</div>
      )}
    >
      <div />

      <p className="mt-[-4rem] text-center text-2xl font-bold uppercase">
        {phrase}
      </p>

      <CopyButton text={phrase}>Copy</CopyButton>
    </Container>
  );
}
