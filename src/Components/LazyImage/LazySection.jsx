import React, { useState, useRef, useEffect } from 'react';

/**
 * LazySection Component
 * Lazy loads entire sections/components when they enter the viewport
 */
function LazySection({ children, className = '', rootMargin = '100px' }) {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const currentRef = sectionRef.current;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect();
                    }
                });
            },
            {
                rootMargin,
                threshold: 0.01
            }
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.disconnect();
            }
        };
    }, [rootMargin]);

    return (
        <div ref={sectionRef} className={className}>
            {isVisible ? children : <div style={{ minHeight: '200px' }} />}
        </div>
    );
}

export default LazySection;

