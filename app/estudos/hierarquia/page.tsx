"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import s from "./hierarquia.module.css";
import { secoes, coresLegendaPiramide } from "./data";
import type { Cargo, Nivel, Secao } from "./data";

/* ══════════════════════════════════════
   MODAL DE CARGO (drawer lateral)
══════════════════════════════════════ */
function CargoModal({
  cargo,
  cor,
  onClose,
}: {
  cargo: Cargo | null;
  cor: string;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!cargo) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [cargo, onClose]);

  if (!cargo) return null;

  return (
    <div
      className={s.modalBackdrop}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <aside
        className={s.modalPanel}
        onClick={(e) => e.stopPropagation()}
        style={{ "--nivel-cor": cor } as React.CSSProperties}
      >
        <button className={s.modalClose} onClick={onClose} aria-label="Fechar">
          ×
        </button>

        <div className={s.modalHeader}>
          <span className={s.modalKicker}>{cargo.subtitulo}</span>
          <h3 className={s.modalTitulo}>{cargo.nome}</h3>
          <div className={s.modalOrn} />
        </div>

        <div
          className={s.modalCorpo}
          dangerouslySetInnerHTML={{ __html: cargo.corpo }}
        />

        <div className={s.modalTags}>
          {cargo.tags.map((t) => (
            <span key={t} className={s.modalTag}>
              {t}
            </span>
          ))}
        </div>
      </aside>
    </div>
  );
}

/* ══════════════════════════════════════
   CARD DE CARGO
══════════════════════════════════════ */
function CargoCard({
  cargo,
  onClick,
  index,
}: {
  cargo: Cargo;
  onClick: () => void;
  index: number;
}) {
  return (
    <button
      className={s.cargoCard}
      onClick={onClick}
      type="button"
    >
      <span className={s.cargoIndex}>
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className={s.cargoNome}>{cargo.nome}</span>
      <span className={s.cargoSub}>{cargo.subtitulo}</span>
      <span className={s.cargoArrow}>→</span>
    </button>
  );
}

/* ══════════════════════════════════════
   BLOCO DE NÍVEL
══════════════════════════════════════ */
function NivelBloco({
  nivel,
  onOpenCargo,
}: {
  nivel: Nivel;
  onOpenCargo: (cargo: Cargo, cor: string) => void;
}) {
  const [aberto, setAberto] = useState(true); // ← Já abertos por padrão

  return (
    <article
      className={`${s.nivelBloco} ${aberto ? s.nivelAberto : ""}`}
      style={{ "--nivel-cor": nivel.cor } as React.CSSProperties}
    >
      <button
        className={s.nivelHead}
        onClick={() => setAberto((v) => !v)}
        type="button"
      >
        <span className={s.nivelIcone}>{nivel.icone}</span>
        <span className={s.nivelInfo}>
          <strong>{nivel.titulo}</strong>
          <em>{nivel.subtitulo}</em>
        </span>
        <span className={s.nivelCount}>
          {nivel.cargos.length}
          <small>cargos</small>
        </span>
        <span className={s.nivelSeta}>▾</span>
      </button>

      <div className={`${s.nivelBody} ${aberto ? s.nivelBodyAberto : ""}`}>
        <div className={s.cargoGrid}>
          {nivel.cargos.map((c, ci) => (
            <CargoCard
              key={c.nome}
              cargo={c}
              index={ci}
              onClick={() => onOpenCargo(c, nivel.cor)}
            />
          ))}
        </div>
      </div>
    </article>
  );
}

