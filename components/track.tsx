/** Core */
import { useRef, useState } from "react";
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
    const audioRef = useRef<any>();
    const [trackMoment, setTrackMoment] = useState(false);

    const onPlayClick = () => {
        setTrackMoment(true);
        audioRef.current.play();
    }
    const onPauseClick = () => {
        setTrackMoment(false);
        audioRef.current.pause();
    }
    const onRestartClick = () => {
        onPauseClick();
        audioRef.current.currentTime = 0;
    }

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
            {AudioBarButtons.map((button, index) => <ButtonBar key={index} windowSize={windowSize} style={button.style(trackMoment, audioRef)} image={button.image} onButtonClick={button.handler(functionsRefs[index])} />)}
        </div>
        {audioRef.current && <div className="w-full flex justify-center absolute top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <AudioStatusTimeBar audioRef={audioRef} />
        </div>}
    </div>
}