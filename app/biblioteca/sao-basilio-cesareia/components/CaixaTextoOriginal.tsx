"use client";
import { useState } from "react";
import styles from "../biblioteca-basilio.module.css";

interface Props {
  textoOriginal: string;
  idioma?: string;
}

export default function CaixaTextoOriginal({
  textoOriginal,
  idioma = "inglês",
}: Props) {
  const [aberto, setAberto] = useState(false);

  if (!textoOriginal) return null;

  return (
    <div className={styles.containerOriginal}>
      <button
        type="button"
        onClick={() => setAberto(!aberto)}
        className={styles.btnOriginalToggle}
        aria-expanded={aberto}
      >
        <span>Ver texto original ({idioma})</span>
        <span className={styles.setaToggle}>{aberto ? "▲" : "▼"}</span>
      </button>

      {aberto && (
        <div className={styles.boxTextoOriginal}>
          <h4 className={styles.tituloOriginal}>Texto original ({idioma})</h4>
          <div className={styles.corpoTextoOriginal}>
            {textoOriginal.split("\n\n").map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
