'use client'
/** Core */
import { RefObject, useEffect, useRef, useState } from "react";
/** Components */
import PixelIcon from "./pixel-icon";
/** Utilities */
import { formatTime } from "@/lib/utilities";

const SEGMENTS = 20;
const SEEK_STEP = 5;

export type PlayerProps = {
    audioRef: RefObject<HTMLAudioElement | null>;
    playing: boolean;
    onToggle: () => void;
    onRestart: () => void;
}

export default function Player({ audioRef, playing, onToggle, onRestart }: PlayerProps) {
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const trackRef = useRef<HTMLDivElement>(null);
    const dragging = useRef(false);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const sync = () => {
            setCurrentTime(audio.currentTime);
            if (Number.isFinite(audio.duration)) setDuration(audio.duration);
        };
        sync();

        audio.addEventListener('timeupdate', sync);
        audio.addEventListener('loadedmetadata', sync);
        return () => {
            audio.removeEventListener('timeupdate', sync);
            audio.removeEventListener('loadedmetadata', sync);
        };
    }, [audioRef]);

    const seekTo = (time: number) => {
        const audio = audioRef.current;
        if (!audio || !duration) return;
        const next = Math.min(Math.max(time, 0), duration);
        audio.currentTime = next;
        setCurrentTime(next);
    };

    const seekToPointer = (clientX: number) => {
        const track = trackRef.current;
        if (!track) return;
        const rect = track.getBoundingClientRect();
        seekTo(((clientX - rect.left) / rect.width) * duration);
    };

    const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        dragging.current = true;
        e.currentTarget.setPointerCapture(e.pointerId);
        seekToPointer(e.clientX);
    };
    const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        if (dragging.current) seekToPointer(e.clientX);
    };
    const onPointerUp = () => {
        dragging.current = false;
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        const moves: Record<string, number> = {
            ArrowLeft: currentTime - SEEK_STEP,
            ArrowDown: currentTime - SEEK_STEP,
            ArrowRight: currentTime + SEEK_STEP,
            ArrowUp: currentTime + SEEK_STEP,
            Home: 0,
            End: duration,
        };
        if (e.key in moves) {
            e.preventDefault();
            seekTo(moves[e.key]);
        }
    };

    const progress = duration ? currentTime / duration : 0;
    const filled = Math.round(progress * SEGMENTS);

    return <div className="player">
        <div className="player-buttons">
            <button className="pixel-button" onClick={onToggle} aria-label={playing ? 'Metti in pausa' : 'Riproduci'}>
                <PixelIcon name={playing ? 'pause' : 'play'} scale={3} />
            </button>
            <button className="pixel-button" onClick={onRestart} aria-label="Ricomincia dall'inizio">
                <PixelIcon name="restart" scale={3} />
            </button>
        </div>
        <div
            ref={trackRef}
            className="track"
            role="slider"
            tabIndex={0}
            aria-label="Posizione nel brano"
            aria-valuemin={0}
            aria-valuemax={Math.round(duration)}
            aria-valuenow={Math.round(currentTime)}
            aria-valuetext={`${formatTime(currentTime)} di ${formatTime(duration)}`}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            onKeyDown={onKeyDown}
        >
            {Array.from({ length: SEGMENTS }, (_, i) =>
                <span key={i} className={`segment${i < filled ? ' is-filled' : ''}`} />
            )}
        </div>
        <span className="time" aria-hidden="true">
            {formatTime(currentTime)}<span className="time-total">/{formatTime(duration)}</span>
        </span>
    </div>
}
