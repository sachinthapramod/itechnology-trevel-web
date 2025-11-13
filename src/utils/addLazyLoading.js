/**
 * Utility function to add loading="lazy" to all images that don't have it
 * This can be called on component mount or in a useEffect
 */
export const addLazyLoadingToImages = () => {
    if (typeof window === 'undefined') return;

    // Find all images without loading attribute
    const images = document.querySelectorAll('img:not([loading])');
    
    images.forEach((img) => {
        // Skip images that are already in viewport or critical (like logos, icons)
        const isCritical = img.closest('header, .hero, .banner, .logo') !== null;
        const isSmallIcon = img.width < 100 && img.height < 100;
        
        if (!isCritical && !isSmallIcon) {
            img.setAttribute('loading', 'lazy');
        }
    });
};

/**
 * Initialize lazy loading on page load
 */
export const initLazyLoading = () => {
    if (typeof window === 'undefined') return;

    // Run on DOMContentLoaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addLazyLoadingToImages);
    } else {
        addLazyLoadingToImages();
    }

    // Also run after a short delay to catch dynamically added images
    setTimeout(addLazyLoadingToImages, 1000);
};

