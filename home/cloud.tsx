'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const steps = [
"https://images.pexels.com/photos/65882/chocolate-dark-coffee-confiserie-65882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300",
	"https://images.pexels.com/photos/5224910/pexels-photo-5224910.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300",
	"https://images.pexels.com/photos/963755/pexels-photo-963755.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
	"https://images.pexels.com/photos/1377452/pexels-photo-1377452.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
	"https://images.pexels.com/photos/34519/rain-boots-umbrella-wet.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    // Add more image URLs for each step
];

const ScrollTimeline = () => {
    const controls = useAnimation();

    const handleScroll = () => {
        const scrollPosition = window.scrollX;
        controls.start({ x: -scrollPosition });
    };

    // Add event listener to handle scroll
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <motion.div
            className="scroll-timeline"
            style={{ display: 'flex', flexDirection: 'row', whiteSpace: 'nowrap' }}
            animate={controls}
        >
            {steps.map((step, index) => (
                <motion.div
                    key={index}
                    style={{
                        width: '100vw',
                        height: '100vh',
                        backgroundImage: `url(${step})`,
                        backgroundSize: 'cover',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#fff',
                        fontSize: '2em',
                    }}
                >
                    singolo-{index + 1}
                </motion.div>
            ))}
        </motion.div>
    );
};

export default ScrollTimeline;