// estudos/concilios/calcedonia/personagens/leao-magno/page.tsx
import type { Metadata } from 'next';
import { personagensSecao } from '../_personagens';
import PersonagemTemplate, { metadataFor } from '../_PersonagemTemplate';

export const metadata: Metadata = metadataFor(personagensSecao.find(p => p.slug === 'leao-magno')!);

export default function LeaoMagnoPage() {
  return <PersonagemTemplate personagem={personagensSecao.find(p => p.slug === 'leao-magno')!} />;
}
