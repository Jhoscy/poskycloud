'use client'
/** Core */
import Image from "next/image"
/** Utilities */
import { setFixedHeight } from "@/lib/utilities";
import PoskyModal from "@/components/modal";
import { useState } from "react";
import LinkTree from "@/components/linktree";

export default function Sea() {
    /** Fixed Viewporth height */
    setFixedHeight();
    /** State */
    const [modalOpen, setModalIsOpen] = useState(false);
    const onModalCloseHandler = () => setModalIsOpen(false);

    return <div className="w-full h-full">
        <Image
            src="/full.gif" alt="sea background"
            fill={true}
            style={{ objectFit: 'cover', height: '100%', width: '100%' }}
            onClick={() => setModalIsOpen(true)}
        />
        <PoskyModal isOpen={modalOpen} onModalClose={onModalCloseHandler} children={<LinkTree />}/>
    </div>
}   