'use client'
/** Core */
import Image from "next/image"
import { useEffect, useState } from "react";
/** Utilities */
import { isProd, prefix, setFixedHeight } from "@/lib/utilities";
/** Components */
import LinkTree from "@/components/linktree";
import PoskyModal from "@/components/modal";
/** Firebase */
import { firebase, isSupported } from "@/firebase/config";
import { getAnalytics } from "firebase/analytics";

export default function Sea() {
    /** Fixed Viewporth height */
    setFixedHeight();
    const [modalOpen, setModalIsOpen] = useState(false);
    const onModalCloseHandler = () => setModalIsOpen(false);

    const handleShare = async () => { };

    useEffect(() => {
        if (typeof window != undefined && !isProd) {
            //() Initialize Firebase
            console.log('FIREBASE', firebase);
            isSupported().then(supported => {
                const analytics = getAnalytics(firebase);
            }).catch(err => console.log(err))
        }
    }, []);


    return <div className="w-full h-full overflow-hidden">
        <Image
            src={`${prefix}/images/full.gif`} alt="sea background"
            fill={true}
            style={{
                objectFit: 'cover',
                height: '100%',
                width: '100%',
                display: 'block',
                maxWidth: '100%',
                maxHeight: '100%'
            }}
            onClick={() => setModalIsOpen(true)}
        />
        <PoskyModal isOpen={modalOpen} onModalClose={onModalCloseHandler} children={<LinkTree onWebClick={handleShare} />} />
    </div>
}   