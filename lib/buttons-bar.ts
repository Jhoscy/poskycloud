export const AudioBarButtons = [
  {
    name: 'Play',
    style: (trackMoment: boolean, _currentTime: number) => {
      return "text-xl" + " " + (trackMoment ? "animate-pulse" : "");
    },
    image: {
      width: 50,
      height: 50,
      alt: "Play",
      src: "icons/play.png",
    },
  },
  {
    name: 'Pause',
    style: (trackMoment: boolean, currentTime: number) => {
      return "text-xl" + " " + (!trackMoment && currentTime > 0
        ? "animate-pulse"
        : "");
    },
    image: {
      width: 50,
      height: 50,
      alt: "Pause",
      src: "icons/pause.png",
    },
  },
  {
    name: 'Restart',
    style: (_trackMoment: boolean, _currentTime: number) => "text-xl",
    image: {
      width: 50,
      height: 50,
      alt: "Restart",
      src: "icons/restart.png",
    },
  },
];