/** Core */
import Image from "next/image"
export default function LinkTree() {
    // return <div className="min-w-[55vw] min-h-[60vw]">
    //     <div className="w-full h-full flex flex-col justify-center">
    //         <span>This will be the POSKY CLOUD SPACE</span>
    //     </div>
    // </div>
    return <div className="min-w-[60vw] min-h-[70vw] m-2">
        <div className="w-full h-full">
            <div className="text-center">
                <span className="text-white text-3xl">NAVIGHIAMO</span>
            </div>
            <div className="w-full h-full flex flex-col mt-4">
                <div className="w-full flex items-center justify-between mt-6">
                    <span className="text-green-400 text-2xl">Spotify</span>
                    <Image src="/icons/spotify1.png" alt="Spotify" width="50" height="60" />
                </div>
                <div className="w-full flex items-center justify-between mt-6">
                    <span className="text-red-600 text-2xl">Youtube</span>
                    <Image src="/icons/youtube.png" alt="Yotube" width="50" height="60" />
                </div>
                <div className="w-full flex items-center justify-between mt-6">
                    <span className="text-purple-400 text-2xl">Instagram</span>
                    <Image src="/icons/instagram.png" alt="Instagram" width="50" height="60"  />
                </div>
            </div>
        </div>
    </div>
}