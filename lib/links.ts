enum Links {
  SPOTIFY = "https://open.spotify.com/track/143lELo5BCvHQ4HHQUMApi?si=386675c028834f31",
  YOUTUBE = "https://www.youtube.com/watch?v=lj8a52oT14M",
  INSTAGRAM = "https://www.instagram.com/jacopo_tortora/",
}

export const ModalLinks = [
  {
    name: "Spotify",
    textColor: "text-green-400",
    image: {
      label: "Spotify",
      alt: "Spotify",
      width: 50,
      height: 60,
      src: "/icons/spotify1.png",
    },
    href: Links.SPOTIFY,
  },
  {
    name: "Youtube",
    textColor: "text-red-600",
    image: {
      label: "Youtube",
      alt: "Youtube",
      width: 50,
      height: 60,
      src: "/icons/youtube.png",
    },
    href: Links.YOUTUBE,
  },
  {
    textColor: "text-purple-400",
    image: {
      label: "Instagram",
      alt: "Instagram",
      width: 50,
      height: 60,
      src: "/icons/instagram.png",
    },
    href: Links.INSTAGRAM
  },
];
