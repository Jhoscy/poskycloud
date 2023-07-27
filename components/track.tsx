/** Core */
import { useRef, useState } from "react";
import Image from "next/image";
import AudioStatusTimeBar from "./audio-bar";

export default function Track() {
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

    return <div className="min-w-full min-h-[15vh] relative">
        <audio ref={audioRef} className="w-full">
            <source src="/audio/8BITIAMO.mp3" type="audio/mp3"></source>
        </audio>
        <div className="flex justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {/* Play button */}
            <button className={`text-xl ${trackMoment ? 'animate-pulse' : ''}`} onClick={onPlayClick}>
                <Image src="/icons/play.png" alt="Play" width="50" height="60" />
            </button> 
            {/* Pause button */}
            <button className={`text-xl ml-3 mr-3 ${!trackMoment && audioRef.current?.currentTime > 0 ? 'animate-pulse' : ''}`} onClick={onPauseClick}>
                <Image src="/icons/pause.png" alt="Pause" width="50" height="60" />
            </button> 
            {/** Stop button */}
            <button className="text-xl" onClick={onRestartClick}>
                <Image src="/icons/restart.png" alt="Restart" width="50" height="30" />
            </button> 
        </div>
        {audioRef.current && <div className="w-full flex justify-center absolute top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <AudioStatusTimeBar audioRef={audioRef} />
        </div>}
    </div>
}