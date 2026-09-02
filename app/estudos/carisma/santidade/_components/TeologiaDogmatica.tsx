import layout from '../_styles/layout.module.css';
import content from '../_styles/content.module.css';
import cards from '../_styles/cards.module.css';

export default function TeologiaDogmatica() {
    return (
        <section id="teologia" className={`${layout.secao} ${layout.secaoEscura}`}>
            <div className={layout.container}>
                <div className={layout.secaoCabecalho}>
                    <p className={layout.secaoSupratitulo}>Capítulo IV</p>
                    <h2 className={layout.secaoTitulo}>Teologia Dogmática da Santidade</h2>
                    <div className={layout.secaoSeparador}>
                        <span className={layout.separadorLinha} />
                        <i className="fas fa-landmark"></i>
                        <span className={layout.separadorLinha} />
                    </div>
                </div>

                <div className={content.conteudoTexto}>
                    {/* A. Santidade Divina */}
                    <div id="santidade-divina">
                        <h3 className={content.subtituloGrande}>A. A Santidade de Deus</h3>
                        <p>
                            A santidade é um <strong>atributo divino essencial</strong>. Não é algo que Deus possui, mas algo que Deus <em>é</em>. Santo Tomás de Aquino ensina que a santidade de Deus consiste na Sua <strong>absoluta pureza</strong> (isenção de todo defeito) e na Sua <strong>perfeita firmeza no bem</strong> (cf. <em>Summa Theologiae</em>, I, q. 3, a. 1; II-II, q. 81, a. 8).
                        </p>
                        <p>
                            O Catecismo da Igreja Católica afirma: <em>«Deus, infinitamente perfeito e bem-aventurado em Si mesmo, num desígnio de pura bondade, criou livremente o homem para o tornar participante da Sua vida bem-aventurada»</em> (CIC 1). A santidade de Deus é, portanto, o fundamento de toda a economia da salvação.
                        </p>

                        <h4>Características da santidade divina</h4>
                        <div className={cards.caracteristicasGrid}>
                            {[
                                { icone: 'fa-infinity', titulo: 'Infinita', desc: 'Não tem graus, não cresce, não diminui. É absoluta.' },
                                { icone: 'fa-sun', titulo: 'Comunicável', desc: 'Embora infinita, pode ser participada pela criatura pela graça.' },
                                { icone: 'fa-shield-alt', titulo: 'Incompatível com o pecado', desc: 'A santidade divina é a razão pela qual o pecado é tão grave: ofende o Infinitamente Santo.' },
                                { icone: 'fa-heart', titulo: 'Amorosa', desc: 'A santidade de Deus não é distância fria, mas amor purificador e transformador.' },
                            ].map((c) => (
                                <div key={c.titulo} className={cards.caractCard}>
                                    <div className={cards.caractIcone}><i className={`fas ${c.icone}`}></i></div>
                                    <h5>{c.titulo}</h5>
                                    <p>{c.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* B. Santidade Trinitária */}
                    <div id="santidade-trinitaria">
                        <h3 className={content.subtituloGrande}>B. Santidade Trinitária</h3>
                        <p>A santidade pertence a cada Pessoa da Santíssima Trindade de modo próprio:</p>

                        <div className={cards.trindadeGrid}>
                            {[
                                { icone: 'fa-hand-holding', titulo: 'O Pai', desc: <>É a <strong>fonte originária</strong> de toda santidade. Jesus dirige-se a Ele como «Pai Santo» (Jo 17,11). Toda santidade procede do Pai.</> },
                                { icone: 'fa-cross', titulo: 'O Filho', desc: <>É a <strong>santidade encarnada e comunicada</strong>. «O Santo de Deus» (Mc 1,24). Por Sua Paixão e Morte, Ele nos santifica. Ele é o modelo e o caminho da santidade.</> },
                                { icone: 'fa-dove', titulo: 'O Espírito Santo', desc: <>É o <strong>Santificador por excelência</strong>. Seu próprio nome é «Santo». É Ele quem aplica aos homens a santidade conquistada por Cristo. A santificação é Sua obra própria.</> },
                            ].map((p) => (
                                <div key={p.titulo} className={cards.trindadeCard}>
                                    <div className={cards.trindadeIcone}><i className={`fas ${p.icone}`}></i></div>
                                    <h4>{p.titulo}</h4>
                                    <p>{p.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className={content.citacaoBloco}>
                            <div className={content.citacaoIcone}><i className="fas fa-quote-left"></i></div>
                            <blockquote>«A santidade é a grande empresa da Trindade no mundo: o Pai a quer, o Filho a mereceu, o Espírito Santo a realiza.»</blockquote>
                            <cite>— Pe. Réginald Garrigou-Lagrange, O.P.</cite>
                        </div>
                    </div>

                    {/* C. Santidade de Cristo */}
                    <div id="santidade-cristo">
                        <h3 className={content.subtituloGrande}>C. A Santidade de Cristo</h3>
                        <p>A santidade de Cristo é absolutamente única e irrepetível. Nele confluem:</p>
                        <ul className={content.listaTeologica}>
                            <li><strong>Santidade divina</strong>: enquanto Deus, Ele é infinitamente santo por natureza.</li>
                            <li><strong>Santidade da graça de união</strong>: a união hipostática (a natureza humana unida à Pessoa divina do Verbo) confere à humanidade de Cristo uma santidade absolutamente singular, chamada «graça de união» (<em>gratia unionis</em>).</li>
                            <li><strong>Plenitude de graça habitual</strong>: a alma humana de Cristo possui a graça santificante em grau infinito (Jo 1,14: «cheio de graça e de verdade»).</li>
                            <li><strong>Impecabilidade</strong>: Cristo não podia pecar — não por falta de liberdade, mas pela perfeição absoluta da Sua santidade.</li>
                            <li><strong>Santidade moral perfeita</strong>: todas as Suas ações humanas foram perfeitamente virtuosas e meritórias.</li>
                        </ul>
                        <p>
                            Cristo é, portanto, a <strong>medida absoluta</strong> de toda santidade. Todo santo é santo na medida em que se conforma a Cristo. <em>«A santidade cristã é essencialmente configuração a Cristo»</em> (São João Paulo II, <em>Novo Millennio Ineunte</em>, 31).
                        </p>
                    </div>

                    {/* D. Santidade da Igreja */}
                    <div id="santidade-igreja">
                        <h3 className={content.subtituloGrande}>D. A Santidade da Igreja</h3>
                        <p>
                            A Igreja é <strong>santa</strong> — é uma das quatro notas essenciais do Credo Niceno-Constantinopolitano: <em>«Creio na Igreja una, santa, católica e apostólica»</em>. Mas em que sentido ela é santa?
                        </p>

                        <h4>Fundamentos da santidade da Igreja</h4>
                        <ol className={content.listaTeologica}>
                            <li><strong>Seu Fundador é Santo</strong>: a Igreja foi fundada por Jesus Cristo, o Santo de Deus.</li>
                            <li><strong>Seu Espírito vivificador é Santo</strong>: o Espírito Santo é a alma da Igreja.</li>
                            <li><strong>Sua doutrina é santa</strong>: ensina a verdade revelada por Deus.</li>
                            <li><strong>Seus meios são santos</strong>: os sacramentos, a Palavra de Deus, a Liturgia.</li>
                            <li><strong>Seus frutos são santos</strong>: os santos canonizados são prova viva da santidade da Igreja.</li>
                            <li><strong>Sua vida é santa</strong>: a comunhão fraterna, a autoridade pastoral e a oração litúrgica formam um ambiente orgânico de santificação.</li>
                        </ol>

                        <p>
                            A Igreja não santifica apenas por atos isolados, mas por toda a sua vida. A Palavra ilumina, a Liturgia insere o fiel no mistério de Cristo, a comunhão fraterna corrige e sustenta, a autoridade pastoral guia, e os sacramentos comunicam a graça. A <strong>santidade cristã nasce dentro de um corpo</strong>, não de uma experiência individualista.
                        </p>

                        <h4>A questão dos pecadores na Igreja</h4>
                        <p>
                            Se a Igreja é santa, como pode haver pecadores nela? O Catecismo responde com precisão: <em>«A Igreja, que compreende em seu seio os pecadores, ao mesmo tempo santa e sempre necessitada de purificação, busca sem cessar a penitência e a renovação»</em> (CIC 827). A Igreja é santa nos seus meios e na sua essência, mas <strong>os seus membros são peregrinos em processo de santificação</strong>, podendo cair e levantar-se.
                        </p>
                        <p>
                            Santo Agostinho usou a imagem da <strong>rede de pescador</strong> (Mt 13,47-50): a Igreja contém peixes bons e maus, mas isso não anula a santidade da rede, que é de Cristo.
                        </p>
                    </div>

                    {/* E. Santidade e Graça */}
                    <div id="santidade-graca">
                        <h3 className={content.subtituloGrande}>E. Santidade e Graça</h3>
                        <p>
                            A relação entre santidade e graça é <strong>absolutamente intrínseca</strong>: não há santidade sem graça, e a graça tem como finalidade a santidade.
                        </p>

                        <h4>Graça santificante</h4>
                        <p>
                            A <strong>graça santificante</strong> (<em>gratia sanctificans</em> ou <em>gratia habitualis</em>) é a <strong>participação real na natureza divina</strong> (cf. 2Pd 1,4) infundida na alma pelo Batismo. Ela:
                        </p>
                        <ul className={content.listaTeologica}>
                            <li>Torna a alma <strong>agradável a Deus</strong>.</li>
                            <li>Constitui o homem em <strong>estado de graça</strong> (= estado de santidade).</li>
                            <li>Eleva a alma à <strong>ordem sobrenatural</strong>.</li>
                            <li>Torna o homem <strong>filho adotivo de Deus</strong> e <strong>herdeiro do Céu</strong>.</li>
                            <li>Infunde as <strong>virtudes teologais</strong> (fé, esperança, caridade) e os <strong>dons do Espírito Santo</strong>.</li>
                        </ul>

                        <h4>Graça atual</h4>
                        <p>
                            A <strong>graça atual</strong> é a ajuda sobrenatural transitória que Deus concede para iluminar a inteligência e fortalecer a vontade em vista de atos concretos de santidade. Sem ela, o homem não pode sequer começar a querer a santidade.
                        </p>

                        <h4>O debate teológico: graça e cooperação humana</h4>
                        <p>
                            A santidade é obra da graça, mas <strong>não sem a cooperação livre do homem</strong>. O Concílio de Trento definiu solenemente contra o protestantismo que o homem <strong>pode e deve cooperar</strong> com a graça (DS 1554-1555). A santidade não é passividade, mas <strong>sinergia</strong> entre Deus e o homem — onde Deus tem sempre a iniciativa e a primazia.
                        </p>

                        <div className={content.citacaoBloco}>
                            <div className={content.citacaoIcone}><i className="fas fa-quote-left"></i></div>
                            <blockquote>«Deus que te criou sem ti, não te salvará sem ti.»</blockquote>
                            <cite>— Santo Agostinho, Sermão 169, 11, 13</cite>
                        </div>
                    </div>

                    {/* F. Santidade e Sacramentos */}
                    <div id="santidade-sacramentos">
                        <h3 className={content.subtituloGrande}>F. Santidade e Sacramentos</h3>
                        <p>Os sacramentos são os <strong>canais ordinários da graça santificante</strong>. Cada sacramento tem relação com a santidade:</p>

                        <div className={cards.sacramentosGrid}>
                            {[
                                { icone: 'fa-water', titulo: 'Batismo', desc: <>Infunde a graça santificante, apaga o pecado original, incorpora a Cristo e à Igreja. É a <strong>porta da santidade</strong>.</> },
                                { icone: 'fa-fire', titulo: 'Confirmação', desc: <>Fortalece a graça batismal e concede os dons do Espírito Santo em plenitude para o <strong>testemunho corajoso da santidade</strong>.</> },
                                { icone: 'fa-bread-slice', titulo: 'Eucaristia', desc: <>É o <strong>alimento supremo</strong> da santidade: «Quem come a Minha carne e bebe o Meu sangue permanece em Mim e Eu nele» (Jo 6,56). A comunhão eucarística aumenta a graça e une a Cristo.</> },
                                { icone: 'fa-hands-praying', titulo: 'Penitência', desc: <><strong>Restaura a santidade perdida</strong> pelo pecado mortal. É o sacramento da «segunda tábua de salvação» (Concílio de Trento).</> },
                                { icone: 'fa-hand-holding-medical', titulo: 'Unção dos Enfermos', desc: <>Confere graça para a santificação no sofrimento e prepara a alma para a santidade definitiva.</> },
                                { icone: 'fa-book-bible', titulo: 'Ordem', desc: <>Consagra homens para o serviço da santificação do Povo de Deus através do ministério sacerdotal.</> },
                                { icone: 'fa-ring', titulo: 'Matrimônio', desc: <>Santifica o amor conjugal e a família, tornando o lar <strong>«igreja doméstica»</strong> e caminho de santidade.</> },
                            ].map((s) => (
                                <div key={s.titulo} className={cards.sacramentoCard}>
                                    <h5><i className={`fas ${s.icone}`}></i> {s.titulo}</h5>
                                    <p>{s.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}