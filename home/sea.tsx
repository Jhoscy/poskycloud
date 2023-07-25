'use client'
/** Core */
import Image from "next/image"
import { useState } from "react";
/** Utilities */
import { setFixedHeight } from "@/lib/utilities";
/** Components */
import LinkTree from "@/components/linktree";
import PoskyModal from "@/components/modal";

export default function Sea() {
    /** Fixed Viewporth height */
    setFixedHeight();
    /** State */
    const [modalOpen, setModalIsOpen] = useState(false);
    const onModalCloseHandler = () => setModalIsOpen(false);

    return <div className="w-full h-full">
        <Image
            src="/images/full.gif" alt="sea background"
            fill={true}
            style={{ objectFit: 'cover', height: '100%', width: '100%' }}
            onClick={() => setModalIsOpen(true)}
        />
        <PoskyModal isOpen={modalOpen} onModalClose={onModalCloseHandler} children={<LinkTree />}/>
    </div>
}   