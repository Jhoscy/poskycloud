/** Core */
import Image from "next/image";
/** Utils */
import { prefix } from "@/lib/utilities";

export type ButtonBarProps = {
    windowSize: {
        width: number;
        height: number;
    },
    style: string;
    image: {
        width: number;
        height: number;
        src: string;
        alt: string;
    }
    onButtonClick: () => Function;
}

export default function ButtonBar({ windowSize, style, image, onButtonClick}: ButtonBarProps) {
    let { width, height, src, alt } = image;

    if (windowSize.height < 550) {
        width = width - 10;
        height = height - 10;
    }

    return <button className={style} onClick={onButtonClick}>
        <Image src={`${prefix}/${src}`} alt={alt} width={width} height={height} />
    </button>
}