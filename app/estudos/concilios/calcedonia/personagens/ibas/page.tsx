// estudos/concilios/calcedonia/personagens/ibas/page.tsx
import type { Metadata } from 'next';
import { personagensSecao } from '../_personagens';
import PersonagemTemplate, { metadataFor } from '../_PersonagemTemplate';

export const metadata: Metadata = metadataFor(personagensSecao.find(p => p.slug === 'ibas')!);

export default function IbasPage() {
  return <PersonagemTemplate personagem={personagensSecao.find(p => p.slug === 'ibas')!} />;
}
