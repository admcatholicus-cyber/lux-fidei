import { redirect } from 'next/navigation';
import { chapters } from './data/chapters';

export default function UltimasConversasPage() {
  redirect(`/biblioteca/ultimas-conversas/${chapters[0].slug}`);
}
