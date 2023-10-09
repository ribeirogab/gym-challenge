import { Container } from '@/components/Container';

export default async function History() {
  return (
    <Container className="flex min-h-screen flex-col gap-4">
      <h1>Histórico</h1>

      <p>Em desenvolvimento...</p>

      {/* <div className="mx-[-1rem] overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Frase</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {history.map(({ phrase, expires }, index) => {
              const date = new Date(expires);
              date.setDate(date.getDate() - 1);

              return (
                <tr key={expires}>
                  <th>{index + 1}</th>
                  <td>{phrase}</td>
                  <td>{date.toLocaleDateString('pt-BR')}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div> */}
    </Container>
  );
}
