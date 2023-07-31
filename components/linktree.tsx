/** Core */
import Image from "next/image"
/** Components */
import Track from "./track";
import CustomLink from "./link";
import { RWebShare } from 'react-web-share';
/** Utilities */
import { prefix, useWindowSize } from "@/lib/utilities";
/** Types */
export type LinkTreeProps = {
    onWebClick: () => void;
}
/** Lib */
import { ModalLinks } from "@/lib/links";

export default function LinkTree({ onWebClick }: LinkTreeProps) {

    const windowSize = useWindowSize();

    return <div className="min-w-[60vw] min-h-[70vw] xxsm:min-w-[10vh] xxsm:min-h-[10vh] xsm:min-w-[10vh] xsm:min-h-[10vh] sm:min-w-[10vh] sm:min-h-[10vh] md:min-w-[10vh] md:min-h-[10vh] lg:min-w-[20vh] lg:min-h-[20vh] m-2">
        <div className="w-full h-full">
            <div className="flex relative">
                <div className="w-full flex items-center justify-start ssm:justify-center">
                    <span className="text-white text-3xl">NAVIGHIAMO</span>
                </div>
                <div className="flex items-center justify-end absolute right-0">
                    <RWebShare
                        data={{
                            text: "Navighiamo",
                            url: window.location.href,
                            title: "Navighiamo",
                        }}
                        sites={['facebook', 'twitter', 'telegram', 'whatsapp']}
                        // onClick={() => console.log("shared successfully!")}
                    >
                        <Image src={`/${prefix}/icons/share.png`} alt="Share" width="35" height="35" onClick={onWebClick} />
                    </RWebShare>
                </div>
            </div>
            <div className="w-full h-full flex flex-col mt-4">
                {ModalLinks.map((link, index) => <CustomLink key={index} windowSize={windowSize} textColor={link.textColor} image={link.image} href={link.href} />)}
            </div>
        </div>
        <Track windowSize={windowSize} />
    </div>
}