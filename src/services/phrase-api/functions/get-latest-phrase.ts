import { apiUrl } from '@/constants';
import { Phrase } from '@/interfaces';

type GetLatestPhraseResponse = {
  phrase: Phrase;
};

export const getLatestPhrase = async (): Promise<GetLatestPhraseResponse> => {
  const response = await fetch(`${apiUrl}/phrases/latest`, {
    method: 'GET',
    cache: 'no-cache',
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  });

  const { phrase } = await response.json();

  return { phrase };
};
