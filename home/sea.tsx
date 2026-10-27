'use client'
/** Core */
import Image from "next/image"
import { useEffect, useRef, useState } from "react";
/** Components */
import Player from "@/components/player";
import LinkMenu from "@/components/link-menu";
import PixelIcon from "@/components/pixel-icon";
/** Utilities */
import { prefix } from "@/lib/utilities";

const GREETING = 'Il mare è calmo. Dove andiamo?';

/** Types the line one letter at a time, unless the user prefers less motion */
function TypedLine({ text }: { text: string }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const step = reduce ? text.length : 1;
        const id = window.setInterval(() => {
            setCount((c) => {
                if (c + step >= text.length) window.clearInterval(id);
                return Math.min(c + step, text.length);
            });
        }, reduce ? 0 : 45);
        return () => window.clearInterval(id);
    }, [text]);

    return <p className="dialog-text" aria-label={text}>
        <span aria-hidden="true">{text.slice(0, count)}</span>
    </p>
}

export default function Sea() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const startRef = useRef<HTMLButtonElement>(null);
    const dialogRef = useRef<HTMLElement>(null);
    const [started, setStarted] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [shareNote, setShareNote] = useState('');
    /** Bumped on every start so the greeting types itself again */
    const [voyage, setVoyage] = useState(0);

    /** Keep keyboard focus on the screen the user is looking at */
    useEffect(() => {
        if (started) dialogRef.current?.querySelector<HTMLButtonElement>('.player button')?.focus();
        else startRef.current?.focus();
    }, [started]);

    const play = () => {
        audioRef.current?.play().catch(() => setPlaying(false));
    };

    const onStart = () => {
        if (started) return;
        setStarted(true);
        setVoyage((v) => v + 1);
        play();
    };

    /** Back to the title screen: the music stops where it is */
    const onClose = () => {
        audioRef.current?.pause();
        setStarted(false);
    };

    useEffect(() => {
        if (!started) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [started]);

    const onToggle = () => {
        if (playing) audioRef.current?.pause();
        else play();
    };

    const onRestart = () => {
        const audio = audioRef.current;
        if (!audio) return;
        audio.currentTime = 0;
        play();
    };

    const onShare = async () => {
        const data = { title: 'Navighiamo', text: 'Navighiamo', url: window.location.href };
        if (navigator.share) {
            try { await navigator.share(data); } catch { /* user closed the sheet */ }
            return;
        }
        try {
            await navigator.clipboard.writeText(data.url);
            setShareNote('Link copiato');
        } catch {
            setShareNote('Copia il link dalla barra degli indirizzi');
        }
        window.setTimeout(() => setShareNote(''), 2400);
    };

    return <div className={`scene${started ? ' is-started' : ''}`} onClick={started ? undefined : onStart}>
        <Image
            className="scene-image"
            src={`${prefix}/images/full.gif`}
            alt="Un ragazzo rema in barca su un mare blu, al tramonto"
            fill
            priority
            unoptimized
        />

        <audio
            ref={audioRef}
            preload="metadata"
            src={`${prefix}/audio/8BITIAMO.mp3`}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onEnded={() => setPlaying(false)}
        />

        <header className="title-block">
            <h1 className="title">Navighiamo</h1>
            <button ref={startRef} className="start" inert={started} onClick={(e) => { e.stopPropagation(); onStart(); }}>
                <PixelIcon name="cursor" scale={3} />
                Premi per salpare
            </button>
        </header>

        <div className="hud" inert={!started}>
            <button className="pixel-button" onClick={onShare} aria-label="Condividi">
                <PixelIcon name="share" scale={3} />
            </button>
            <span className="share-note" role="status">{shareNote}</span>
        </div>

        <section ref={dialogRef} className="dialog-wrap" aria-label="Ascolta e segui" inert={!started}>
            <div className="frame">
                <div className="frame-line">
                    <div className="dialog">
                        <div className="dialog-head">
                            {started ? <TypedLine key={voyage} text={GREETING} /> : <p className="dialog-text" />}
                            <button className="close" onClick={onClose} aria-label="Chiudi e torna all'inizio">
                                <PixelIcon name="close" scale={2} />
                            </button>
                        </div>
                        <Player audioRef={audioRef} playing={playing} onToggle={onToggle} onRestart={onRestart} />
                        <LinkMenu />
                    </div>
                </div>
            </div>
        </section>

        <p className="credit">Posky Cloud</p>
    </div>
}
