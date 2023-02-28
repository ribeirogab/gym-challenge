import { publicUrl } from '@/constants';
import { Phrase } from '@/interfaces';

type GetPhraseResponse = {
  phrase: string;
  history: Phrase[];
};

export const getPhrase = async (): Promise<GetPhraseResponse> => {
  const response = await fetch(`${publicUrl}/api/phrases`, {
    method: 'GET',
    cache: 'no-cache',
    next: {
      // revalidate: 60 * 60, // 1 hour (60 minutes)
    },
  });

  const { phrase, history = [] } = await response.json();

  return { phrase, history };
};
