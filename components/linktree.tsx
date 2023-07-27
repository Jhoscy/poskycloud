/** Core */
import Image from "next/image"
export default function LinkTree() {
    return <div className="min-w-[60vw] min-h-[70vw] xxsm:min-w-[10vh] xxsm:min-h-[10vh] xsm:min-w-[10vh] xsm:min-h-[10vh] sm:min-w-[10vh] sm:min-h-[10vh] md:min-w-[10vh] md:min-h-[10vh] lg:min-w-[20vh] lg:min-h-[20vh] m-2">
        <div className="w-full h-full">
            <div className="flex">
                <div className="w-[90%] flex items-center justify-center">
                    <span className="text-white text-3xl">NAVIGHIAMO</span>
                </div>
                <div className="w-[10%] flex items-center justify-end">
                    <Image src="/icons/speaker.png" alt="Speaker" width="35" height="35" />
                </div>
            </div>
            <div className="w-full h-full flex flex-col mt-4">
                <div className="w-full flex items-center justify-between mt-6 xsm:mt-2">
                    <span className="text-green-400 text-2xl">Spotify</span>
                    <Image src="/icons/spotify1.png" alt="Spotify" width="50" height="60" />
                </div>
                <div className="w-full flex items-center justify-between mt-6 xsm:mt-2">
                    <span className="text-red-600 text-2xl">Youtube</span>
                    <Image src="/icons/youtube.png" alt="Yotube" width="50" height="60" />
                </div>
                <div className="w-full flex items-center justify-between mt-6 xsm:mt-2">
                    <span className="text-purple-400 text-2xl">Instagram</span>
                    <Image src="/icons/instagram.png" alt="Instagram" width="50" height="60"  />
                </div>
            </div>
        </div>
    </div>
}