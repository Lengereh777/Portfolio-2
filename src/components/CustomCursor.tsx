import React, { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        // Mouse move
        const handleMouseMove = (e: MouseEvent) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        };

        // Mouse enter/leave interactive elements
        const interactiveElements = document.querySelectorAll(
            'a, button, [role="button"], input, textarea, select'
        );

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        interactiveElements.forEach((element) => {
            element.addEventListener('mouseenter', handleMouseEnter);
            element.addEventListener('mouseleave', handleMouseLeave);
        });

        // Click animation
        const handleMouseDown = () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
        };

        const handleMouseUp = () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);

            interactiveElements.forEach((element) => {
                element.removeEventListener('mouseenter', handleMouseEnter);
                element.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className={`custom-cursor ${isHovering ? 'hover' : ''}`}
            style={{
                position: 'fixed',
                left: 0,
                top: 0,
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none',
                zIndex: 9999,
                transition: 'all 0.3s ease',
                width: '20px',
                height: '20px',
                border: '2px solid var(--primary-color)',
                borderRadius: '50%',
                mixBlendMode: 'difference',
            }}
        />
    );
};

export { CustomCursor };
