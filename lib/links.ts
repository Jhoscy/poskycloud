enum Links {
  SPOTIFY = "https://open.spotify.com/track/6vCzXILlR4QEgcxuedOJC8?si=a6d24fdd6b244a5b",
  YOUTUBE = "https://youtu.be/8jitWlAJTkQ?si=_aSVNnFM-b-Tl9bD",
  INSTAGRAM = "https://www.instagram.com/jacopo_tortora/",
}

export const MenuLinks = [
  {
    name: "Spotify",
    label: "Ascolta su Spotify",
    icon: "icons/spotify1.png",
    href: Links.SPOTIFY,
  },
  {
    name: "YouTube",
    label: "Guarda su YouTube",
    icon: "icons/youtube.png",
    href: Links.YOUTUBE,
  },
  {
    name: "Instagram",
    label: "Segui su Instagram",
    icon: "icons/instagram.png",
    href: Links.INSTAGRAM,
  },
];
