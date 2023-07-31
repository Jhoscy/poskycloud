/** Core */
import Image from "next/image";
import Link from "next/link";
/** Utiities */
import { prefix } from "@/lib/utilities";

export type LinkProps = {
    windowSize: {
        width: number,
        height: number
    },
    textColor: string,
    image: {
        label: string;
        src: string;
        alt: string;
        width: number;
        height: number;
    },
    href: string;
}

export default function CustomLink({ windowSize, textColor, image, href }: LinkProps) {
    let { label, src, alt, width, height } = image;

    if (windowSize.height < 550) {
        width = width - 10;
        height = height - 10;
    }

    const className = `${textColor} ${windowSize.height < 550 ? 'text-lg' : 'text-2xl'}`;
    return <div className={`w-full flex items-center justify-between mt-6 xsm:mt-2 ${windowSize.height < 550 || windowSize.width < 400 ? 'xxsm:mt-2' : ''}`}>
        <Link href={href}>
            <span className={className}>{label}</span>
        </Link>
        <Link href={href}>
            <Image src={`/${prefix}/${src}`} alt={alt} width={width} height={height} />
        </Link>
    </div>
}