import { redirect } from 'next/navigation';
import { chapters } from './data/chapters';

export default function HistoriaDeUmaAlmaPage() {
  // Redireciona diretamente para o primeiro capítulo
  redirect(`/biblioteca/historia-de-uma-alma/${chapters[0].slug}`);
}