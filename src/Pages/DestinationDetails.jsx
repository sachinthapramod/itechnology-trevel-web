import React from 'react'
import { useParams } from 'react-router-dom'
import HeaderOne from '../Components/Header/HeaderOne'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import DestinationDetailsMain from '../Components/Destination/DestinationDetailsMain'
import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'
import Seo from '../Components/SEO/Seo'
import { SEO_DEFAULTS } from '../config/constants'
import Posts from '../Components/data/data-destination.json'

function DestinationDetails() {
    const { id } = useParams();
    const destinationPost = Posts.find(post => post.id === parseInt(id));

    // Destination SEO data mapping
    const destinationSeoData = {
        1: {
            title: 'Bruny Island Group Tour | Tasmania Island Paradise | Safe Travel',
            description: 'Discover Bruny Island on a full-day group tour from Hobart. Experience The Neck Lookout, Adventure Bay, wildlife encounters, and gourmet tastings. Small-group experience with expert guide. $190.00 per person.',
            keywords: [
                'Bruny Island group tour',
                'Bruny Island day tour',
                'Tasmania island tours',
                'Bruny Island ferry tour',
                'Hobart to Bruny Island',
                'Bruny Island wildlife',
                'Bruny Island tastings',
                'Tasmania day tours'
            ],
            ogImage: `${SEO_DEFAULTS.siteUrl}/assets/img/destination/destination-details.jpg`
        },
        2: {
            title: 'Bruny Island Private Tour | Exclusive Tasmania Charter | Safe Travel',
            description: 'Private Bruny Island tour from Hobart. Customisable itinerary with private guide, flexible pacing, extended tastings, and premium experiences. Perfect for couples and families. $190.00 per person.',
            keywords: [
                'Bruny Island private tour',
                'Bruny Island charter',
                'Tasmania private tours',
                'Bruny Island exclusive tour',
                'Hobart private day tours',
                'Bruny Island custom tour'
            ],
            ogImage: `${SEO_DEFAULTS.siteUrl}/assets/img/destination/destination-details.jpg`
        },
        3: {
            title: 'Mount Wellington Group Tour | Hobart Summit Views | Safe Travel',
            description: 'Mount Wellington group tour from Hobart. Visit kunanyi/Mount Wellington summit (1,271m) for panoramic views, explore Richmond Village, and discover Tasmania\'s history. $120.00 per person.',
            keywords: [
                'Mount Wellington tour',
                'Mount Wellington group tour',
                'kunanyi Mount Wellington',
                'Hobart summit tour',
                'Mount Wellington day tour',
                'Tasmania mountain tours',
                'Richmond Village tour'
            ],
            ogImage: `${SEO_DEFAULTS.siteUrl}/assets/img/destination/destination-details.jpg`
        },
        4: {
            title: 'Mount Wellington Private Tour | Custom Hobart Experience | Safe Travel',
            description: 'Private Mount Wellington tour from Hobart. Flexible charter covering summit views, Richmond Village heritage walk, and optional vineyard stops. Ideal for photographers. $120.00 per person.',
            keywords: [
                'Mount Wellington private tour',
                'Mount Wellington charter',
                'Hobart private summit tour',
                'Richmond Village private tour',
                'Mount Wellington photography tour',
                'Tasmania private mountain tours'
            ],
            ogImage: `${SEO_DEFAULTS.siteUrl}/assets/img/destination/destination-details.jpg`
        }
    };

    const seoData = destinationSeoData[parseInt(id)] || destinationSeoData[1];
    const canonicalUrl = `${SEO_DEFAULTS.siteUrl}/destination/${id}`;

    // Generate structured data
    const getStructuredData = () => {
        const baseData = {
            '@context': 'https://schema.org',
            '@type': 'TouristDestination',
            name: destinationPost?.title || 'Tasmania Tour Destination',
            description: seoData.description,
            image: seoData.ogImage,
            url: canonicalUrl,
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Hobart',
                addressRegion: 'TAS',
                addressCountry: 'AU'
            },
            containsPlace: {
                '@type': 'Place',
                name: parseInt(id) <= 2 ? 'Bruny Island' : 'Mount Wellington',
                address: {
                    '@type': 'PostalAddress',
                    addressRegion: 'TAS',
                    addressCountry: 'AU'
                }
            }
        };

        // Add TouristTrip for the tour
        const tourData = {
            '@context': 'https://schema.org',
            '@type': 'TouristTrip',
            name: destinationPost?.title || 'Tasmania Tour',
            description: seoData.description,
            image: seoData.ogImage,
            url: canonicalUrl,
            provider: {
                '@type': 'TravelAgency',
                name: 'Safe Travel and Tour Services',
                url: SEO_DEFAULTS.siteUrl
            },
            offers: {
                '@type': 'Offer',
                price: destinationPost?.price?.replace('$', '') || '190.00',
                priceCurrency: 'AUD',
                availability: 'https://schema.org/InStock',
                url: canonicalUrl
            }
        };

        if (parseInt(id) <= 2) {
            // Bruny Island tours
            tourData.itinerary = [
                {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Ferry crossing to Bruny Island'
                },
                {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'The Neck Lookout for panoramic views'
                },
                {
                    '@type': 'ListItem',
                    position: 3,
                    name: 'Adventure Bay and wildlife spotting'
                },
                {
                    '@type': 'ListItem',
                    position: 4,
                    name: 'Gourmet tastings (cheese, oysters, chocolate, honey)'
                }
            ];
        } else {
            // Mount Wellington tours
            tourData.itinerary = [
                {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Mount Wellington summit visit'
                },
                {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Richmond Village heritage walk'
                },
                {
                    '@type': 'ListItem',
                    position: 3,
                    name: 'Richmond Bridge and historic sites'
                },
                {
                    '@type': 'ListItem',
                    position: 4,
                    name: 'Local bakery and artisan visits'
                }
            ];
        }

        return [baseData, tourData];
    };

    return (
        <>
            <Seo
                title={seoData.title}
                description={seoData.description}
                keywords={seoData.keywords}
                canonical={canonicalUrl}
                ogImage={seoData.ogImage}
                structuredData={getStructuredData()}
            />
            <HeaderOne />
            <Breadcrumb
                title="Destination Details"
            />
            <DestinationDetailsMain />
            <FooterFour />
            <ScrollToTop />
        </>
    )
}

export default DestinationDetails
