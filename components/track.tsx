/** Core */
import { useEffect, useRef, useState } from "react";
/** Components */
import AudioStatusTimeBar from "./audio-bar";
import ButtonBar from "./button-bar";
/** Lib */
import { AudioBarButtons } from "@/lib/buttons-bar";
/** Utilities */
import { prefix } from "@/lib/utilities";

export type TrackProps = {
    windowSize: {
        width: number;
        height: number;
    }
}

export default function Track({ windowSize }: TrackProps) {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [trackMoment, setTrackMoment] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);

    const onPlayClick = () => {
        setTrackMoment(true);
        audioRef.current?.play();
    }
    const onPauseClick = () => {
        setTrackMoment(false);
        audioRef.current?.pause();
    }
    const onRestartClick = () => {
        onPauseClick();
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
        }
        setCurrentTime(0);
    }

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;
        const updateTime = () => setCurrentTime(audio.currentTime);
        audio.addEventListener("timeupdate", updateTime);
        return () => audio.removeEventListener("timeupdate", updateTime);
    }, []);

    const functionsRefs = [
        onPlayClick,
        onPauseClick,
        onRestartClick
    ];

    const margin = windowSize.height < 550 ? 'mt-[-10px]' : '';

    return <div className="min-w-full min-h-[15vh] relative">
        <audio ref={audioRef} className="w-full">
            <source src={`${prefix}/audio/8BITIAMO.mp3`} type="audio/mp3"></source>
        </audio>
        <div className={`flex justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${margin}`}>
            {AudioBarButtons.map((button, index) => <ButtonBar key={index} windowSize={windowSize} style={button.style(trackMoment, currentTime)} image={button.image} onButtonClick={functionsRefs[index]} />)}
        </div>
        <div className="w-full flex justify-center absolute top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <AudioStatusTimeBar audioRef={audioRef} />
        </div>
    </div>
}