import styles from "../biblioteca-filipe.module.css";

type Props = {
  status: "integral" | "fragmentario" | "catalogo" | "tradicional" | "autentico" | "provavel" | "rejeitado";
  compacto?: boolean;
};

const rotulos: Record<Props["status"], { texto: string; classe: string }> = {
  integral:     { texto: "Texto integral público",    classe: "statusIntegral" },
  fragmentario: { texto: "Testemunho fragmentário",   classe: "statusFragmentario" },
  catalogo:     { texto: "Catálogo crítico moderno",  classe: "statusCatalogo" },
  tradicional:  { texto: "Tradição devocional",       classe: "statusTradicional" },
  autentico:    { texto: "Autêntico",                 classe: "statusAutentico" },
  provavel:     { texto: "Autoria provável",          classe: "statusProvavel" },
  rejeitado:    { texto: "Atribuição rejeitada",      classe: "statusRejeitado" },
};

export default function EtiquetaStatus({ status, compacto = false }: Props) {
  const { texto, classe } = rotulos[status];
  return (
    <span className={`${styles.etiqueta} ${styles[classe]} ${compacto ? styles.etiquetaCompacta : ""}`}>
      {texto}
    </span>
  );
}