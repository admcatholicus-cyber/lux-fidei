import { catequese01 } from './catequese-01';
import { catequese02 } from './catequese-02';
import { catequese03 } from './catequese-03';
import { catequese04 } from './catequese-04';
import { catequese05 } from './catequese-05';
import { catequese06 } from './catequese-06';
import { catequese07 } from './catequese-07';
import { catequese08 } from './catequese-08';
import { catequese09 } from './catequese-09';
import { catequese10 } from './catequese-10';
import { catequese11 } from './catequese-11';
import { catequese12 } from './catequese-12';
import { catequese13 } from './catequese-13';
import { catequese14 } from './catequese-14';
import { catequese15 } from './catequese-15';
import { catequese16 } from './catequese-16';
import { catequese17 } from './catequese-17';
import { catequese18 } from './catequese-18';
import { catequese19 } from './catequese-19';
import { catequese20 } from './catequese-20';
import { catequese21 } from './catequese-21';
import { catequese22 } from './catequese-22';
import { catequese23 } from './catequese-23';
import { catequese24 } from './catequese-24';

export type TipoCatequese = 'pre-batismal' | 'mistagogica';

export type Catequese = {
  number: number;
  slug: string;
  titulo: string;
  subtitulo?: string;
  tipo: TipoCatequese;
  versiculoBase?: string;
  textoOriginal: readonly string[];
  textoTraduzido: readonly string[];
  idiomaOriginal: 'grego' | 'inglês';
  notas?: readonly string[];
  fonte: string;
  commentary?: {
    title: string;
    body: readonly string[];
    signature?: string;
  };
};

export const tipoLabels: Record<TipoCatequese, string> = {
  'pre-batismal': 'Pré-batismal',
  'mistagogica': 'Mistagógica',
};

export const catequeses: readonly Catequese[] = [
  catequese01,
  catequese02,
  catequese03,
  catequese04,
  catequese05,
  catequese06,
  catequese07,
  catequese08,
  catequese09,
  catequese10,
  catequese11,
  catequese12,
  catequese13,
  catequese14,
  catequese15,
  catequese16,
  catequese17,
  catequese18,
  catequese19,
  catequese20,
  catequese21,
  catequese22,
  catequese23,
  catequese24,
];

export const bookMeta = {
  id: 'cirilo-jerusalem',
  title: 'Catequeses Batismais e Mistagógicas',
  author: 'São Cirilo de Jerusalém (c. 313–386)',
  authorShort: 'São Cirilo de Jerusalém',
  originalLanguage: 'Grego Koiné',
  yearWritten: 'c. 348–350 d.C.',
  category: 'Patrística Grega — Catequese Batismal',
  translationNote: 'Tradução em domínio público, baseada na edição NPNF vol. VII (Philip Schaff) e conferida com PG 33.',
  description: 'Ciclo completo de 24 catequeses proferidas por São Cirilo aos catecúmenos de Jerusalém: 18 pré-batismais (durante a Quaresma) e 6 mistagógicas (na semana pós-Páscoa), que explicam os sacramentos da iniciação cristã.',
  capa: '/biblioteca/cirilo-jerusalem/capa.webp',
  corTema: '#5b2c83',
} as const;
