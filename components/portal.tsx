'use client'
/** Core */
import { useRef, useState } from "react";
/** Types */
export type PortalProps = {
    totalDoors: number;
}
const Portal = ({ totalDoors }: PortalProps) => {
    const [selectedDoor, setSelectedDoor] = useState(1);
    const [isDragging, setIsDragging] = useState(false);
    const [rotation, setRotation] = useState(0);
    const portalRef = useRef<any>(null);

    const handleDoorClick = (doorNumber: any) => {
        setSelectedDoor((prevDoor) => (prevDoor === doorNumber ? null : doorNumber));
    };

    const handleMouseDown = (event: any) => {
        setIsDragging(true);
        setRotation(event.clientX);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (event: any) => {
        if (isDragging) {
            const newRotation = event.clientX;
            updateRotation(newRotation);
        }
    };

    const handleTouchStart = (event: any) => {
        setIsDragging(true);
        setRotation(event.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    const handleTouchMove = (event: any) => {
        if (isDragging) {
            const newRotation = event.touches[0].clientX;
            updateRotation(newRotation);
        }
    };

    const updateRotation = (newRotation: number) => {
        if (portalRef.current) {
            const angleStep = 360 / totalDoors;
            const rotationStep = (newRotation - rotation) * 0.1;
            const newAngle = rotationStep + rotation;
            setRotation(newRotation);
            portalRef.current.style.transform = `rotateY(${newAngle}deg)`;
        }
    };

    const renderDoors = () => {
        const doors = [];
        const angleStep = 360 / totalDoors;

        for (let i = 0; i < totalDoors; i++) {
            const angle = i * angleStep;
            const doorStyle = {
                transform: `rotateY(${angle}deg) translateZ(250px)`,
            };

            doors.push(
                <div
                    key={i}
                    className={`door door-${i + 1} ${selectedDoor === i + 1 ? "open" : ""}`}
                    onClick={() => handleDoorClick(i + 1)}
                    style={doorStyle}
                >
                    Door {i + 1}
                    {selectedDoor === i + 1 && (
                        <div className="behind-door">
                            Behind Door {i + 1}
                        </div>
                    )}
                </div>
            );
        }

        return doors;
    };

    return (
        <div
            className="w-full flex justify-center items-center h-screen bg-blue-300"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
        >
            <div className="circular-portal" ref={portalRef}>
                {renderDoors()}
            </div>
        </div>
    );
};

export default Portal;