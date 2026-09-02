// Índice dos capítulos de "História de uma Alma"
import { chapter01 } from './chapter-01';
import { chapter02 } from './chapter-02';
import { chapter03 } from './chapter-03';
import { chapter04 } from './chapter-04';
import { chapter05 } from './chapter-05';
import { chapter06 } from './chapter-06';
import { chapter07 } from './chapter-07';
import { chapter08 } from './chapter-08';
import { chapter09 } from './chapter-09';
import { chapter10 } from './chapter-10';
import { chapter11 } from './chapter-11';

export type Chapter = {
  number: number;
  roman: string;
  slug: string;
  title: string;
  subtitle: string;
  paragraphs: readonly string[];
};

export const chapters: readonly Chapter[] = [
  chapter01,
  chapter02,
  chapter03,
  chapter04,
  chapter05,
  chapter06,
  chapter07,
  chapter08,
  chapter09,
  chapter10,
  chapter11,
];

export const bookMeta = {
  title: 'História de uma Alma',
  author: 'Santa Teresa do Menino Jesus (1873–1897)',
  authorShort: 'Santa Teresinha de Lisieux',
  originalLanguage: 'Francês',
  yearWritten: '1895–1897',
  category: 'Mística Carmelita',
  translationNote: 'Tradução em domínio público (fonte: Alexandria Católica / Canção Nova).',
  description: 'Autobiografia espiritual de Santa Teresinha, composta pelos três Manuscritos A, B e C — a narrativa mais límpida do «pequeno caminho» da infância espiritual.',
} as const;