/* ══════════════════════════════════════
   SEÇÃO
══════════════════════════════════════ */
function SecaoBloco({
  secao,
  onOpenCargo,
}: {
  secao: Secao;
  onOpenCargo: (cargo: Cargo, cor: string) => void;
}) {
  const isPiramide = secao.tipo === "piramide";
  const totalCargos = secao.niveis.reduce(
    (acc, n) => acc + n.cargos.length,
    0
  );

  return (
    <section
      className={`${s.secao} ${isPiramide ? s.secaoPiramide : ""}`}
      id={secao.id}
      style={{ "--nivel-cor": secao.cor } as React.CSSProperties}
    >
      <div className={s.secaoHeader}>
        <span className={s.secaoNumero}>{secao.numero || ""}</span>
        <div className={s.secaoTopo}>
          <span className={s.secaoIcone}>{secao.icone}</span>
          <div className={s.secaoMeta}>
            <span className={s.secaoSub}>{secao.subtitulo}</span>
            <h3 className={s.secaoTitulo}>{secao.titulo}</h3>
          </div>
          <div className={s.secaoStats}>
            <span>
              <strong>{secao.niveis.length}</strong>
              <em>{secao.niveis.length === 1 ? "grupo" : "grupos"}</em>
            </span>
            <span>
              <strong>{totalCargos}</strong>
              <em>{totalCargos === 1 ? "cargo" : "cargos"}</em>
            </span>
          </div>
        </div>
        <p className={s.secaoDesc}>{secao.descricao}</p>
      </div>

      {isPiramide && (
        <div className={s.legendaPiramide}>
          {coresLegendaPiramide.map((item) => (
            <div key={item.label} className={s.legendaItem}>
              <span
                className={s.legendaDot}
                style={{ background: item.cor, color: item.cor }}
              />
              {item.label}
            </div>
          ))}
        </div>
      )}

      <div
        className={`${s.niveisWrap} ${
          isPiramide ? s.niveisPiramide : s.niveisGrid
        }`}
      >
        {secao.niveis.map((nivel) => (
          <NivelBloco
            key={nivel.id}
            nivel={nivel}
            onOpenCargo={onOpenCargo}
          />
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════════════════════
   NAV
══════════════════════════════════════ */
function SecaoNav() {
  const scrollTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className={s.secaoNav}>
      <span className={s.navLabel}>Índice</span>
      {secoes.map((sec) => (
        <button
          key={sec.id}
          className={s.navBtn}
          onClick={() => scrollTo(sec.id)}
          type="button"
        >
          <span
            className={s.navDot}
            style={{ background: sec.cor }}
          />
          {sec.titulo}
        </button>
      ))}
    </nav>
  );
}

/* ══════════════════════════════════════
   PÁGINA
══════════════════════════════════════ */
export default function HierarquiaPage() {
  const [cargoAtivo, setCargoAtivo] = useState<{
    cargo: Cargo;
    cor: string;
  } | null>(null);

  const abrirCargo = useCallback((cargo: Cargo, cor: string) => {
    setCargoAtivo({ cargo, cor });
  }, []);

  const fechar = useCallback(() => setCargoAtivo(null), []);

  return (
    <main className={s.page}>
      <div className={s.topBar}>
        <Link href="/estudos" className={s.btnVoltar}>
          Voltar aos Estudos
        </Link>
      </div>

      <header className={s.hero}>
        <span className={s.heroKicker}>Ecclesia Catholica</span>
        <h1>
          A Estrutura Viva
          <br />
          <em>da Igreja Católica</em>
        </h1>
        <p>
          Hierarquia sacramental, governo, vida consagrada, ministérios e a
          vocação de todo batizado — cada dimensão do Corpo de Cristo
          explicada em profundidade.
        </p>
        <div className={s.heroStats}>
          <div>
            <strong>{secoes.length}</strong>
            <em>Seções</em>
          </div>
          <div>
            <strong>
              {secoes.reduce(
                (a, s) =>
                  a + s.niveis.reduce((ac, n) => ac + n.cargos.length, 0),
                0
              )}
            </strong>
            <em>Cargos</em>
          </div>
          <div>
            <strong>3</strong>
            <em>Graus da Ordem</em>
          </div>
        </div>
      </header>

      <SecaoNav />

      {secoes.map((secao) => (
        <SecaoBloco
          key={secao.id}
          secao={secao}
          onOpenCargo={abrirCargo}
        />
      ))}

      <CargoModal
        cargo={cargoAtivo?.cargo ?? null}
        cor={cargoAtivo?.cor ?? "#c9a24b"}
        onClose={fechar}
      />

      <footer className={s.footer}>
        <p>
          <em>Ecclesia Catholica</em>
          <br />© 2026 — Lux Fidei · Luz da Fé Católica
        </p>
      </footer>
    </main>
  );
}