/* ============================================================
   REGISTRY — Índice central de todos os santos
   ============================================================ */

import type { SantoRegistry, Categoria, Pasta } from '../_types/santo';
import { gerarSlug } from './slug';

/** Entrada bruta (antes de processar) */
interface EntradaBruta {
  nome: string;
  categorias: Categoria[];
  pasta?: Pasta;
  imagemPasta?: Pasta;
  /** 'S' quando possuir imagem na pasta public. Deixe '' quando não tiver */
  img?: 'S' | 's' | '';
}

const DADOS_BRUTOS: EntradaBruta[] = [

  // ═══════════════════════════════════════════════
  // ANJOS E ARCANJOS
  // ═══════════════════════════════════════════════
  { nome: 'São Miguel Arcanjo', categorias: ['Arcanjo'], pasta: 'arcanjos', img: 'S' },
  { nome: 'São Gabriel Arcanjo', categorias: ['Arcanjo'], pasta: 'arcanjos', img: 'S' },
  { nome: 'São Rafael Arcanjo', categorias: ['Arcanjo'], pasta: 'arcanjos', img: 'S' },

  // ═══════════════════════════════════════════════
  // APÓSTOLOS E EVANGELISTAS
  // ═══════════════════════════════════════════════
  { nome: 'São Pedro', categorias: ['Apóstolo', 'Papa', 'Mártir'], imagemPasta: 'apostolos', img: '' },
  { nome: 'São Paulo', categorias: ['Apóstolo', 'Mártir'], imagemPasta: 'apostolos', img: '' },
  { nome: 'São João Evangelista', categorias: ['Apóstolo', 'Evangelista'], imagemPasta: 'apostolos', img: '' },
  { nome: 'São Mateus', categorias: ['Apóstolo', 'Evangelista', 'Mártir'], imagemPasta: 'apostolos', img: '' },
  { nome: 'São Marcos', categorias: ['Evangelista', 'Mártir'], imagemPasta: 'apostolos', img: '' },
  { nome: 'São Lucas', categorias: ['Evangelista', 'Mártir'], pasta: 'apostolos', img: 'S' },
  { nome: 'São Tiago Maior', categorias: ['Apóstolo', 'Mártir'], imagemPasta: 'apostolos', img: '' },
  { nome: 'São Tiago Menor', categorias: ['Apóstolo', 'Mártir'], imagemPasta: 'apostolos', img: '' },
  { nome: 'São Judas Tadeu', categorias: ['Apóstolo', 'Mártir'], pasta: 'apostolos', img: 'S' },
  { nome: 'São Bartolomeu', categorias: ['Apóstolo', 'Mártir'], imagemPasta: 'apostolos', img: '' },
  { nome: 'São Simão', categorias: ['Apóstolo', 'Mártir'], imagemPasta: 'apostolos', img: '' },
  { nome: 'São Tomé', categorias: ['Apóstolo', 'Mártir'], imagemPasta: 'apostolos', img: '' },
  { nome: 'São Matias', categorias: ['Apóstolo', 'Mártir'], imagemPasta: 'apostolos', img: '' },
  { nome: 'São Filipe', categorias: ['Apóstolo', 'Mártir'], imagemPasta: 'apostolos', img: '' },
  { nome: 'São André', categorias: ['Apóstolo', 'Mártir'], imagemPasta: 'apostolos', img: '' },
  { nome: 'São Barnabé', categorias: ['Apóstolo', 'Mártir'], imagemPasta: 'apostolos', img: '' },

  // ═══════════════════════════════════════════════
  // DOUTORES DA IGREJA
  // ═══════════════════════════════════════════════
  { nome: 'São Tomás de Aquino', categorias: ['Doutor da Igreja', 'Presbítero'], pasta: 'doutores', img: 'S' },
  { nome: 'São Agostinho de Hipona', categorias: ['Doutor da Igreja', 'Bispo'], pasta: 'doutores', img: '' },
  { nome: 'São Jerônimo', categorias: ['Doutor da Igreja', 'Presbítero'], pasta: 'doutores', img: '' },
  { nome: 'São Gregório Magno', categorias: ['Doutor da Igreja', 'Papa'], pasta: 'doutores', img: '' },
  { nome: 'Santo Ambrósio', categorias: ['Doutor da Igreja', 'Bispo'], pasta: 'doutores', img: '' },
  { nome: 'São João Crisóstomo', categorias: ['Doutor da Igreja', 'Bispo'], pasta: 'doutores', img: '' },
  { nome: 'São Basílio Magno', categorias: ['Doutor da Igreja', 'Bispo'], pasta: 'doutores', img: '' },
  { nome: 'São Gregório Nazianzeno', categorias: ['Doutor da Igreja', 'Bispo'], pasta: 'doutores', img: '' },
  { nome: 'Santo Atanásio', categorias: ['Doutor da Igreja', 'Bispo'], pasta: 'doutores', img: '' },
  { nome: 'São Leão Magno', categorias: ['Doutor da Igreja', 'Papa'], pasta: 'doutores', img: '' },
  { nome: 'São Hilário de Poitiers', categorias: ['Doutor da Igreja', 'Bispo'], pasta: 'doutores', img: '' },
  { nome: 'São Cirilo de Alexandria', categorias: ['Doutor da Igreja', 'Bispo'], pasta: 'doutores', img: '' },
  { nome: 'São Cirilo de Jerusalém', categorias: ['Doutor da Igreja', 'Bispo'], pasta: 'doutores', img: '' },
  { nome: 'São João Damasceno', categorias: ['Doutor da Igreja', 'Presbítero'], pasta: 'doutores', img: '' },
  { nome: 'São Pedro Crisólogo', categorias: ['Doutor da Igreja', 'Bispo'], pasta: 'doutores', img: '' },
  { nome: 'Santo Isidoro de Sevilha', categorias: ['Doutor da Igreja', 'Bispo'], pasta: 'doutores', img: '' },
  { nome: 'São Beda o Venerável', categorias: ['Doutor da Igreja', 'Presbítero'], pasta: 'doutores', img: '' },
  { nome: 'São Pedro Damião', categorias: ['Doutor da Igreja', 'Bispo'], pasta: 'doutores', img: '' },
  { nome: 'Santo Anselmo de Cantuária', categorias: ['Doutor da Igreja', 'Bispo'], pasta: 'doutores', img: '' },
  { nome: 'São Bernardo de Claraval', categorias: ['Doutor da Igreja', 'Abade'], pasta: 'doutores', img: '' },
  { nome: 'São Boaventura', categorias: ['Doutor da Igreja', 'Bispo'], pasta: 'doutores', img: '' },
  { nome: 'Santo Alberto Magno', categorias: ['Doutor da Igreja', 'Bispo'], pasta: 'doutores', img: '' },
  { nome: 'Santo Antônio de Pádua', categorias: ['Doutor da Igreja', 'Presbítero'], pasta: 'doutores', img: '' },
  { nome: 'São João da Cruz', categorias: ['Doutor da Igreja', 'Presbítero'], pasta: 'doutores', img: '' },
  { nome: 'São Pedro Canísio', categorias: ['Doutor da Igreja', 'Presbítero'], pasta: 'doutores', img: '' },
  { nome: 'São Roberto Belarmino', categorias: ['Doutor da Igreja', 'Bispo'], pasta: 'doutores', img: '' },
  { nome: 'São Francisco de Sales', categorias: ['Doutor da Igreja', 'Bispo'], pasta: 'doutores', img: '' },
  { nome: 'Santo Afonso de Ligório', categorias: ['Doutor da Igreja', 'Bispo'], pasta: 'doutores', img: '' },
  { nome: 'São Lourenço de Brindisi', categorias: ['Doutor da Igreja', 'Presbítero'], pasta: 'doutores', img: '' },
  { nome: "Santa Teresa d'Ávila", categorias: ['Doutor da Igreja', 'Virgem'], pasta: 'doutores', img: '' },
  { nome: 'Santa Catarina de Sena', categorias: ['Doutor da Igreja', 'Virgem'], pasta: 'doutores', img: '' },
  { nome: 'Santa Teresinha do Menino Jesus', categorias: ['Doutor da Igreja', 'Virgem'], pasta: 'doutores', img: 'S' },
  { nome: 'Santa Hildegarda de Bingen', categorias: ['Doutor da Igreja', 'Virgem'], pasta: 'doutores', img: '' },
  { nome: 'São João de Ávila', categorias: ['Doutor da Igreja', 'Presbítero'], pasta: 'doutores', img: '' },
  { nome: 'São Gregório de Narek', categorias: ['Doutor da Igreja', 'Monge'], pasta: 'doutores', img: '' },
  { nome: 'Santo Efrém da Síria', categorias: ['Doutor da Igreja', 'Diácono'], pasta: 'doutores', img: '' },
  { nome: 'São Ireneu de Lyon', categorias: ['Doutor da Igreja', 'Bispo', 'Mártir'], pasta: 'doutores', img: '' },

  // ═══════════════════════════════════════════════
  // PAPAS SANTOS
  // ═══════════════════════════════════════════════
  { nome: 'São Lino', categorias: ['Papa', 'Mártir'], imagemPasta: 'papas', img: '' },
  { nome: 'São Cleto', categorias: ['Papa', 'Mártir'], imagemPasta: 'papas', img: '' },
  { nome: 'São Clemente I', categorias: ['Papa', 'Mártir'], imagemPasta: 'papas', img: '' },
  { nome: 'São Sisto II', categorias: ['Papa', 'Mártir'], imagemPasta: 'papas', img: '' },
  { nome: 'São Cornélio', categorias: ['Papa', 'Mártir'], imagemPasta: 'papas', img: '' },
  { nome: 'São Fabiano', categorias: ['Papa', 'Mártir'], imagemPasta: 'papas', img: '' },
  { nome: 'São Calixto I', categorias: ['Papa', 'Mártir'], imagemPasta: 'papas', img: '' },
  { nome: 'São Ponciano', categorias: ['Papa', 'Mártir'], imagemPasta: 'papas', img: '' },
  { nome: 'São Silvestre I', categorias: ['Papa'], imagemPasta: 'papas', img: '' },
  { nome: 'São Dâmaso I', categorias: ['Papa'], imagemPasta: 'papas', img: '' },
  { nome: 'São Gregório VII', categorias: ['Papa'], imagemPasta: 'papas', img: '' },
  { nome: 'São Pio V', categorias: ['Papa', 'Religioso'], imagemPasta: 'papas', img: '' },
  { nome: 'São Pio X', categorias: ['Papa'], imagemPasta: 'papas', img: '' },
  { nome: 'São João XXIII', categorias: ['Papa'], imagemPasta: 'papas', img: '' },
  { nome: 'São Paulo VI', categorias: ['Papa'], imagemPasta: 'papas', img: '' },
  { nome: 'São João Paulo II', categorias: ['Papa'], imagemPasta: 'papas', img: '' },
  { nome: 'São Melquíades', categorias: ['Papa'], imagemPasta: 'papas', img: '' },
  { nome: 'São Zózimo', categorias: ['Papa'], imagemPasta: 'papas', img: '' },
  { nome: 'São Bonifácio IV', categorias: ['Papa'], imagemPasta: 'papas', img: '' },
  { nome: 'São Sérgio I', categorias: ['Papa'], imagemPasta: 'papas', img: '' },
  { nome: 'São Pascoal I', categorias: ['Papa'], imagemPasta: 'papas', img: '' },
  { nome: 'São João I', categorias: ['Papa', 'Mártir'], imagemPasta: 'papas', img: '' },
  { nome: 'São Martinho I', categorias: ['Papa', 'Mártir'], imagemPasta: 'papas', img: '' },
  { nome: 'São Silvério', categorias: ['Papa', 'Mártir'], imagemPasta: 'papas', img: '' },
  { nome: 'São Celestino V', categorias: ['Papa', 'Eremita'], imagemPasta: 'papas', img: '' },
  { nome: 'São Sotero', categorias: ['Mártir', 'Papa'], imagemPasta: 'papas', img: '' },
  { nome: 'São Caio', categorias: ['Mártir', 'Papa'], imagemPasta: 'papas', img: '' },
  { nome: 'São Dionísio', categorias: ['Mártir', 'Papa'], imagemPasta: 'papas', img: '' },
  { nome: 'São Félix I', categorias: ['Mártir', 'Papa'], imagemPasta: 'papas', img: '' },
  { nome: 'São Sisto I', categorias: ['Mártir', 'Papa'], imagemPasta: 'papas', img: '' },
  { nome: 'São Telésforo', categorias: ['Mártir', 'Papa'], imagemPasta: 'papas', img: '' },
  { nome: 'São Higino', categorias: ['Mártir', 'Papa'], imagemPasta: 'papas', img: '' },
  { nome: 'São Pio I', categorias: ['Mártir', 'Papa'], imagemPasta: 'papas', img: '' },
  { nome: 'São Vítor I', categorias: ['Mártir', 'Papa'], imagemPasta: 'papas', img: '' },
  { nome: 'São Zeferino', categorias: ['Mártir', 'Papa'], imagemPasta: 'papas', img: '' },
  { nome: 'São Urbano I', categorias: ['Mártir', 'Papa'], imagemPasta: 'papas', img: '' },
  { nome: 'São Antero', categorias: ['Mártir', 'Papa'], imagemPasta: 'papas', img: '' },
  { nome: 'São Lúcio I', categorias: ['Mártir', 'Papa'], imagemPasta: 'papas', img: '' },
  { nome: 'São Estevão I', categorias: ['Mártir', 'Papa'], imagemPasta: 'papas', img: '' },
  { nome: 'São Eutiquiano', categorias: ['Mártir', 'Papa'], imagemPasta: 'papas', img: '' },
  { nome: 'São Marcelino', categorias: ['Mártir', 'Papa'], imagemPasta: 'papas', img: '' },
  { nome: 'São Marcelo I', categorias: ['Mártir', 'Papa'], imagemPasta: 'papas', img: '' },
  { nome: 'São Eusébio', categorias: ['Mártir', 'Papa'], imagemPasta: 'papas', img: '' },

  // ═══════════════════════════════════════════════
  // PRESBÍTEROS
  // ═══════════════════════════════════════════════
  { nome: 'São João Maria Vianney', categorias: ['Presbítero', 'Pastor'], pasta: 'presbiteros', img: 'S' },
  { nome: 'São Valentim', categorias: ['Mártir', 'Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'São Fidelis de Sigmaringa', categorias: ['Mártir', 'Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'São Maximiliano Kolbe', categorias: ['Mártir', 'Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'São Francisco Xavier', categorias: ['Missionário', 'Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'São José de Anchieta', categorias: ['Missionário', 'Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'São Pio de Pietrelcina', categorias: ['Presbítero', 'Místico'], pasta: 'presbiteros', img: '' },
  { nome: 'São Domingos de Gusmão', categorias: ['Fundador', 'Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'Santo Inácio de Loyola', categorias: ['Fundador', 'Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'São Camilo de Lellis', categorias: ['Fundador', 'Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'São Vicente de Paulo', categorias: ['Fundador', 'Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'São João Bosco', categorias: ['Fundador', 'Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'São Filipe Neri', categorias: ['Fundador', 'Presbítero'], pasta: 'presbiteros', img: 'S' },
  { nome: 'São Caetano', categorias: ['Fundador', 'Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'São Jerônimo Emiliani', categorias: ['Fundador', 'Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'São José de Calasanz', categorias: ['Fundador', 'Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'São Paulo da Cruz', categorias: ['Fundador', 'Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'São Pedro Julião Eymard', categorias: ['Fundador', 'Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'São João Eudes', categorias: ['Fundador', 'Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'São Luís Maria de Montfort', categorias: ['Fundador', 'Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'São Luís Orione', categorias: ['Fundador', 'Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'São João Calabria', categorias: ['Fundador', 'Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'São Vicente Pallotti', categorias: ['Fundador', 'Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'São Gaspar del Búfalo', categorias: ['Fundador', 'Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'São Tiago Alberione', categorias: ['Fundador', 'Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'São Francisco Coll', categorias: ['Fundador', 'Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'São Enrique de Ossó', categorias: ['Fundador', 'Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'São André Kim', categorias: ['Mártir', 'Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'São Roberto Southwell', categorias: ['Mártir', 'Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'São Edmundo Campion', categorias: ['Mártir', 'Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'São Pedro de Arbués', categorias: ['Mártir', 'Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'São Teófano Vénard', categorias: ['Mártir', 'Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'São João de Triora', categorias: ['Mártir', 'Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'São Francisco de Capillas', categorias: ['Mártir', 'Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'São Rafael de Mitilene', categorias: ['Mártir', 'Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'São Cosme Etolo', categorias: ['Mártir', 'Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'São Pedro de Verona', categorias: ['Mártir', 'Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'São Junípero Serra', categorias: ['Missionário', 'Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'São Damião de Molokai', categorias: ['Missionário', 'Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'São Pedro Claver', categorias: ['Missionário', 'Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'São Luís Beltrão', categorias: ['Missionário', 'Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'São Francisco Solano', categorias: ['Missionário', 'Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'São Leopoldo Mandic', categorias: ['Missionário', 'Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'São João de Kronstadt', categorias: ['Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'São Leonardo de Porto Maurício', categorias: ['Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'São Bernardino de Sena', categorias: ['Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'São Pedro de Alcântara', categorias: ['Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'São Cláudio de la Colombière', categorias: ['Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'São Francisco de Borja', categorias: ['Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'São João de Sahagún', categorias: ['Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'São Nicolau Tolentino', categorias: ['Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'São João de Kanty', categorias: ['Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'São Jacinto', categorias: ['Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'São Vicente Ferrer', categorias: ['Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'São Raimundo de Penaforte', categorias: ['Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'São Clemente Hofbauer', categorias: ['Presbítero'], pasta: 'presbiteros', img: '' },
  { nome: 'São Pedro Fourier', categorias: ['Presbítero'], pasta: 'presbiteros', img: '' },

  // ═══════════════════════════════════════════════
  // MÁRTIRES
  // ═══════════════════════════════════════════════
  { nome: 'Santo Estêvão', categorias: ['Mártir', 'Diácono'], imagemPasta: 'martires', img: '' },
  { nome: 'São Sebastião', categorias: ['Mártir'], imagemPasta: 'martires', img: '' },
  { nome: 'São Jorge', categorias: ['Mártir'], imagemPasta: 'martires', img: '' },
  { nome: 'São Lourenço', categorias: ['Mártir', 'Diácono'], imagemPasta: 'martires', img: '' },
  { nome: 'São Vicente de Saragoça', categorias: ['Mártir', 'Diácono'], imagemPasta: 'martires', img: '' },
  { nome: 'São Pantaleão', categorias: ['Mártir'], imagemPasta: 'martires', img: '' },
  { nome: 'São Brás', categorias: ['Mártir', 'Bispo'], imagemPasta: 'martires', img: '' },
  { nome: 'São Januário', categorias: ['Mártir', 'Bispo'], imagemPasta: 'martires', img: '' },
  { nome: 'São Maurício', categorias: ['Mártir'], imagemPasta: 'martires', img: '' },
  { nome: 'São Cristóvão', categorias: ['Mártir'], imagemPasta: 'martires', img: '' },
  { nome: 'São Tarcísio', categorias: ['Mártir'], imagemPasta: 'martires', img: '' },
  { nome: 'São Pancrácio', categorias: ['Mártir'], imagemPasta: 'martires', img: '' },
  { nome: 'São Cipriano de Cartago', categorias: ['Mártir', 'Bispo'], imagemPasta: 'martires', img: '' },
  { nome: 'São Policarpo de Esmirna', categorias: ['Mártir', 'Bispo'], imagemPasta: 'martires', img: '' },
  { nome: 'São Inácio de Antioquia', categorias: ['Mártir', 'Bispo'], imagemPasta: 'martires', img: '' },
  { nome: 'São Justino Mártir', categorias: ['Mártir'], imagemPasta: 'martires', img: '' },
  { nome: 'São Cosme', categorias: ['Mártir'], imagemPasta: 'martires', img: '' },
  { nome: 'São Damião', categorias: ['Mártir'], imagemPasta: 'martires', img: '' },
  { nome: 'São Longuinho', categorias: ['Mártir'], imagemPasta: 'martires', img: '' },
  { nome: 'Santa Inês', categorias: ['Mártir', 'Virgem'], imagemPasta: 'martires', img: '' },
  { nome: 'Santa Luzia', categorias: ['Mártir', 'Virgem'], imagemPasta: 'martires', img: '' },
  { nome: 'Santa Cecília', categorias: ['Mártir', 'Virgem'], imagemPasta: 'martires', img: '' },
  { nome: 'Santa Ágata', categorias: ['Mártir', 'Virgem'], imagemPasta: 'martires', img: '' },
  { nome: 'Santa Bárbara', categorias: ['Mártir', 'Virgem'], imagemPasta: 'martires', img: '' },
  { nome: 'Santa Catarina de Alexandria', categorias: ['Mártir', 'Virgem'], imagemPasta: 'martires', img: '' },
  { nome: 'Santa Perpétua', categorias: ['Mártir'], imagemPasta: 'martires', img: '' },
  { nome: 'Santa Felicidade', categorias: ['Mártir'], imagemPasta: 'martires', img: '' },
  { nome: 'Santa Blandina', categorias: ['Mártir'], imagemPasta: 'martires', img: '' },
  { nome: 'Santa Eulália de Mérida', categorias: ['Mártir', 'Virgem'], imagemPasta: 'martires', img: '' },
  { nome: 'Santa Apolônia', categorias: ['Mártir', 'Virgem'], imagemPasta: 'martires', img: '' },
  { nome: 'Santa Teresa Benedita da Cruz', categorias: ['Mártir', 'Religiosa'], imagemPasta: 'martires', img: '' },
  { nome: 'São Óscar Romero', categorias: ['Mártir', 'Bispo'], imagemPasta: 'martires', img: '' },
  { nome: 'São Carlos Lwanga', categorias: ['Mártir'], imagemPasta: 'martires', img: '' },
  { nome: 'São Lourenço Ruiz', categorias: ['Mártir'], imagemPasta: 'martires', img: '' },
  { nome: 'São Paulo Miki', categorias: ['Mártir', 'Religioso'], imagemPasta: 'martires', img: '' },
  { nome: 'São Josafá Kuncewicz', categorias: ['Mártir', 'Bispo'], imagemPasta: 'martires', img: '' },
  { nome: 'São Isaque Jogues', categorias: ['Mártir', 'Missionário'], imagemPasta: 'martires', img: '' },
  { nome: 'São João de Brébeuf', categorias: ['Mártir', 'Missionário'], imagemPasta: 'martires', img: '' },
  { nome: 'São Vardan Mamikonian', categorias: ['Mártir', 'Justo'], imagemPasta: 'martires', img: '' },
  { nome: 'São Demétrio de Tessalônica', categorias: ['Mártir'], imagemPasta: 'martires', img: '' },
  { nome: 'São Procópio', categorias: ['Mártir'], imagemPasta: 'martires', img: '' },
  { nome: 'São Menas', categorias: ['Mártir'], imagemPasta: 'martires', img: '' },
  { nome: 'São Teodoro Tiro', categorias: ['Mártir'], imagemPasta: 'martires', img: '' },
  { nome: 'São Eustáquio', categorias: ['Mártir'], imagemPasta: 'martires', img: '' },
  { nome: 'São Floriano', categorias: ['Mártir'], imagemPasta: 'martires', img: '' },
  { nome: 'Santa Afra de Augsburgo', categorias: ['Mártir', 'Virgem'], pasta: 'martires', img: 'S' },

  // ═══════════════════════════════════════════════
  // MISSIONÁRIOS
  // ═══════════════════════════════════════════════
  { nome: 'São Patrício', categorias: ['Missionário', 'Bispo'], imagemPasta: 'missionarios', img: '' },
  { nome: 'São Bonifácio', categorias: ['Missionário', 'Bispo', 'Mártir'], imagemPasta: 'missionarios', img: '' },
  { nome: 'São Willibrordo', categorias: ['Missionário', 'Bispo'], imagemPasta: 'missionarios', img: '' },
  { nome: 'São Cirilo dos Eslavos', categorias: ['Missionário', 'Monge'], imagemPasta: 'missionarios', img: '' },
  { nome: 'São Metódio dos Eslavos', categorias: ['Missionário', 'Bispo'], imagemPasta: 'missionarios', img: '' },
  { nome: 'São Roque González', categorias: ['Missionário', 'Mártir'], imagemPasta: 'missionarios', img: '' },
  { nome: 'São Turíbio de Mongrovejo', categorias: ['Missionário', 'Bispo'], imagemPasta: 'missionarios', img: '' },
  { nome: 'São Daniel Comboni', categorias: ['Missionário', 'Bispo'], imagemPasta: 'missionarios', img: '' },
  { nome: 'São João de Brito', categorias: ['Mártir', 'Missionário'], imagemPasta: 'missionarios', img: '' },
  { nome: 'São Pedro Chanel', categorias: ['Mártir', 'Missionário'], imagemPasta: 'missionarios', img: '' },
  { nome: 'São Nicolau do Japão', categorias: ['Missionário', 'Bispo'], imagemPasta: 'missionarios', img: '' },
  { nome: 'São Justino de Jacobis', categorias: ['Missionário', 'Bispo'], imagemPasta: 'missionarios', img: '' },
  
  // ═══════════════════════════════════════════════
  // BISPOS, ABADES E PASTORES
  // ═══════════════════════════════════════════════
  { nome: 'São Martinho de Tours', categorias: ['Bispo'], imagemPasta: 'bispos', img: '' },
  { nome: 'São Nicolau de Mira', categorias: ['Bispo'], imagemPasta: 'bispos', img: '' },
  { nome: 'São Carlos Borromeu', categorias: ['Bispo'], imagemPasta: 'bispos', img: '' },
  { nome: 'São Teotônio', categorias: ['Abade'], imagemPasta: 'bispos', img: '' },
  { nome: 'São Leandro de Sevilha', categorias: ['Bispo'], imagemPasta: 'bispos', img: '' },
  { nome: 'São Romualdo', categorias: ['Abade'], imagemPasta: 'bispos', img: '' },
  { nome: 'São Columbano', categorias: ['Abade'], imagemPasta: 'bispos', img: '' },
  { nome: 'São Lucas da Crimeia', categorias: ['Bispo'], imagemPasta: 'bispos', img: '' },
  { nome: 'São Serafim de Sarov', categorias: ['Monge'], imagemPasta: 'bispos', img: '' },
  { nome: 'São Nectários de Egina', categorias: ['Bispo'], imagemPasta: 'bispos', img: '' },
  { nome: 'São Remígio', categorias: ['Bispo'], imagemPasta: 'bispos', img: '' },
  { nome: 'São Tomás de Vilanova', categorias: ['Bispo'], imagemPasta: 'bispos', img: '' },
  { nome: 'Santo Antonino de Florença', categorias: ['Bispo'], imagemPasta: 'bispos', img: '' },
  { nome: 'São João Neumann', categorias: ['Bispo'], imagemPasta: 'bispos', img: '' },

  // ═══════════════════════════════════════════════
  // FUNDADORES E RELIGIOSOS
  // ═══════════════════════════════════════════════
  { nome: 'São Bento de Núrsia', categorias: ['Fundador', 'Abade'], imagemPasta: 'fundadores', img: '' },
  { nome: 'São Francisco de Assis', categorias: ['Fundador', 'Religioso'], imagemPasta: 'fundadores', img: '' },
  { nome: 'São Bruno de Colônia', categorias: ['Fundador', 'Monge'], imagemPasta: 'fundadores', img: '' },
  { nome: 'São Norberto', categorias: ['Fundador', 'Bispo'], imagemPasta: 'fundadores', img: '' },
  { nome: 'São João de Deus', categorias: ['Fundador', 'Religioso'], imagemPasta: 'fundadores', img: '' },
  { nome: 'São Francisco de Paula', categorias: ['Fundador', 'Eremita'], imagemPasta: 'fundadores', img: '' },
  { nome: 'São Pedro Nolasco', categorias: ['Fundador'], imagemPasta: 'fundadores', img: '' },
  { nome: 'São João de Matha', categorias: ['Fundador'], imagemPasta: 'fundadores', img: '' },
  { nome: 'São Félix de Valois', categorias: ['Fundador'], imagemPasta: 'fundadores', img: '' },
  { nome: 'Santa Clara de Assis', categorias: ['Fundadora', 'Virgem'], imagemPasta: 'fundadores', img: '' },
  { nome: 'Santa Teresa de Calcutá', categorias: ['Fundadora', 'Virgem'], imagemPasta: 'fundadores', img: '' },
  { nome: 'Santa Paulina', categorias: ['Fundadora', 'Virgem'], imagemPasta: 'fundadores', img: '' },
  { nome: 'Santa Luísa de Marillac', categorias: ['Fundadora', 'Virgem'], imagemPasta: 'fundadores', img: '' },
  { nome: 'Santa Ângela de Mérici', categorias: ['Fundadora', 'Virgem'], imagemPasta: 'fundadores', img: '' },
  { nome: 'Santa Brígida da Suécia', categorias: ['Fundadora', 'Religiosa'], imagemPasta: 'fundadores', img: '' },
  { nome: 'Santa Francisca Xavier Cabrini', categorias: ['Fundadora', 'Virgem'], imagemPasta: 'fundadores', img: '' },
  { nome: 'Santa Maria Mazzarello', categorias: ['Fundadora', 'Virgem'], imagemPasta: 'fundadores', img: '' },
  { nome: 'Santa Beatriz da Silva', categorias: ['Fundadora', 'Virgem'], imagemPasta: 'fundadores', img: '' },
  { nome: 'Santa Madalena Sofia Barat', categorias: ['Fundadora', 'Virgem'], imagemPasta: 'fundadores', img: '' },
  { nome: 'Santa Maria MacKillop', categorias: ['Fundadora', 'Religiosa'], imagemPasta: 'fundadores', img: '' },

  // ═══════════════════════════════════════════════
  // RELIGIOSOS E MÍSTICOS
  // ═══════════════════════════════════════════════
  { nome: 'São Charbel Makhlouf', categorias: ['Monge', 'Místico'], imagemPasta: 'religiosos', img: '' },
  { nome: 'Santa Rita de Cássia', categorias: ['Religiosa', 'Mística'], imagemPasta: 'religiosos', img: '' },
  { nome: 'Santa Faustina Kowalska', categorias: ['Religiosa', 'Mística'], imagemPasta: 'religiosos', img: '' },
  { nome: 'Santa Bernadette Soubirous', categorias: ['Virgem'], imagemPasta: 'religiosos', img: '' },
  { nome: 'Santa Rosa de Lima', categorias: ['Virgem'], imagemPasta: 'religiosos', img: '' },
  { nome: 'Santa Escolástica', categorias: ['Virgem', 'Religiosa'], imagemPasta: 'religiosos', img: '' },
  { nome: 'Santo Antão do Deserto', categorias: ['Abade', 'Eremita'], imagemPasta: 'religiosos', img: '' },
  { nome: 'Santa Verônica Giuliani', categorias: ['Virgem', 'Mística'], imagemPasta: 'religiosos', img: '' },
  { nome: 'Santa Maria Madalena de Pazzi', categorias: ['Virgem', 'Mística'], imagemPasta: 'religiosos', img: '' },
  { nome: 'Santa Gema Galgani', categorias: ['Virgem', 'Mística'], imagemPasta: 'religiosos', img: '' },
  { nome: 'Santa Catarina de Gênova', categorias: ['Mística'], imagemPasta: 'religiosos', img: '' },
  { nome: 'Santa Margarida Maria Alacoque', categorias: ['Virgem'], imagemPasta: 'religiosos', img: '' },
  { nome: 'Santa Teresa dos Andes', categorias: ['Virgem'], imagemPasta: 'religiosos', img: '' },
  { nome: 'Santa Mariana de Jesus', categorias: ['Virgem'], imagemPasta: 'religiosos', img: '' },
  { nome: 'Santa Genoveva', categorias: ['Virgem'], imagemPasta: 'religiosos', img: '' },
  { nome: 'São Simeão Estilita', categorias: ['Eremita'], imagemPasta: 'religiosos', img: '' },
  { nome: 'São Paulo de Tebas', categorias: ['Eremita'], imagemPasta: 'religiosos', img: '' },
  { nome: 'São João Clímaco', categorias: ['Abade', 'Místico'], imagemPasta: 'religiosos', img: '' },
  { nome: 'São Macário o Grande', categorias: ['Abade'], imagemPasta: 'religiosos', img: '' },
  { nome: 'São Pacômio', categorias: ['Abade'], imagemPasta: 'religiosos', img: '' },
  { nome: 'São Martinho de Lima', categorias: ['Religioso'], imagemPasta: 'religiosos', img: '' },
  { nome: 'São Benedito o Mouro', categorias: ['Religioso'], imagemPasta: 'religiosos', img: '' },
  { nome: 'São Bento José Labre', categorias: ['Confessor'], imagemPasta: 'religiosos', img: '' },
  { nome: 'São Geraldo Majella', categorias: ['Religioso'], imagemPasta: 'religiosos', img: '' },
  { nome: 'São Estanislau Kostka', categorias: ['Religioso'], imagemPasta: 'religiosos', img: '' },
  { nome: 'São João Berchmans', categorias: ['Religioso'], imagemPasta: 'religiosos', img: '' },
  { nome: 'São Pascoal Bailão', categorias: ['Religioso'], imagemPasta: 'religiosos', img: '' },
  { nome: 'São Diogo de Alcalá', categorias: ['Religioso'], imagemPasta: 'religiosos', img: '' },
  { nome: 'São Luís Gonzaga', categorias: ['Religioso', 'Justo'], imagemPasta: 'religiosos', img: '' },
  { nome: 'São Gabriel da Virgem Dolorosa', categorias: ['Missionário', 'Religioso'], imagemPasta: 'religiosos', img: '' },
  { nome: 'Santa Dulce dos Pobres', categorias: ['Religiosa', 'Justa'], imagemPasta: 'religiosos', img: '' },
  { nome: 'Santa Josefina Bakhita', categorias: ['Religiosa', 'Justa'], imagemPasta: 'religiosos', img: '' },

  // ═══════════════════════════════════════════════
  // LEIGOS E JUSTOS
  // ═══════════════════════════════════════════════
  { nome: 'São José', categorias: ['Justo'], imagemPasta: 'leigos', img: '' },
  { nome: 'Santa Maria Madalena', categorias: ['Justa'], imagemPasta: 'leigos', img: '' },
  { nome: 'Santa Ana', categorias: ['Justa'], imagemPasta: 'leigos', img: '' },
  { nome: 'São Joaquim', categorias: ['Justo'], imagemPasta: 'leigos', img: '' },
  { nome: 'Santa Isabel', categorias: ['Justa'], imagemPasta: 'leigos', img: '' },
  { nome: 'Santa Marta', categorias: ['Justa'], imagemPasta: 'leigos', img: '' },
  { nome: 'São Lázaro', categorias: ['Justa'], imagemPasta: 'leigos', img: '' },
  { nome: 'Santa Verônica', categorias: ['Justa'], imagemPasta: 'leigos', img: '' },
  { nome: 'São Dimas', categorias: ['Justo'], imagemPasta: 'leigos', img: '' },
  { nome: 'Santa Mônica', categorias: ['Justa'], imagemPasta: 'leigos', img: '' },
  { nome: 'Santa Helena', categorias: ['Justa', 'Imperatriz'], imagemPasta: 'leigos', img: '' },
  { nome: 'São Luís de França', categorias: ['Rei', 'Justo'], imagemPasta: 'leigos', img: '' },
  { nome: 'Santa Isabel de Portugal', categorias: ['Rainha', 'Justa'], imagemPasta: 'leigos', img: '' },
  { nome: 'Santa Isabel da Hungria', categorias: ['Rainha', 'Justa'], imagemPasta: 'leigos', img: '' },
  { nome: 'Santa Margarida da Escócia', categorias: ['Rainha', 'Justa'], imagemPasta: 'leigos', img: '' },
  { nome: 'São Fernando III de Castela', categorias: ['Rei', 'Justo'], imagemPasta: 'leigos', img: '' },
  { nome: 'São Casimiro', categorias: ['Justo'], imagemPasta: 'leigos', img: '' },
  { nome: 'Santo Estevão da Hungria', categorias: ['Rei', 'Justo'], imagemPasta: 'leigos', img: '' },
  { nome: 'Santa Clotilde', categorias: ['Rainha', 'Justa'], imagemPasta: 'leigos', img: '' },
  { nome: 'Santa Eduviges', categorias: ['Justa'], imagemPasta: 'leigos', img: '' },
  { nome: 'São Nuno de Santa Maria', categorias: ['Justo'], imagemPasta: 'leigos', img: '' },
  { nome: 'São Pier Giorgio Frassati', categorias: ['Justo'], imagemPasta: 'leigos', img: '' },
  { nome: 'São Domingos Sávio', categorias: ['Justo'],pasta: 'leigos', img: 'S' },
  { nome: 'São Giuseppe Moscati', categorias: ['Médico', 'Justo'], imagemPasta: 'leigos', img: '' },
  { nome: 'Santa Gianna Beretta Molla', categorias: ['Médica', 'Justa'], imagemPasta: 'leigos', img: '' },
  { nome: 'Santa Zita', categorias: ['Justa'], imagemPasta: 'leigos', img: '' },
  { nome: 'São Roque', categorias: ['Justo'], imagemPasta: 'leigos', img: '' },
  { nome: 'Santa Kateri Tekakwitha', categorias: ['Justa'], imagemPasta: 'leigos', img: '' },
  { nome: 'São Juan Diego', categorias: ['Justo'], imagemPasta: 'leigos', img: '' },
  { nome: 'Santa Francisca Romana', categorias: ['Justa'], imagemPasta: 'leigos', img: '' },
  { nome: 'São Nicolau de Flüe', categorias: ['Justo'], imagemPasta: 'leigos', img: '' },
  { nome: 'São Homobono', categorias: ['Justo'], imagemPasta: 'leigos', img: '' },
  { nome: 'São Gonçalo de Amarante', categorias: ['Justo'], imagemPasta: 'leigos', img: '' },
  { nome: 'Santa Brígida de Kildare', categorias: ['Abadessa'], imagemPasta: 'leigos', img: '' },
  { nome: 'São Isidoro Lavrador', categorias: ['Justo'], pasta: 'leigos', img: 'S' },
];

/* ============================================================
   PROCESSAMENTO — Atribui 'imagemCard' se img === 'S'
   ============================================================ */

export const SANTOS: SantoRegistry[] = DADOS_BRUTOS
  .map((s) => {
    const slug = gerarSlug(s.nome);
    const pastaImg = s.imagemPasta ?? s.pasta;
    const temImg = s.img === 'S' || s.img === 's';

    return {
      nome: s.nome,
      slug,
      categorias: s.categorias,
      pasta: s.pasta,
      temBiografia: temImg,
      imagemCard: (temImg && pastaImg)
        ? `/santos/cards/${pastaImg}/${slug}.png`
        : undefined,
    };
  })
  .sort((a, b) => {
    // Santos com imagem ficam primeiro.
    // Dentro de cada grupo, mantém a ordem original.
    const aTemImagem = !!a.imagemCard;
    const bTemImagem = !!b.imagemCard;

    if (aTemImagem === bTemImagem) return 0;

    return bTemImagem ? 1 : -1;
  });

/* ============================================================
   HELPERS DE CONSULTA
   ============================================================ */

export function getSantoBySlug(slug: string): SantoRegistry | undefined {
  return SANTOS.find((s) => s.slug === slug);
}

export function getSantoByPastaSlug(pasta: string, slug: string): SantoRegistry | undefined {
  return SANTOS.find((s) => s.pasta === pasta && s.slug === slug);
}

export function getSantosPorCategoria(categoria: Categoria): SantoRegistry[] {
  return SANTOS.filter((s) => s.categorias.includes(categoria));
}

export function getTodasCategorias(): Categoria[] {
  const set = new Set<Categoria>();
  SANTOS.filter((s) => s.temBiografia).forEach((s) => s.categorias.forEach((c) => set.add(c)));
  return Array.from(set);
}

export function getContagemPorCategoria(): Record<string, number> {
  const contagem: Record<string, number> = {};
  SANTOS.filter((s) => s.temBiografia).forEach((s) => {
    s.categorias.forEach((c) => {
      contagem[c] = (contagem[c] ?? 0) + 1;
    });
  });
  return contagem;
}

export function getSantosComBiografia(): SantoRegistry[] {
  return SANTOS.filter((s) => s.temBiografia);
}

export function getTotalSantos(): number {
  return SANTOS.length;
}

export function buscarSantos(termo: string): SantoRegistry[] {
  if (!termo.trim()) return SANTOS;
  const normalizado = termo
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
  return SANTOS.filter((s) =>
    s.slug.includes(normalizado) ||
    s.nome
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .includes(normalizado)
  );
}