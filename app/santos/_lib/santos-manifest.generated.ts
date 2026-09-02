// ⚠️ GERADO AUTOMATICAMENTE — NÃO EDITAR
// 2026-09-02T14:26:40.559Z
// npm run generate:santos

export type SantoManifestEntry = {
  categoria: string;
  slug: string;
  nome: string;
  primeiraAba: string;
};

export const SANTOS_MANIFEST = {
  "apostolos/sao-judas-tadeu": {
    categoria: "apostolos",
    slug: "sao-judas-tadeu",
    nome: "São Judas Tadeu",
    primeiraAba: "origens",
  },
  "apostolos/sao-lucas": {
    categoria: "apostolos",
    slug: "sao-lucas",
    nome: "São Lucas Evangelista",
    primeiraAba: "historia",
  },
  "arcanjos/sao-gabriel-arcanjo": {
    categoria: "arcanjos",
    slug: "sao-gabriel-arcanjo",
    nome: "São Gabriel Arcanjo",
    primeiraAba: "identidade",
  },
  "arcanjos/sao-miguel-arcanjo": {
    categoria: "arcanjos",
    slug: "sao-miguel-arcanjo",
    nome: "São Miguel Arcanjo",
    primeiraAba: "historia",
  },
  "arcanjos/sao-rafael-arcanjo": {
    categoria: "arcanjos",
    slug: "sao-rafael-arcanjo",
    nome: "São Rafael Arcanjo",
    primeiraAba: "historia",
  },
  "doutores/santa-teresinha-do-menino-jesus": {
    categoria: "doutores",
    slug: "santa-teresinha-do-menino-jesus",
    nome: "Santa Teresinha do Menino Jesus e da Sagrada Face",
    primeiraAba: "historia",
  },
  "doutores/sao-tomas-de-aquino": {
    categoria: "doutores",
    slug: "sao-tomas-de-aquino",
    nome: "São Tomás de Aquino",
    primeiraAba: "historia",
  },
  "leigos/sao-domingos-savio": {
    categoria: "leigos",
    slug: "sao-domingos-savio",
    nome: "São Domingos Sávio",
    primeiraAba: "historia",
  },
  "martires/santa-afra-de-augsburgo": {
    categoria: "martires",
    slug: "santa-afra-de-augsburgo",
    nome: "Santa Afra de Augsburgo",
    primeiraAba: "contexto-romano",
  },
  "presbiteros/sao-filipe-neri": {
    categoria: "presbiteros",
    slug: "sao-filipe-neri",
    nome: "São Filipe Néri",
    primeiraAba: "historia",
  },
  "presbiteros/sao-joao-maria-vianney": {
    categoria: "presbiteros",
    slug: "sao-joao-maria-vianney",
    nome: "São João Maria Vianney",
    primeiraAba: "historia",
  }
} as const satisfies Record<string, SantoManifestEntry>;

export type SantoManifestKey = keyof typeof SANTOS_MANIFEST;

export const MANIFEST_GENERATED_AT = "2026-09-02T14:26:40.559Z" as const;

export function getPrimeiraAba(categoria: string, slug: string): string | null {
  const key = `${categoria}/${slug}`;
  const entry = (SANTOS_MANIFEST as Record<string, SantoManifestEntry>)[key];
  return entry?.primeiraAba ?? null;
}
