import { Container } from '@/components/Container';

export default function Rules() {
  return (
    <Container className="flex min-h-screen flex-col gap-4">
      <h1>Regras</h1>

      <p>
        Exercitar-se 4 dias na semana por 6 meses, sendo que ao menos 2 dias
        precisam ser na academia.
      </p>

      <p>
        Para comprovar e valer o dia, é necessário mandar uma foto no grupo com
        a palavra do dia escrita em um papel ou um vídeo falando a palavra,
        estando dentro da academia (com algum equipamento visível), e com alguma
        região do corpo que comprove ser a pessoa, exemplo, rosto, tatuagens
        e/ou afins. Para os dias do esporte a mesma regra é valida, com a
        foto/vídeo do esporte sendo praticado, a palavra do dia e a comprovação
        de ser a pessoa.
      </p>

      <p>
        Os exercícios fora da academia, precisam ser para o corpo, esportes
        mentais como xadrez, video-game ou afins, não valerão para a aposta.
      </p>

      <p>
        Para cada feriado na semana, um dia de exercício será eliminado,
        exemplo: Na semana de 7 de abril vamos precisar nos exercitar 3 dias.
      </p>

      <p>A semana inicia-se no domingo e encerra-se no sábado. </p>

      <p>
        Poderão ser adicionadas novas regras ao decorrer da aposta caso
        percebamos algum furo, mas para ser adicionada vamos utilizar da
        democracia, a maioria vence.
      </p>

      <hr />

      <h2>Pagamento</h2>

      <p>O pagamento será feito no final da aposta. </p>

      <hr />

      <h2>Data</h2>
      <p>Inicio da aposta: 27/02/2023</p>
      <p>Fim da aposta: 27/08/2023 </p>
    </Container>
  );
}
