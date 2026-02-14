import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = () => {
    const [visibleElements, setVisibleElements] = useState<Record<string, boolean>>({});
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        // Create observer
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setVisibleElements((prev) => ({
                        ...prev,
                        [entry.target.id]: entry.isIntersecting,
                    }));

                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px',
            }
        );

        // Observe all animated elements
        const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
        animatedElements.forEach((element) => {
            observerRef.current?.observe(element);
        });

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    return visibleElements;
};
