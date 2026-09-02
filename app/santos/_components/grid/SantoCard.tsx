'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../santos.module.css';
import { useCorDominante } from '../../_hooks/useCorDominante';
import type { SantoRegistry } from '../../_types/santo';

interface Props {
    santo: SantoRegistry;
    progresso: number;
    concluido: boolean;
    delay: number;
}

interface Coreografia {
    nome: string;
    duracao: number;
    wipeKeyframes: Array<{ offset: number; wipe: number; easing?: string }>;
    intensidadeMax?: number;
}

const COREOGRAFIAS: Coreografia[] = [
    {
        nome: 'serena',
        duracao: 2600,
        wipeKeyframes: [
            { offset: 0, wipe: -0.1, easing: 'cubic-bezier(0.7, 0, 0.3, 1)' },
            { offset: 1, wipe: 1.1 },
        ],
    },
    {
        nome: 'hesitante',
        duracao: 3200,
        wipeKeyframes: [
            { offset: 0, wipe: -0.1, easing: 'cubic-bezier(0.4, 0, 0.6, 1)' },
            { offset: 0.42, wipe: 0.6, easing: 'cubic-bezier(0.4, 0, 0.2, 1)' },
            { offset: 0.55, wipe: 0.45, easing: 'cubic-bezier(0.4, 0, 0.6, 1)' },
            { offset: 1, wipe: 1.1 },
        ],
    },
    {
        nome: 'suspiro',
        duracao: 2900,
        wipeKeyframes: [
            { offset: 0, wipe: -0.1, easing: 'cubic-bezier(0.6, 0, 0.4, 1)' },
            { offset: 0.35, wipe: 0.4, easing: 'cubic-bezier(0.4, 0, 0.6, 1)' },
            { offset: 0.5, wipe: 0.42, easing: 'cubic-bezier(0.5, 0, 0.1, 1)' },
            { offset: 1, wipe: 1.1 },
        ],
    },
    {
        nome: 'dupla',
        duracao: 3400,
        wipeKeyframes: [
            { offset: 0, wipe: -0.1, easing: 'cubic-bezier(0.5, 0, 0.4, 1)' },
            { offset: 0.55, wipe: 1.05, easing: 'cubic-bezier(0.6, 0, 0.4, 1)' },
            { offset: 0.7, wipe: 0.75, easing: 'cubic-bezier(0.4, 0, 0.4, 1)' },
            { offset: 1, wipe: 1.1 },
        ],
    },
    {
        nome: 'vigorosa',
        duracao: 2800,
        wipeKeyframes: [
            { offset: 0, wipe: -0.1, easing: 'cubic-bezier(0.2, 0.7, 0.4, 1)' },
            { offset: 0.35, wipe: 0.55, easing: 'cubic-bezier(0.4, 0, 0.6, 1)' },
            { offset: 0.65, wipe: 0.65, easing: 'cubic-bezier(0.4, 0, 0.2, 1)' },
            { offset: 1, wipe: 1.1 },
        ],
        intensidadeMax: 1.1,
    },
    {
        nome: 'contemplativa',
        duracao: 4200,
        wipeKeyframes: [
            { offset: 0, wipe: -0.1, easing: 'cubic-bezier(0.4, 0, 0.6, 1)' },
            { offset: 1, wipe: 1.1 },
        ],
        intensidadeMax: 1.2,
    },
];

function escolherCoreografia(): Coreografia {
    const pesos = [3, 2, 2, 1, 2, 1];
    const total = pesos.reduce((a, b) => a + b, 0);
    let r = Math.random() * total;
    for (let i = 0; i < pesos.length; i++) {
        r -= pesos[i];
        if (r <= 0) return COREOGRAFIAS[i];
    }
    return COREOGRAFIAS[0];
}

const INTERVALO_MIN_MS = 5500;
const INTERVALO_MAX_MS = 10000;

