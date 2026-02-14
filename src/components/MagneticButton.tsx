import React, { useRef, useEffect, useState } from 'react';

interface MagneticButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({
    children,
    className = '',
    onClick,
}) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const button = buttonRef.current;
        if (!button) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = button.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const deltaX = (e.clientX - centerX) / 5;
            const deltaY = (e.clientY - centerY) / 5;

            setPosition({ x: deltaX, y: deltaY });
        };

        const handleMouseLeave = () => {
            setPosition({ x: 0, y: 0 });
        };

        button.addEventListener('mousemove', handleMouseMove);
        button.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            button.removeEventListener('mousemove', handleMouseMove);
            button.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <button
            ref={buttonRef}
            className={`magnetic-button ${className}`}
            onClick={onClick}
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
                transition: 'transform 0.15s ease',
            }}
        >
            {children}
        </button>
    );
};

export { MagneticButton };
