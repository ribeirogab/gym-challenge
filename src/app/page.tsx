import { Container } from '@/components/Container';
import { CopyButton } from '@/components/CopyButton';
import { getPhrase } from '@/services/phrase-api/functions/getPhrase';

export default async function Home() {
  const { phrase } = await getPhrase();

  return (
    <Container
      className="relative flex h-screen max-h-screen flex-col justify-center overflow-visible"
      Wrapper={({ children }) => (
        <div className="relative overflow-hidden">{children}</div>
      )}
    >
      <p className="mt-[-12rem] text-center text-2xl font-bold lowercase">
        {phrase}
      </p>

      <div className="fixed bottom-0 left-0 flex w-full p-8">
        <CopyButton text={phrase}>copy</CopyButton>
      </div>
    </Container>
  );
}

// lindo
