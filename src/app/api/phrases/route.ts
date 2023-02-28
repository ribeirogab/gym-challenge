import { existsSync, promises as fs } from 'fs';
import path from 'path';

import { faker } from '@faker-js/faker';
import { NextResponse } from 'next/server';

import { Phrase } from '@/interfaces';

const DATA_PATH = path.join(process.cwd(), 'src/data/data.json');

interface Data extends Phrase {
  history?: Phrase[];
}

const setup = async () => {
  const dataFileExists = existsSync(DATA_PATH);

  if (!dataFileExists) {
    await fs.writeFile(DATA_PATH, JSON.stringify({}));
  }
};

const regeneratePhrase = async (oldData: Data) => {
  const date = new Date();
  const phrase = faker.random.words(3).toLowerCase();

  date.setHours(0);
  date.setDate(date.getDate() + 1);

  const phraseData = {
    expires: date.toISOString(),
    phrase,
  };

  const history = [...(oldData.history || []), phraseData];

  await fs.writeFile(DATA_PATH, JSON.stringify({ ...phraseData, history }));

  return { phrase, history };
};

export async function GET() {
  await setup();

  const {
    history = [],
    expires,
    phrase,
  }: Data = JSON.parse(await fs.readFile(DATA_PATH, 'utf8'));

  const isExpired = !phrase || !expires || new Date() > new Date(expires);

  if (!isExpired) {
    return NextResponse.json({ phrase: phrase.toLowerCase(), history });
  }

  return NextResponse.json(
    await regeneratePhrase({ expires, phrase, history }),
  );
}
