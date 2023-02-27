import { existsSync, promises as fs } from 'fs';
import path from 'path';

import { faker } from '@faker-js/faker';
import { NextResponse } from 'next/server';

const DATA_PATH = path.join(process.cwd(), 'src/data/data.json');

type Data = {
  phrase: string;
  expires: string;
};

const setup = async () => {
  const dataFileExists = existsSync(DATA_PATH);

  if (!dataFileExists) {
    await fs.writeFile(DATA_PATH, JSON.stringify({}));
  }
};

const regeneratePhrase = async () => {
  const date = new Date();
  const phrase = faker.lorem.words(3);

  date.setHours(0);
  date.setDate(date.getDate() + 1);

  await fs.writeFile(
    DATA_PATH,
    JSON.stringify({
      expires: date.toISOString(),
      phrase,
    }),
  );

  return { phrase };
};

export async function GET() {
  await setup();

  const { expires, phrase }: Data = JSON.parse(
    await fs.readFile(DATA_PATH, 'utf8'),
  );

  if (!phrase || !expires || new Date() > new Date(expires)) {
    return NextResponse.json(await regeneratePhrase());
  }

  return NextResponse.json({ phrase: phrase.toUpperCase() });
}
