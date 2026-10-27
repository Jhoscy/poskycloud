/** Core */
import Image from "next/image";
/** Components */
import PixelIcon from "./pixel-icon";
/** Lib */
import { MenuLinks } from "@/lib/links";
/** Utilities */
import { prefix } from "@/lib/utilities";

/** Arrow keys move between entries, like a game menu */
function onMenuKeyDown(e: React.KeyboardEvent<HTMLUListElement>) {
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
    const links = [...e.currentTarget.querySelectorAll('a')];
    const index = links.indexOf(document.activeElement as HTMLAnchorElement);
    const step = e.key === 'ArrowDown' ? 1 : -1;
    e.preventDefault();
    links[(index + step + links.length) % links.length]?.focus();
}

export default function LinkMenu() {
    return <ul className="menu" onKeyDown={onMenuKeyDown}>
        {MenuLinks.map((link) => <li key={link.name}>
            <a className="menu-item" href={link.href} target="_blank" rel="noopener noreferrer">
                <PixelIcon name="cursor" scale={3} className="menu-cursor" />
                <span className="menu-label">{link.label}</span>
                <Image className="menu-icon" src={`${prefix}/${link.icon}`} alt="" width={28} height={28} unoptimized />
            </a>
        </li>)}
    </ul>
}
