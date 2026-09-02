'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';

type Tema = 'claro' | 'sepia' | 'escuro';
type ModoTopo = 'botao' | 'gesto';

type SettingsContextType = {
  tema: Tema;
  setTema: (t: Tema) => void;

  tamanhoTexto: number;
  setTamanhoTexto: (v: number) => void;

  larguraLeitura: number;
  setLarguraLeitura: (v: number) => void;

  modoTopo: ModoTopo;
  setModoTopo: (m: ModoTopo) => void;
};

const SettingsContext = createContext<SettingsContextType | null>(null);

export function useSettings() {
  const ctx = useContext(SettingsContext);

  if (!ctx) {
    throw new Error(
      'useSettings deve estar dentro de <SettingsProvider>'
    );
  }

  return ctx;
}

const STORAGE_KEY = 'lux-fidei-settings';

const TAMANHO_TEXTO_PADRAO = 100;
const LARGURA_LEITURA_PADRAO = 100;

export function SettingsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [tema, setTemaState] = useState<Tema>('claro');

  const [tamanhoTexto, setTamanhoTextoState] =
    useState<number>(TAMANHO_TEXTO_PADRAO);

  const [larguraLeitura, setLarguraLeituraState] =
    useState<number>(LARGURA_LEITURA_PADRAO);

  const [modoTopo, setModoTopoState] =
    useState<ModoTopo>('botao');

  const [hidratado, setHidratado] = useState(false);

  // ============================================================
  // CARREGAR PREFERÊNCIAS
  // ============================================================

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);

      if (raw) {
        const s = JSON.parse(raw);

        if (
          s.tema === 'claro' ||
          s.tema === 'sepia' ||
          s.tema === 'escuro'
        ) {
          setTemaState(s.tema);
        }

        if (
          typeof s.tamanhoTexto === 'number' &&
          s.tamanhoTexto >= 80 &&
          s.tamanhoTexto <= 130
        ) {
          setTamanhoTextoState(s.tamanhoTexto);
        }

        if (
          typeof s.larguraLeitura === 'number' &&
          s.larguraLeitura >= 70 &&
          s.larguraLeitura <= 150
        ) {
          setLarguraLeituraState(s.larguraLeitura);
        }

        if (
          s.modoTopo === 'botao' ||
          s.modoTopo === 'gesto'
        ) {
          setModoTopoState(s.modoTopo);
        }
      }
    } catch {
      // Usa os valores padrão caso o localStorage esteja inválido.
    }

    setHidratado(true);
  }, []);

  // ============================================================
  // SALVAR PREFERÊNCIAS
  // ============================================================

  useEffect(() => {
    if (!hidratado) return;

    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          tema,
          tamanhoTexto,
          larguraLeitura,
          modoTopo,
        })
      );
    } catch {
      // Ignora erros de localStorage.
    }
  }, [
    tema,
    tamanhoTexto,
    larguraLeitura,
    modoTopo,
    hidratado,
  ]);

  // ============================================================
  // APLICAR CONFIGURAÇÕES AO <html>
  // ============================================================

  useEffect(() => {
    if (!hidratado) return;

    const html = document.documentElement;

    html.setAttribute('data-tema', tema);

    /*
     * IMPORTANTE:
     *
     * --tamanho-texto será UNITÁRIO:
     *
     * 100% -> 1
     * 110% -> 1.1
     * 120% -> 1.2
     * 130% -> 1.3
     *
     * Isso permite usar:
     *
     * calc(15.5px * var(--tamanho-texto))
     */
    html.style.setProperty(
      '--tamanho-texto',
      String(tamanhoTexto / 100)
    );

    /*
     * CORREÇÃO:
     * Criamos um fator unitário para a largura também.
     * Isso permite fazer contas no CSS: calc(950px * var(--fator-largura))
     */
    html.style.setProperty(
      '--fator-largura',
      String(larguraLeitura / 100)
    );

    /*
     * Mantida a variável em % por garantia.
     */
    html.style.setProperty(
      '--largura-leitura',
      `${larguraLeitura}%`
    );

    /*
     * Também deixamos uma variável explícita para casos
     * em que seja necessário saber o percentual original.
     */
    html.style.setProperty(
      '--tamanho-texto-percentual',
      `${tamanhoTexto}%`
    );

    html.style.setProperty(
      '--largura-leitura-percentual',
      `${larguraLeitura}%`
    );
  }, [
    tema,
    tamanhoTexto,
    larguraLeitura,
    hidratado,
  ]);

  // ============================================================
  // PROVIDER
  // ============================================================

  return (
    <SettingsContext.Provider
      value={{
        tema,
        setTema: setTemaState,

        tamanhoTexto,
        setTamanhoTexto: setTamanhoTextoState,

        larguraLeitura,
        setLarguraLeitura: setLarguraLeituraState,

        modoTopo,
        setModoTopo: setModoTopoState,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}