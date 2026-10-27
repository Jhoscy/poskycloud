'use client'
/** Core */
import Image from "next/image"
import { useState } from "react";
/** Utilities */
import { prefix, setFixedHeight } from "@/lib/utilities";
/** Components */
import LinkTree from "@/components/linktree";
import PoskyModal from "@/components/modal";

export default function Sea() {
    /** Fixed Viewporth height */
    setFixedHeight();
    const [modalOpen, setModalIsOpen] = useState(false);
    const onModalCloseHandler = () => setModalIsOpen(false);

    const handleShare = async () => { };

    return <div className="relative h-screen w-full overflow-hidden">
        <Image
            src={`${prefix}/images/full.gif`} alt="sea background"
            fill={true}
            unoptimized
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
        <PoskyModal isOpen={modalOpen} onModalClose={onModalCloseHandler}>
          <LinkTree onWebClick={handleShare} />
        </PoskyModal>
    </div>
}   