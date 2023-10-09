import { Container } from '@/components/Container';

export default function Rules() {
  return (
    <Container className="flex min-h-screen flex-col gap-4">
      <h1>Regras</h1>

      <p>
        - Para participar da aposta, é necessário frequentar a academia pelo
        menos <strong>4 dias por semana</strong>.
      </p>

      <p>
        - Para validar um dia de exercício, você deve enviar uma foto no grupo
        com a palavra do dia escrita em um papel ou gravar um vídeo dizendo a
        palavra enquanto estiver na academia (com algum equipamento visível) e
        com uma parte do seu corpo visível para comprovar sua identidade, como o
        rosto, tatuagens, ou algo similar.
      </p>

      <p>
        - Durante semanas que incluam feriados, um dia de exercício será
        desconsiderado. Por exemplo, se houver um feriado em uma semana, você
        precisará se exercitar apenas 3 dias.
      </p>

      <p>- A semana da aposta começa na segunda-feira e termina no domingo.</p>

      <p>
        - Novas regras podem ser adicionadas ao longo da aposta, caso sejam
        identificados quaisquer problemas ou necessidades de ajustes.
      </p>

      <hr />

      <h2>Procedimento de Pagamento</h2>

      <p>
        Caso alguém venha a perder, o pagamento será realizado ao final da
        aposta.
      </p>

      <hr />

      <h2>Datas da Aposta</h2>
      <p>Início da aposta: 09/10/2023</p>
      <p>Término da aposta: 09/11/2023</p>
    </Container>
  );
}
