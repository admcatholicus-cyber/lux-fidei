import layout from '../_styles/layout.module.css';
import content from '../_styles/content.module.css';
import cards from '../_styles/cards.module.css';

export default function Mistica() {
    return (
        <section id="mistica" className={`${layout.secao} ${layout.secaoClara}`}>
            <div className={layout.container}>
                <div className={layout.secaoCabecalho}>
                    <p className={layout.secaoSupratitulo}>Capítulo IX</p>
                    <h2 className={layout.secaoTitulo}>Teologia Mística e Santidade</h2>
                    <div className={layout.secaoSeparador}>
                        <span className={layout.separadorLinha} />
                        <i className="fas fa-fire"></i>
                        <span className={layout.separadorLinha} />
                    </div>
                    <p className={layout.secaoDescricao}>As Três Vias da Vida Espiritual rumo à Santidade Plena</p>
                </div>

                <div className={content.conteudoTexto}>
                    <p>
                        A tradição católica, desde os Padres da Igreja até os grandes mestres espirituais, descreve o caminho da santidade como um <strong>itinerário em três etapas</strong> (ou «vias»), que correspondem ao crescimento progressivo da alma na graça:
                    </p>

                    {/* VIA PURGATIVA */}
                    <div id="via-purgativa" className={cards.viaCard}>
                        <div className={`${cards.viaHeader} ${cards.viaPurgativaHeader}`}>
                            <div className={cards.viaNumero}>I</div>
                            <div>
                                <h3>Via Purgativa</h3>
                                <p className={cards.viaSubtitulo}>Dos principiantes</p>
                            </div>
                        </div>
                        <div className={cards.viaBody}>
                            <h4>Descrição</h4>
                            <p>
                                É a etapa inicial da santidade. Corresponde à <strong>purificação da alma dos pecados e dos vícios</strong>. O principiante luta contra o pecado mortal, depois contra o pecado venial deliberado, e começa a praticar as virtudes com esforço.
                            </p>
                            <h4>Elementos característicos</h4>
                            <ul className={content.listaTeologica}>
                                <li><strong>Exame de consciência</strong> sério e regular.</li>
                                <li><strong>Combate aos pecados capitais</strong> (soberba, avareza, luxúria, ira, gula, inveja, preguiça).</li>
                                <li><strong>Mortificação</strong> dos sentidos e das paixões desordenadas.</li>
                                <li><strong>Arrependimento</strong> sincero e confissão frequente.</li>
                                <li><strong>Desapego</strong> progressivo das criaturas.</li>
                            </ul>
                            <h4>Iluminação de São João da Cruz</h4>
                            <p>
                                São João da Cruz descreve a transição da via purgativa para a iluminativa como a <strong>«noite dos sentidos»</strong>: Deus retira as consolações sensíveis para purificar o amor da alma, que deve aprender a amar a Deus não pelos seus dons, mas por Ele mesmo.
                            </p>
                        </div>
                    </div>

                    {/* VIA ILUMINATIVA */}
                    <div id="via-iluminativa" className={cards.viaCard}>
                        <div className={`${cards.viaHeader} ${cards.viaIluminativaHeader}`}>
                            <div className={cards.viaNumero}>II</div>
                            <div>
                                <h3>Via Iluminativa</h3>
                                <p className={cards.viaSubtitulo}>Dos proficientes</p>
                            </div>
                        </div>
                        <div className={cards.viaBody}>
                            <h4>Descrição</h4>
                            <p>
                                Purificada dos vícios mais grosseiros, a alma entra na etapa da <strong>iluminação</strong>. É o tempo de crescimento positivo nas virtudes, de aprofundamento na contemplação e de imitação mais intensa de Cristo.
                            </p>
                            <h4>Elementos característicos</h4>
                            <ul className={content.listaTeologica}>
                                <li><strong>Prática habitual das virtudes</strong> com mais facilidade e gosto.</li>
                                <li><strong>Crescimento nos dons do Espírito Santo</strong>.</li>
                                <li><strong>Contemplação adquirida</strong>: a oração torna-se mais simples, mais silenciosa, mais amorosa.</li>
                                <li><strong>Imitação de Cristo</strong> mais consciente e configuração aos Seus mistérios.</li>
                                <li><strong>Pureza de intenção</strong> cada vez mais profunda.</li>
                            </ul>
                        </div>
                    </div>

                    {/* VIA UNITIVA */}
                    <div id="via-unitiva" className={cards.viaCard}>
                        <div className={`${cards.viaHeader} ${cards.viaUnitivaHeader}`}>
                            <div className={cards.viaNumero}>III</div>
                            <div>
                                <h3>Via Unitiva</h3>
                                <p className={cards.viaSubtitulo}>Dos perfeitos</p>
                            </div>
                        </div>
                        <div className={cards.viaBody}>
                            <h4>Descrição</h4>
                            <p>
                                É o cume da santidade nesta vida. A alma atinge a <strong>união habitual com Deus</strong>. Não se trata de mera perfeição moral, mas de uma <strong>transformação profunda do ser</strong> pela caridade consumada. Santa Teresa chama-a de «matrimônio espiritual»; São João da Cruz, de «união transformante».
                            </p>
                            <h4>Elementos característicos</h4>
                            <ul className={content.listaTeologica}>
                                <li><strong>Contemplação infusa</strong>: Deus toma a iniciativa na oração; a alma é mais passiva e receptiva.</li>
                                <li><strong>Caridade heroica</strong>: o amor a Deus e ao próximo atinge um grau extraordinário.</li>
                                <li><strong>Paz profunda</strong> mesmo no meio das tribulações.</li>
                                <li><strong>Conformidade total com a vontade de Deus</strong>.</li>
                                <li><strong>Frutos abundantes</strong> de apostolado e santificação dos outros.</li>
                            </ul>
                            <h4>A «noite do espírito»</h4>
                            <p>
                                São João da Cruz ensina que antes de entrar plenamente na via unitiva, a alma passa pela terrível <strong>«noite do espírito»</strong>: uma purificação profundíssima onde Deus parece ausente, a fé é posta à prova, e a alma sente-se abandonada. É a purificação final que remove os últimos vestígios de imperfeição e prepara a alma para a união plena.
                            </p>
                        </div>
                    </div>

                    <h3>Fenômenos místicos e santidade</h3>
                    <p>
                        Os fenômenos místicos e os carismas extraordinários pertencem à ordem dos dons concedidos por Deus para edificação da Igreja, mas <strong>não são, por si mesmos, prova de santidade pessoal</strong>. Uma pessoa pode receber graças extraordinárias sem estar plenamente transformada pela caridade.
                    </p>
                    <p>
                        Por isso, o discernimento cristão não se baseia primeiro no extraordinário, mas nos <strong>frutos permanentes</strong>: humildade, obediência, amor à verdade, paciência, pureza de intenção e fidelidade à Igreja.
                    </p>
                </div>
            </div>
        </section>
    );
}