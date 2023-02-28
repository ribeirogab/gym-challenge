import { Container } from '@/components/Container';
// import { CopyButton } from '@/components/CopyButton';
// import { publicUrl } from '@/constants';

export default async function Home() {
  // const response = await fetch(`${publicUrl}/api/phrases`, {
  //   method: 'GET',
  //   next: {
  //     revalidate: 10,
  //   },
  // });
  // const { phrase } = await response.json();

  return (
    <Container
      className="relative flex h-screen max-h-screen flex-col justify-center overflow-visible"
      Wrapper={({ children }) => (
        <div className="relative overflow-hidden">{children}</div>
      )}
    >
      {/* <p className="mt-[-4rem] text-center text-2xl font-bold uppercase">
        {phrase}
      </p>

      <div className="fixed bottom-0 left-0 flex w-full p-8">
        <CopyButton text={phrase}>Copy</CopyButton>
      </div> */}
    </Container>
  );
}
