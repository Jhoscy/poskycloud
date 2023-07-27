'use-client';
/** Core */
import React, { useState, useEffect } from 'react';
/** Types */
export type AudioStatusTimeBarProps = {
    audioRef: React.MutableRefObject<any>;
}
const AudioStatusTimeBar = ({ audioRef }: AudioStatusTimeBarProps) => {
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        // Listen for time updates when the audio is playing
        const updateTime = () => {
            if (!isDragging) {
                setCurrentTime(audioRef?.current?.currentTime);
            }
            setDuration(audioRef.current?.duration);
        };

        audioRef?.current?.addEventListener('timeupdate', updateTime);

        // Clean up the event listener when the component is unmounted
        return () => {
            audioRef?.current?.removeEventListener('timeupdate', updateTime);
        };
    }, [audioRef, isDragging]);

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const progress = (currentTime / duration) * 100;

    const handleProgressBarClick = (e: any) => {
        if (audioRef?.current) {
            const progressBar = e.target;
            const clickPosition = e.pageX - progressBar.offsetLeft;
            const clickPercentage = (clickPosition / progressBar.offsetWidth) * 100;
            const newCurrentTime = (clickPercentage / 100) * duration;
            audioRef.current.currentTime = newCurrentTime;
            setCurrentTime(newCurrentTime);
        }
    };

    const handleProgressBarMouseDown = () => {
        setIsDragging(true);
    };

    const handleProgressBarMouseMove = (e: any) => {
        if (isDragging) {
            handleProgressBarClick(e);
        }
    };

    const handleProgressBarMouseUp = () => {
        setIsDragging(false);
    };

    const handleProgressBarTouchStart = (e: any) => {
        handleProgressBarClick(e.touches[0]);
        setIsDragging(true);
    };

    const handleProgressBarTouchMove = (e: any) => {
        handleProgressBarClick(e.touches[0]);
    };

    const handleProgressBarTouchEnd = () => {
        setIsDragging(false);
    };

    return (
        <div className="w-full flex items-center"
            onMouseMove={handleProgressBarMouseMove}
            onMouseUp={handleProgressBarMouseUp}
            onTouchMove={handleProgressBarTouchMove}
            onTouchEnd={handleProgressBarTouchEnd}
            >
            <div className="flex justify-end w-1/4">
                <span className="text-white text-sm font-semibold">{formatTime(currentTime)}</span>
            </div>
            <div
                className="w-2/4 h-3 mx-2 bg-gray-300 rounded-md cursor-pointer"
                onClick={handleProgressBarClick}
                onMouseDown={handleProgressBarMouseDown}
                onTouchStart={handleProgressBarTouchStart}
            >
                <div className="h-full bg-blue-500 rounded-md" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="w-1/4">
                <span className="text-white text-sm font-semibold">{formatTime(duration)}</span>
            </div>
        </div>
    );
};

export default AudioStatusTimeBar;