export default function SantoCard({ santo, progresso, concluido, delay }: Props) {
    const ref = useRef<HTMLElement | null>(null);
    const cardImgRef = useRef<HTMLDivElement | null>(null);
    const [visivel, setVisivel] = useState(false);
    const [imgErro, setImgErro] = useState(false);
    const [imgCarregada, setImgCarregada] = useState(false);
    const [imgBExiste, setImgBExiste] = useState(false);

    const [mostrandoB, setMostrandoB] = useState(false);
    const [varrendo, setVarrendo] = useState(false);

    const imagemA = santo.imagemCard ?? null;

    // Calcula o caminho para a pintura na pasta /reais/
    const imagemB = useMemo(() => {
        if (!imagemA) return null;
        const idx = imagemA.lastIndexOf('/');
        if (idx === -1) return null;
        return `${imagemA.slice(0, idx)}/reais${imagemA.slice(idx)}`;
    }, [imagemA]);

    // Só testa se imagemB existe SE o santo tiver imagemA válida
    useEffect(() => {
        if (!imagemB) { setImgBExiste(false); return; }
        let cancelado = false;
        const img = new window.Image();
        img.onload = () => { if (!cancelado) setImgBExiste(true); };
        img.onerror = () => { if (!cancelado) setImgBExiste(false); };
        img.src = imagemB;
        return () => { cancelado = true; };
    }, [imagemB]);

    const corDominante = useCorDominante(
        imagemA && !imgErro ? imagemA : null
    );

    useEffect(() => {
        const el = ref.current;
        if (!el || visivel) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const timer = setTimeout(() => setVisivel(true), delay);
                    observer.unobserve(el);
                    return () => clearTimeout(timer);
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [delay, visivel]);

    /* Loop de transição animada entre a arte do card e a pintura de /reais/ */
    useEffect(() => {
        if (!visivel || !imagemA || !imgBExiste || imgErro) return;

        let idAgendamento: ReturnType<typeof setTimeout>;
        let animacaoAtual: Animation | null = null;

        const executarCoreografia = () => {
            const el = cardImgRef.current;
            if (!el) return;

            const coreo = escolherCoreografia();
            const intensidadeMax = coreo.intensidadeMax ?? 1;

            const keyframes = coreo.wipeKeyframes.map((kf) => {
                const dentroDoCard = kf.wipe > -0.05 && kf.wipe < 1.05;
                const intensidade = dentroDoCard ? intensidadeMax : 0;

                return {
                    offset: kf.offset,
                    '--wipe': String(kf.wipe),
                    '--lamina-intensidade': String(intensidade),
                    easing: kf.easing ?? 'linear',
                } as Keyframe;
            });

            const primeiroDentro = keyframes.findIndex(
                (kf) => Number(kf['--lamina-intensidade']) > 0
            );
            const ultimoDentro = [...keyframes].reverse().findIndex(
                (kf) => Number(kf['--lamina-intensidade']) > 0
            );

            if (primeiroDentro > 0) {
                keyframes[primeiroDentro - 1]['--lamina-intensidade'] = '0';
            }
            if (ultimoDentro > 0) {
                const idx = keyframes.length - 1 - ultimoDentro;
                if (idx < keyframes.length - 1) {
                    keyframes[idx + 1]['--lamina-intensidade'] = '0';
                }
            }

            if (animacaoAtual) {
                animacaoAtual.cancel();
            }

            setVarrendo(true);

            animacaoAtual = el.animate(keyframes, {
                duration: coreo.duracao,
                easing: 'linear',
                fill: 'forwards',
            });

            animacaoAtual.onfinish = () => {
                setMostrandoB((prev) => !prev);
                setVarrendo(false);

                if (el) {
                    el.style.setProperty('--wipe', '0');
                    el.style.setProperty('--lamina-intensidade', '0');
                }

                agendar();
            };
        };

        const agendar = () => {
            const intervalo =
                INTERVALO_MIN_MS +
                Math.random() * (INTERVALO_MAX_MS - INTERVALO_MIN_MS);
            idAgendamento = setTimeout(executarCoreografia, intervalo);
        };

        agendar();

        return () => {
            clearTimeout(idAgendamento);
            if (animacaoAtual) {
                animacaoAtual.cancel();
                animacaoAtual = null;
            }
        };
    }, [visivel, imagemA, imgBExiste, imgErro]);

    const href = santo.temBiografia
        ? `/santos/${santo.pasta}/${santo.slug}`
        : undefined;

    const cardStyle = useMemo(() => {
        const style: React.CSSProperties = {
            '--cor-dominante': corDominante,
        } as React.CSSProperties;

        if (progresso > 0) {
            (style as Record<string, string>)['--progresso-cor'] = corDominante;
            (style as Record<string, string>)['--progresso-pct'] = `${progresso}%`;
        }

        return style;
    }, [progresso, corDominante]);

    const cardClasses = [
        styles.card,
        visivel && styles.cardVisivel,
        !santo.temBiografia && styles.cardSemBio,
        progresso > 0 && styles.cardComProgresso,
        concluido && styles.cardConcluido,
    ].filter(Boolean).join(' ');

    const inicial = useMemo(() => {
        const partes = santo.nome.trim().split(/\s+/);
        const primeiroNome = partes.find(
            (p) => !['São', 'Santa', 'Santo'].includes(p)
        );
        return primeiroNome?.charAt(0).toUpperCase() ?? '✦';
    }, [santo.nome]);

    const ariaLabel = useMemo(() => {
        const partes: string[] = [santo.nome];
        if (santo.categorias.length > 0) {
            partes.push(`(${santo.categorias.join(', ')})`);
        }
        if (concluido) partes.push('— leitura concluída');
        else if (progresso > 0) partes.push(`— ${progresso}% lido`);
        if (!santo.temBiografia) partes.push('— biografia em breve');
        return partes.join(' ');
    }, [santo, progresso, concluido]);

    const imagemSaindo = mostrandoB ? imagemB : imagemA;
    const imagemEntrando = mostrandoB ? imagemA : imagemB;

    const conteudoInterno = (
        <>
            <div ref={cardImgRef} className={styles.cardImg}>
                <div className={styles.cardBadges}>
                    {santo.categorias.slice(0, 3).map((cat) => (
                        <span key={cat} className={styles.badge}>{cat}</span>
                    ))}
                </div>

                {progresso > 0 && (
                    <span className={styles.cardProgressoBadge} aria-hidden="true">
                        {concluido ? '✓' : `${progresso}%`}
                    </span>
                )}

                {imagemA && !imgErro ? (
                    <>
                        <div
                            className={
                                varrendo
                                    ? `${styles.cardImgCamada} ${styles.cardImgCamada_saindo}`
                                    : styles.cardImgCamada
                            }
                        >
                            <Image
                                src={imagemSaindo!}
                                alt={santo.nome}
                                fill
                                sizes="(max-width: 480px) 90vw, (max-width: 768px) 45vw, (max-width: 1100px) 33vw, 400px"
                                quality={95}
                                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                                onLoad={() => setImgCarregada(true)}
                                onError={() => setImgErro(true)}
                                priority={delay < 200}
                            />
                        </div>

                        {imgBExiste && varrendo && imagemEntrando && (
                            <div
                                key={`in-${mostrandoB}`}
                                className={`${styles.cardImgCamada} ${styles.cardImgCamada_entrando}`}
                            >
                                <Image
                                    src={imagemEntrando}
                                    alt=""
                                    fill
                                    sizes="(max-width: 480px) 90vw, (max-width: 768px) 45vw, (max-width: 1100px) 33vw, 400px"
                                    quality={95}
                                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                                />
                            </div>
                        )}

                        {imgBExiste && imagemB && (
                            <div
                                style={{
                                    position: 'absolute',
                                    width: 1, height: 1,
                                    opacity: 0,
                                    pointerEvents: 'none',
                                    overflow: 'hidden',
                                }}
                                aria-hidden="true"
                            >
                                <Image src={imagemB} alt="" width={1} height={1} quality={75} />
                            </div>
                        )}
                    </>
                ) : (
                    <div className={styles.cardImgPlaceholder} aria-hidden="true">
                        <span className={styles.cardImgPlaceholderInicial}>{inicial}</span>
                    </div>
                )}
            </div>

            <div className={styles.cardContent}>
                <h3 className={styles.cardNome}>{santo.nome}</h3>
                {concluido && (
                    <p className={styles.cardConcluidoLabel}>
                        <span aria-hidden="true">✓</span> Concluído
                    </p>
                )}
            </div>

            <div className={styles.cardCTA}>
                <span
                    className={`${styles.cardBotao} ${
                        !santo.temBiografia ? styles.cardBotaoDesabilitado : ''
                    }`}
                >
                    {santo.temBiografia ? 'Ler Biografia' : 'Em breve'}
                </span>
            </div>
        </>
    );

    if (santo.temBiografia && href) {
        return (
            <Link
                ref={ref as React.Ref<HTMLAnchorElement>}
                href={href}
                className={cardClasses}
                style={cardStyle}
                aria-label={ariaLabel}
                title={santo.nome}
            >
                {conteudoInterno}
            </Link>
        );
    }

    return (
        <div
            ref={ref as React.Ref<HTMLDivElement>}
            className={cardClasses}
            style={cardStyle}
            aria-label={ariaLabel}
            title={santo.nome}
        >
            {conteudoInterno}
        </div>
    );
}