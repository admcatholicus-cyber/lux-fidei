'use client';

import React, { useEffect, useState, useCallback } from 'react';
import styles from '../_styles/pwa-toast.module.css';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function PwaInstallToast() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Fecha o aviso e salva a preferência na sessão para não incomodar o usuário novamente
  const fecharAviso = useCallback(() => {
    setIsVisible(false);
    try {
      sessionStorage.setItem('lux_pwa_recusado', 'true');
    } catch {
      // Trata casos em que o navegador bloqueia acesso ao sessionStorage
    }
  }, []);

  useEffect(() => {
    // 1. Verifica se o usuário já está navegando dentro do aplicativo instalado
    const isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (navigator as unknown as { standalone?: boolean }).standalone === true;

    if (isStandalone) return;

    // 2. Verifica se o usuário já dispensou o aviso durante esta sessão
    try {
      if (sessionStorage.getItem('lux_pwa_recusado')) return;
    } catch {
      // Ignora erros de acesso ao sessionStorage
    }

    // 3. Captura EXCLUSIVAMENTE o evento nativo de instalação do navegador
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault(); // Evita a barra mini-infobar padrão do Chrome
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setIsVisible(true);
    };

    // 4. Caso o aplicativo seja instalado com sucesso, esconde o aviso imediatamente
    const handleAppInstalled = () => {
      setIsVisible(false);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  // Timer de fechamento automático em 6 segundos (Pausa ao passar o mouse)
  useEffect(() => {
    if (!isVisible || isPaused) return;

    const timerFechamento = setTimeout(() => {
      fecharAviso();
    }, 6000);

    return () => clearTimeout(timerFechamento);
  }, [isVisible, isPaused, fecharAviso]);

  // Ação do botão "Adicionar" — Dispara a janela nativa do sistema
  const instalarApp = async () => {
    if (!deferredPrompt) return;

    // Aciona o prompt nativo oficial do navegador (Chrome/Edge/Android)
    await deferredPrompt.prompt();

    // Aguarda a escolha do usuário na janela nativa
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
    }
    fecharAviso();
  };

  // GUARDA DE SEGURANÇA: Se o evento nativo não estiver pronto ou estivar invisível, NADA é renderizado.
  if (!isVisible || !deferredPrompt) return null;

  return (
    <aside
      className={`${styles.wrapper} ${isPaused ? styles.paused : ''}`}
      role="alert"
      aria-live="polite"
      aria-label="Notificação de instalação do aplicativo Lux Fidei"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={styles.caixa}>
        <div className={styles.conteudo}>
          <div className={styles.icone} aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
              <line x1="12" y1="18" x2="12.01" y2="18"></line>
            </svg>
          </div>
          
          <div className={styles.textos}>
            <span className={styles.titulo}>Lux Fidei</span>
            <p className={styles.mensagem}>Deseja adicionar nosso acervo à tela inicial do seu dispositivo?</p>
          </div>
        </div>

        <div className={styles.botoes}>
          <button 
            onClick={fecharAviso} 
            className={styles.btnNao}
            aria-label="Recusar instalação por enquanto"
          >
            Agora não
          </button>
          <button 
            onClick={instalarApp} 
            className={styles.btnSim}
            aria-label="Instalar aplicativo Lux Fidei"
          >
            Adicionar
          </button>
        </div>

        {/* Barra de Progresso Dourada de 6 Segundos */}
        <div className={styles.barraProgressoTrack}>
          <div className={styles.barraProgresso} />
        </div>
      </div>
    </aside>
  );
}