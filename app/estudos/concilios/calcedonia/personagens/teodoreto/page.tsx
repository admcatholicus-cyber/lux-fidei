// estudos/concilios/calcedonia/personagens/teodoreto/page.tsx
import type { Metadata } from 'next';
import { personagensSecao } from '../_personagens';
import PersonagemTemplate, { metadataFor } from '../_PersonagemTemplate';

export const metadata: Metadata = metadataFor(personagensSecao.find(p => p.slug === 'teodoreto')!);

export default function TeodoretoPage() {
  return <PersonagemTemplate personagem={personagensSecao.find(p => p.slug === 'teodoreto')!} />;
}
