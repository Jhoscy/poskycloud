'use client'

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";

const albums = [
    {
        dateTime: '2023-12-01',
        name: 'prova'
    },
    {
        dateTime: '2023-12-02',
        name: 'prova'
    },
    {
        dateTime: '2023-12-03',
        name: 'prova'
    },
    {
        dateTime: '2023-12-04',
        name: 'prova'
    },
    {
        dateTime: '2023-12-01',
        name: 'prova'
    },
    {
        dateTime: '2023-12-02',
        name: 'prova'
    },
    {
        dateTime: '2023-12-03',
        name: 'prova'
    },
    {
        dateTime: '2023-12-04',
        name: 'prova'
    },
    {
        dateTime: '2023-12-04',
        name: 'prova'
    },
    {
        dateTime: '2023-12-04',
        name: 'prova'
    },
    {
        dateTime: '2023-12-01',
        name: 'prova'
    },
    {
        dateTime: '2023-12-02',
        name: 'prova'
    },
    {
        dateTime: '2023-12-03',
        name: 'prova'
    },
    {
        dateTime: '2023-12-04',
        name: 'prova'
    },
    {
        dateTime: '2023-12-01',
        name: 'prova'
    },
    {
        dateTime: '2023-12-02',
        name: 'prova'
    },
    {
        dateTime: '2023-12-03',
        name: 'prova'
    },
    {
        dateTime: '2023-12-04',
        name: 'prova'
    },
    {
        dateTime: '2023-12-04',
        name: 'prova'
    },
    {
        dateTime: '2023-12-04',
        name: 'prova'
    },
    {
        dateTime: '2023-12-01',
        name: 'prova'
    },
    {
        dateTime: '2023-12-02',
        name: 'prova'
    },
    {
        dateTime: '2023-12-03',
        name: 'prova'
    },
    {
        dateTime: '2023-12-04',
        name: 'prova'
    },
    {
        dateTime: '2023-12-01',
        name: 'prova'
    },
    {
        dateTime: '2023-12-02',
        name: 'prova'
    },
    {
        dateTime: '2023-12-03',
        name: 'prova'
    },
    {
        dateTime: '2023-12-04',
        name: 'prova'
    },
]

export default function Cloud() {
    const cloudPageRef = useRef<HTMLDivElement>(null);
    // const q = gsap.utils.selector(cloudPageRef)

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        console.log('CLOUD PAGE REF', cloudPageRef);
        let timeline = gsap.timeline({
            scrollTrigger: {
                trigger: cloudPageRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: 0.15,
                snap: 1 / 28,
                onUpdate: (self) => {
                    console.log('onUpdate', self);
                    cloudPageRef?.current?.style.setProperty("--progress", (self.progress * 100).toString());
                    cloudPageRef?.current?.style.setProperty("--velocity", (Math.abs(self.getVelocity() / 3500).toString()));
                },
                onScrubComplete: () => {
                    console.log('onScrubComplete', self);
                    cloudPageRef?.current?.style.setProperty("--velocity", '0');
                },
                onEnter: () => {
                    console.log('onEnter', self);
                    cloudPageRef?.current?.style.setProperty("--velocity", '0');
                },
                onEnterBack: () => {
                    console.log('onEnterBack', self);
                    cloudPageRef?.current?.style.setProperty("--velocity", '0');
                },
                onLeave: () => {
                    console.log('onLeave', self);
                    cloudPageRef?.current?.style.setProperty("--velocity", '0');
                    window.scrollTo(0, 0);
                },
                onLeaveBack: () => {
                    console.log('onLeaveBack', self);
                    cloudPageRef?.current?.style.setProperty("--velocity", '0');
                }
            },
        });
    }, { scope: cloudPageRef });


    return <div ref={cloudPageRef} className="cloud-page">
        <div className="wrap">
            <ul>
                {Array.from({ length: 28 }, (_, index) => <li className="li-element" key={`album-${index}`}>
                    <time dateTime={`2023-12-${index + 1}`}>{index+1}</time>
                    <span>singolo-{index + 1}</span>
                </li>)}
                {/* {albums.map((album, index) => <li className="li-element" key={index}>
                    <time dateTime={album.dateTime}>{index + 1}</time>
                    <span>
                        {album.name}-{index + 1}
                    </span>
                </li>)} */}
            </ul>
        </div>
        <div className="panelwrap">
            {Array.from({ length: 29}, (_, index) => <div key={index} className="panel"></div>)}
        </div>
    </div>
}