import { MutableRefObject } from "react";

export const AudioBarButtons = [
  {
    name: 'Play',
    style: (trackMoment: boolean, audioRef: MutableRefObject<any>) => {
      return "text-xl" + " " + (trackMoment ? "animate-pulse" : "");
    },
    image: {
      width: 50,
      height: 50,
      alt: "Play",
      src: "icons/play.png",
    },
    handler: (handlerFn: any) => handlerFn,
  },
  {
    name: 'Pause',
    style: (trackMoment: boolean, audioRef: MutableRefObject<any>) => {
      return "text-xl" + " " + (!trackMoment && audioRef.current?.currentTime > 0
        ? "animate-pulse"
        : "");
    },
    image: {
      width: 50,
      height: 50,
      alt: "Pause",
      src: "icons/pause.png",
    },
    handler: (handlerFn: any) => handlerFn,
  },
  {
    name: 'Restart',
    style: (trackMoment: boolean, audioRef: MutableRefObject<any>) => "text-xl",
    image: {
      width: 50,
      height: 50,
      alt: "Restart",
      src: "icons/restart.png",
    },
    handler: (handlerFn: any) => handlerFn,
  },
];