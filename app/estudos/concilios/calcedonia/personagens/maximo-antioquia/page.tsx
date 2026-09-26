// estudos/concilios/calcedonia/personagens/maximo-antioquia/page.tsx
import type { Metadata } from 'next';
import { personagensSecao } from '../_personagens';
import PersonagemTemplate, { metadataFor } from '../_PersonagemTemplate';

export const metadata: Metadata = metadataFor(personagensSecao.find(p => p.slug === 'maximo-antioquia')!);

export default function MaximoAntioquiaPage() {
  return <PersonagemTemplate personagem={personagensSecao.find(p => p.slug === 'maximo-antioquia')!} />;
}
