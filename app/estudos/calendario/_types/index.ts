export type LiturgicalSeason =
  | 'advento'
  | 'natal'
  | 'tempoComum'
  | 'quaresma'
  | 'triduoPascal'
  | 'pascoa';

export interface LiturgicalWeek {
  id: string;
  label: string;
  season: LiturgicalSeason;
  color: string;
  description: string;
  // ✨ Novos campos opcionais para conteúdo rico
  theme?: string;              // tema/foco da semana
  liturgicalColor?: string;    // cor do paramento (Branco, Roxo, Verde...)
  reflection?: string;         // reflexão maior
  readings?: {
    firstReading?: string;
    psalm?: string;
    secondReading?: string;
    gospel?: string;
  };
  prayer?: string;             // oração do dia (coleta)
  saint?: string;              // santo(a) associado(a), se houver
}