/**
 * Utility Helper Functions
 * Reusable functions for common operations
 */

/**
 * Formats a date string to a readable format
 * @param {string|Date} date - Date to format
 * @param {object} options - Intl.DateTimeFormat options
 * @returns {string} Formatted date string
 */
export const formatDate = (date, options = {}) => {
  const defaultOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options,
  };

  try {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return new Intl.DateTimeFormat('en-AU', defaultOptions).format(dateObj);
  } catch (error) {
    console.error('Error formatting date:', error);
    return date;
  }
};

/**
 * Truncates text to a specified length
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @param {string} suffix - Suffix to add (default: '...')
 * @returns {string} Truncated text
 */
export const truncateText = (text, maxLength = 100, suffix = '...') => {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + suffix;
};

/**
 * Generates a slug from a string
 * @param {string} text - Text to convert to slug
 * @returns {string} Slugified string
 */
export const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

/**
 * Debounce function to limit function calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = (func, wait = 300) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Throttle function to limit function calls
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
export const throttle = (func, limit = 300) => {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Checks if element is in viewport
 * @param {HTMLElement} element - Element to check
 * @returns {boolean} True if element is in viewport
 */
export const isInViewport = (element) => {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * Smooth scroll to element
 * @param {string|HTMLElement} target - Target element or selector
 * @param {object} options - Scroll options
 */
export const scrollToElement = (target, options = {}) => {
  const defaultOptions = {
    behavior: 'smooth',
    block: 'start',
    ...options,
  };

  try {
    const element = typeof target === 'string' 
      ? document.querySelector(target) 
      : target;

    if (element) {
      element.scrollIntoView(defaultOptions);
    }
  } catch (error) {
    console.error('Error scrolling to element:', error);
  }
};

/**
 * Formats currency
 * @param {number|string} amount - Amount to format
 * @param {string} currency - Currency code (default: 'AUD')
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (amount, currency = 'AUD') => {
  try {
    const numAmount = typeof amount === 'string' 
      ? parseFloat(amount.replace(/[^0-9.-]+/g, '')) 
      : amount;

    return new Intl.NumberFormat('en-AU', {
      style: 'currency',
      currency: currency,
    }).format(numAmount);
  } catch (error) {
    console.error('Error formatting currency:', error);
    return amount;
  }
};

/**
 * Validates email address
 * @param {string} email - Email to validate
 * @returns {boolean} True if email is valid
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Gets image dimensions
 * @param {string} src - Image source
 * @returns {Promise<{width: number, height: number}>} Image dimensions
 */
export const getImageDimensions = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve({ width: img.width, height: img.height });
    };
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Creates a safe HTML ID from text
 * @param {string} text - Text to convert
 * @returns {string} Safe HTML ID
 */
export const createSafeId = (text) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

