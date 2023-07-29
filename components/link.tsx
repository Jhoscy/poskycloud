/** Core */
import Image from "next/image";

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
    }
}

export default function CustomLink({ windowSize, textColor, image }: LinkProps) {
    let { label, src, alt, width, height } = image;

    if (windowSize.height < 550) {
        width = width - 10;
        height = height - 10;
    }

    return <div className={`w-full flex items-center justify-between mt-6 xsm:mt-2  ${windowSize.height < 550 ? 'mt-2' : ''}`}>
        <span className={`${textColor} text-2xl ${windowSize.height < 550 ? 'text-lg' : ''}`}>{label}</span>
        <Image src={src} alt={alt} width={width} height={height} />
    </div>
}