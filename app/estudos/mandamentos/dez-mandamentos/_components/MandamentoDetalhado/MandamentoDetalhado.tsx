import { Mandamento } from '@/types/estudos/mandamentos/mandamento'
import CitacaoBiblica from '../CitacaoBiblica/CitacaoBiblica'
import styles from './mandamentoDetalhado.module.css'

interface Props {
  mandamento: Mandamento
}

export default function MandamentoDetalhado({ mandamento }: Props) {
  return (
    <div className={styles.detalhado}>

      {/* 1. TEXTO BÍBLICO */}
      <div className={styles.bloco}>
        <h4 className={styles.blocoTitulo}>Texto Bíblico</h4>
        <blockquote className={styles.textoBiblico}>
          {mandamento.textoBiblico}
        </blockquote>
        <span className={styles.referencia}>{mandamento.referenciaBiblica}</span>
      </div>

      {/* 2. O QUE DEUS ORDENA */}
      <div className={styles.bloco}>
        <h4 className={styles.blocoTituloOrdena}>
          <span className={styles.iconeOrdena}>✓</span>
          O que Deus ordena
        </h4>
        <div className={styles.gridOrdena}>
          {mandamento.oqueDeusOrdena.map((item, i) => {
            const [titulo, ...resto] = item.split(':')
            const descricao = resto.join(':').trim()
            return (
              <div key={i} className={styles.cardOrdena}>
                <span className={styles.cardTitulo}>{titulo}</span>
                {descricao && <span className={styles.cardDescricao}>{descricao}</span>}
              </div>
            )
          })}
        </div>
      </div>

      {/* 3. O QUE DEUS PROÍBE */}
      <div className={styles.bloco}>
        <h4 className={styles.blocoTituloProibe}>
          <span className={styles.iconeProibe}>✗</span>
          O que Deus proíbe
        </h4>
        <div className={styles.gridProibe}>
          {mandamento.oqueDeusProibe.map((item, i) => {
            const [titulo, ...resto] = item.split(':')
            const descricao = resto.join(':').trim()
            return (
              <div key={i} className={styles.cardProibe}>
                <span className={styles.cardTitulo}>{titulo}</span>
                {descricao && <span className={styles.cardDescricao}>{descricao}</span>}
              </div>
            )
          })}
        </div>
      </div>

      {/* 4. EXPLICAÇÃO TEOLÓGICA */}
      <div className={styles.bloco}>
        <h4 className={styles.blocoTitulo}>Explicação</h4>
        <p className={styles.explicacao}>{mandamento.explicacao}</p>
      </div>

      {/* 5. REFERÊNCIA DO CATECISMO */}
      <div className={styles.bloco}>
        <p className={styles.catecismo}>
          Referência no Catecismo: <strong>{mandamento.catecismoReferencia}</strong>
        </p>
      </div>

      {/* 6. CITAÇÕES BÍBLICAS RELACIONADAS */}
      <div className={styles.bloco}>
        <h4 className={styles.blocoTitulo}>Citações Bíblicas</h4>
        {mandamento.citacoesRelacionadas.map((citacao, i) => (
          <CitacaoBiblica key={i} texto={citacao.texto} referencia={citacao.referencia} />
        ))}
      </div>


      {/* 8. CONEXÃO COM CRISTO */}
      <div className={styles.blocoCristo}>
        <h4 className={styles.blocoTituloCristo}>✝ Conexão com Cristo</h4>
        <p className={styles.textoCristo}>{mandamento.conexaoComCristo}</p>
      </div>

      {/* 9. BEM-AVENTURANÇA RELACIONADA */}
      <div className={styles.blocoBemAventuranca}>
        <h4 className={styles.blocoTituloBemAventuranca}>☀ Bem-aventurança Relacionada</h4>
        <blockquote className={styles.textoBemAventuranca}>
          &quot;{mandamento.bemAventurancaRelacionada.texto}&quot;
          <cite className={styles.referenciaBemAventuranca}>— {mandamento.bemAventurancaRelacionada.referencia}</cite>
        </blockquote>
        <p className={styles.explicacaoBemAventuranca}>
          {mandamento.bemAventurancaRelacionada.explicacao}
        </p>
      </div>

      {/* 10. SANTO RELACIONADO */}
      <div className={styles.blocoSanto}>
        <h4 className={styles.blocoTituloSanto}>⛪ Santo que viveu este mandamento</h4>
        <div className={styles.santoInfo}>
          <h5 className={styles.santoNome}>{mandamento.santoRelacionado.nome}</h5>
          <span className={styles.santoAnos}>{mandamento.santoRelacionado.anos}</span>
        </div>
        <blockquote className={styles.santoFrase}>
          &quot;{mandamento.santoRelacionado.frase}&quot;
        </blockquote>
        <p className={styles.santoHistoria}>{mandamento.santoRelacionado.historia}</p>
      </div>

    </div>
  )
}