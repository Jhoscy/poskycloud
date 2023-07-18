'use client'

import { setFixedHeight } from "@/lib/utilities";
import Image from "next/image"

export default function Sea() {
    /** Fixed Viewporth height */
    setFixedHeight();
    return <div className="w-full h-full">
        <Image
            src="/full.gif" alt="sea background"
            layout="fill"
            objectFit="cover"
        />
    </div>
}   