/** Core */

import Image from "next/image"
/** Components */
import Track from "./track";
import CustomLink from "./link";
/** Utilities */
import { useWindowSize } from "@/lib/utilities";
/** Types */
export type LinkTreeProps = {
    onSpeakerClick: () => void;
}
/** Lib */
import { ModalLinks } from "@/lib/links";

export default function LinkTree({ onSpeakerClick }: LinkTreeProps) {

    const windowSize = useWindowSize();

    return <div className="min-w-[60vw] min-h-[70vw] xxsm:min-w-[10vh] xxsm:min-h-[10vh] xsm:min-w-[10vh] xsm:min-h-[10vh] sm:min-w-[10vh] sm:min-h-[10vh] md:min-w-[10vh] md:min-h-[10vh] lg:min-w-[20vh] lg:min-h-[20vh] m-2">
        <div className="w-full h-full">
            <div className="flex">
                <div className="w-[90%] flex items-center justify-center">
                    <span className="text-white text-3xl">NAVIGHIAMO</span>
                </div>
                <div className="w-[10%] flex items-center justify-end">
                    <Image src="/icons/speaker.png" alt="Speaker" width="35" height="35" onClick={onSpeakerClick} />
                </div>
            </div>
            <div className="w-full h-full flex flex-col mt-4">
                {ModalLinks.map((link, index) => <CustomLink key={index} windowSize={windowSize} textColor={link.textColor} image={link.image}/>)}
            </div>
        </div>
        <Track windowSize={windowSize} />
    </div>
}