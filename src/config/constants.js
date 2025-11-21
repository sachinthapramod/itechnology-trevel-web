/**
 * Application Constants
 * Centralized configuration for the entire application
 */

// Application Information
export const APP_INFO = {
  name: 'Safe Travel and Tour Services',
  shortName: 'Safetravel',
  version: '1.0.0',
  description: 'Tasmania Group & Private Tours',
};

// Contact Information
export const CONTACT_INFO = {
  address: '6/14 Cessna Way, Cambridge TAS 7170, Australia',
  email: 'Info@safetravelandtourservices.com.au',
  phone: {
    primary: '+01 234 567 890',
    secondary: '+09 876 543 210',
  },
  hours: 'Sun to Friday: 8.00 am - 7.00 pm',
};

// Social Media Links
export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/',
  twitter: 'https://www.twitter.com/',
  linkedin: 'https://www.linkedin.com/',
  whatsapp: 'https://www.whatsapp.com/',
  instagram: 'https://instagram.com/',
};

// SEO Defaults
export const SEO_DEFAULTS = {
  title: 'Safe Travel and Tour Services | Tasmania Group & Private Tours',
  description: 'Experience Tasmania\'s pristine wilderness with Safe Travel and Tour Services. One-day tours, private charters, and group adventures to Bruny Island and Mount Wellington.',
  keywords: 'Tasmania tours, Bruny Island tours, Mount Wellington tours, Hobart day tours, private tours Tasmania, group tours Tasmania',
  author: 'Safe Travel and Tour Services',
  siteUrl: process.env.REACT_APP_SITE_URL || 'https://safetravelandtourservices.com.au',
};

// Image Optimization Settings
export const IMAGE_SETTINGS = {
  lazyLoadThreshold: 50, // pixels before viewport
  placeholder: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E',
  criticalImages: ['logo', 'favicon', 'hero'], // Images that should load immediately
};

// Route Paths
export const ROUTES = {
  home: '/',
  about: '/about',
  destination: '/destination',
  service: '/service',
  activities: '/activities',
  gallery: '/gallery',
  tour: '/tour',
  tourGuide: '/tour-guide',
  blog: '/blog',
  contact: '/contact',
  faq: '/faq',
};

// Tour Packages
export const TOUR_PACKAGES = {
  brunyIsland: {
    group: {
      title: 'Bruny Island Group Tour Package',
      price: '$190.00',
      duration: '9 Hours',
      type: 'Group Tour',
    },
    private: {
      title: 'Bruny Island Private Tour Package',
      price: '$190.00',
      duration: '9 Hours',
      type: 'Private Tour',
    },
  },
  mountWellington: {
    group: {
      title: 'Mount Wellington Group Tour',
      price: '$120.00',
      duration: '9 Hours',
      type: 'Group Tour',
    },
    private: {
      title: 'Mount Wellington Private Tour',
      price: '$120.00',
      duration: '9 Hours',
      type: 'Private Tour',
    },
  },
};

// Copyright
export const COPYRIGHT = {
  text: 'Copyright 2025 Safetravels. All Rights Reserved.',
  company: 'Safetravels',
};

export default {
  APP_INFO,
  CONTACT_INFO,
  SOCIAL_LINKS,
  SEO_DEFAULTS,
  IMAGE_SETTINGS,
  ROUTES,
  TOUR_PACKAGES,
  COPYRIGHT,
};

