import React, { useState, useRef, useEffect } from 'react';

/**
 * LazyImage Component
 * Implements lazy loading for images using Intersection Observer API
 * Falls back to native loading="lazy" for browsers that support it
 */
function LazyImage({ 
    src, 
    alt = '', 
    className = '', 
    style = {},
    placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E',
    onLoad,
    ...props 
}) {
    const [imageSrc, setImageSrc] = useState(placeholder);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
        // Check if browser supports native lazy loading
        const supportsNativeLazy = 'loading' in HTMLImageElement.prototype;

        if (supportsNativeLazy) {
            // Use native lazy loading
            setImageSrc(src);
            setIsInView(true);
            return;
        }

        // Use Intersection Observer for browsers without native support
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                        setImageSrc(src);
                        observer.disconnect();
                    }
                });
            },
            {
                rootMargin: '50px', // Start loading 50px before image enters viewport
                threshold: 0.01
            }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => {
            if (imgRef.current) {
                observer.disconnect();
            }
        };
    }, [src]);

    const handleLoad = () => {
        setIsLoaded(true);
        if (onLoad) {
            onLoad();
        }
    };

    const handleError = () => {
        // Fallback to placeholder on error
        setImageSrc(placeholder);
    };

    return (
        <img
            ref={imgRef}
            src={imageSrc}
            alt={alt}
            className={`${className} ${isLoaded ? 'lazy-loaded' : 'lazy-loading'}`}
            style={{
                ...style,
                transition: 'opacity 0.3s ease-in-out',
                opacity: isLoaded ? 1 : 0.7
            }}
            loading={isInView ? 'lazy' : undefined}
            onLoad={handleLoad}
            onError={handleError}
            {...props}
        />
    );
}

export default LazyImage;

