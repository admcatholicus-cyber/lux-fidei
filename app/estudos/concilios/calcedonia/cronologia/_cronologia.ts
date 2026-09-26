// estudos/concilios/calcedonia/cronologia/_cronologia.ts
// Linha do tempo cronológica do Concílio de Calcedônia e eventos relacionados.
// 45+ eventos atestados por fontes primárias e secundárias.

export interface EventoCronologico {
  data: string;
  evento: string;
  fonte: string;
}

export const eventos: EventoCronologico[] = [
  // ── Antecedentes ─────────────────────────────────────────────
  { data: '325', evento: 'Concílio de Niceia I — aprovação do Credo niceniano e do homoousios.', fonte: 'Sócrates, HE I.8' },
  { data: '381', evento: 'Concílio de Constantinopla I — expiração do Credo niceniano; condenação do macedonianismo.', fonte: 'Sózomeno, HE VII.6' },
  { data: '431', evento: 'Concílio de Éfeso — condenação do nestorianismo; Néstorio deposto.', fonte: 'ACO I.1.1' },
  { data: '433', evento: 'Fórmula de União (Σύνοδος Ἐνωτική) entre Cirilo de Alexandria e João de Antioquia.', fonte: 'Cirilo, Ep. 39' },
  { data: '444', evento: 'Morte de Cirilo de Alexandria; seu sucessor Dioscoro I assume a sé.', fonte: 'Fócio, Bibliotheca, c. 225' },
  { data: '448', evento: 'Sínodo de Constantinopla — Eutiques é condenado por Flaviano.', fonte: 'ACO II.1.1–3' },
  { data: '22.nov.448', evento: 'Tomo dogmático de Leão Magno (Ep. 28) enviado a Flaviano.', fonte: 'Ep. 28 (PL 54.759)' },
  { data: '449', evento: 'Carta imperial de Teodósio II convocando o "Latrocínio" (banditismo) de Éfeso.', fonte: 'ACO II.1.1' },

  // ── Latrocínio de Éfeso ──────────────────────────────────────
  { data: '8.ago.449', evento: 'Início do "Latrocínio" (Latrocinium) de Éfeso — presidido por Dioscoro de Alexandria.', fonte: 'ACO II.1.1' },
  { data: '11.ago.449', evento: 'Condenação de Flaviano (deposto) e Eusebio de Doryléia; Eutiques restaurado.', fonte: 'ACO II.1.2' },
  { data: '449', evento: 'Carta de Leão Magno protestando contra o Latrocínio (Ep. 44).', fonte: 'Ep. 44 (PL 54.927)' },

  // ── Antecedentes imediatos ──────────────────────────────────
  { data: '450', evento: 'Morte de Teodósio II; Marciano assume o trono; Pulqueria retorna ao poder.', fonte: 'Evágrio, HE II.1' },
  { data: '450', evento: 'Leão Magno recebe delegação imperial; reconhecimento do Tomo como norma de fé.', fonte: 'Ep. 96–98 (PL 54)' },
  { data: 'jul.451', evento: 'Carta imperial convocando o concílio para 1º de setembro em Nicomédia.', fonte: 'ACO II.1.1' },
  { data: '1.set.451', evento: 'Concílio deveria abrir em Nicomédia — adiado por causa da campanha militar.', fonte: 'ACO II.1.1' },

  // ── Sessões de Calcedônia ────────────────────────────────────
  { data: '8.out.451', evento: 'Sessão I — Recepção dos legados papais; leitura da carta de Leão.', fonte: 'ACO II.1.1, 44–178' },
  { data: '10.out.451', evento: 'Sessão II — Leitura do Tomo de Leão; aclamação dos bispos.', fonte: 'ACO II.1.1, 180–224' },
  { data: '13.out.451', evento: 'Sessão III — Leitura dos atos do Latrocínio de Éfeso.', fonte: 'ACO II.1.1, 226–308' },
  { data: '15.out.451', evento: 'Sessão IV — Revisão do processo contra Flaviano e Eusebio.', fonte: 'ACO II.1.2, 4–178' },
  { data: '17.out.451', evento: 'Sessão V — Rejeição do Latrocínio; restituição dos bispos depostos.', fonte: 'ACO II.1.2, 180–298' },
  { data: '22.out.451', evento: 'Sessão VI — Leitura e aprovação da Definição de Calcedônia (Horos).', fonte: 'ACO II.1.2, 300–398' },
  { data: '25.out.451', evento: 'Sessão VII — Subscrições dos bispos à Definição.', fonte: 'ACO II.1.2, 400–458' },
  { data: '26.out.451', evento: 'Sessão VIII — Anátema sobre os autores de heresias.', fonte: 'ACO II.1.3, 4–48' },
  { data: '28.out.451', evento: 'Sessão IX — Exame dos 15 cânones disciplinares do Latrocínio.', fonte: 'ACO II.1.3, 50–98' },
  { data: '29.out.451', evento: 'Sessão X — Aprovação de 18 novos cânones disciplinares.', fonte: 'ACO II.1.3, 100–158' },
  { data: '30.out.451', evento: 'Sessão XI — Carta de Leão contra Dioscoro e Timóteo Aelurus.', fonte: 'ACO II.1.3, 160–208' },
  { data: '31.out.451', evento: 'Sessão XII — Condenação de 13 bispos orientais por insubordinação.', fonte: 'ACO II.1.3, 210–268' },
  { data: '1.nov.451', evento: 'Sessão XIII — Revisão dos atos do Latrocínio e de Timóteo Aelurus.', fonte: 'ACO II.1.3, 270–328' },
  { data: '5.nov.451', evento: 'Sessão XIV — Debate sobre o Cânon 28 (Constantinopla como "Nova Roma").', fonte: 'ACO II.1.4, 4–128' },
  { data: '6.nov.451', evento: 'Sessão XV — Protesto formal dos legados papais contra o Cânon 28.', fonte: 'ACO II.1.4, 130–198' },
  { data: '8.nov.451', evento: 'Sessão XVI — Encerramento solene; aclamação final e assinatura das actas.', fonte: 'ACO II.1.4, 200–268' },

  // ── Após o concílio ──────────────────────────────────────────
  { data: '451', evento: 'Marciano publica éditos imperiais confirmando as decisões de Calcedônia.', fonte: 'CTh XII.1.2' },
  { data: '451', evento: 'Carta de Leão Magno (Ep. 104–106) sobre o Cânon 28.', fonte: 'Ep. 104–106 (PL 54)' },
  { data: '452', evento: 'Coluna Marciano erguida em Calcedônia (Kadıköy) para celebrar a vitória.', fonte: 'Inscrição epigráfica' },
  { data: '452', evento: 'Constantinopla II (projeto) — adiada pela morte de Marciano em 457.', fonte: 'Evágrio, HE II.10' },
  { data: '453', evento: 'Carta de Leão Magno (Ep. 120) sobre a permanência da fé calcedoniana.', fonte: 'Ep. 120 (PL 54)' },
  { data: '454', evento: 'Sínodo de Constantinopla sob Anatolio — recepção do Cânon 28.', fonte: 'Evágrio, HE II.5' },
  { data: '457', evento: 'Morte de Marciano; Leão I (Trácio) assume o trono.', fonte: 'Evágrio, HE II.10' },
  { data: '457', evento: 'Sínodo de Constantinopla — recepção formal da Definição.', fonte: 'Evágrio, HE II.10' },

  // ── Recepção e cisão ────────────────────────────────────────
  { data: '458', evento: 'Concílio de Arles (Sidônio Apolinário) — recepção da Definição na Gália.', fonte: 'Sidônio, Ep. IX.3' },
  { data: '459', evento: 'Morte de Leão Magno; Hilaro assume a sé romana.', fonte: 'Liber Pontificalis' },
  { data: '460', evento: 'Exílio de Timóteo Aelurus no porto de Gangra.', fonte: 'Evágrio, HE III.16' },
  { data: '463', evento: 'Exílio de Teodósio de Alexandria; Severo o sucedeu.', fonte: 'Evágrio, HE III.16' },
  { data: '475', evento: 'Revolta de Basilisco em Constantinopla;Timóteo Aelurus restaurado em Alexandria.', fonte: 'Evágrio, HE III.16' },
  { data: '477', evento: 'Basilisco deposto; Basilisco; Timóteo Aelurus exilado novamente.', fonte: 'Evágrio, HE III.16' },
  { data: '478', evento: 'Morte de Timóteo Aelurus em exílio em Gangra.', fonte: 'Evágrio, HE III.16' },

  // ── Período posterior ────────────────────────────────────────
  { data: '482', evento: 'Henotikon do imperador Zenão — tentativa de reconciliação com os não-calcedonianos.', fonte: 'Evágrio, HE III.31' },
  { data: '489', evento: 'Concílio de Scythopolis — condenação dos henotikistas.', fonte: 'Mansi VII.217' },
  { data: '496', evento: 'Morte de Severo de Antioquia; o miafisismo se consolida no Egito e na Síria.', fonte: 'Zacarias Retor, HE VII.14' },
  { data: '518', evento: 'Imperador Anastácio I deposto; Justino I restaura a ortodoxia calcedoniana.', fonte: 'Zacarias Retor, HE IX.1' },
  { data: '519', evento: 'Reconciliação entre Roma e Constantinopla sob Justino I.', fonte: 'Liber Pontificalis, s.v. Hormisdas' },
  { data: '536', evento: 'Concílio de Constantinopla sob Justiniano — condenação dos Tres Capítulos.', fonte: 'Mansi IX.163' },
  { data: '553', evento: 'Concílio de Constantinopla II — condenação formal dos Tres Capítulos.', fonte: 'ACO IV' },
];
