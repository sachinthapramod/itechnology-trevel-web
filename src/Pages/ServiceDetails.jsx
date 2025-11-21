import React from 'react'
import { useParams } from 'react-router-dom'
import HeaderOne from '../Components/Header/HeaderOne'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import ServiceDetailsMain from '../Components/Services/ServiceDetailsMain'
import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'
import Seo from '../Components/SEO/Seo'
import { SEO_DEFAULTS } from '../config/constants'

function ServiceDetails() {
    const { id } = useParams();
    
    // Service content mapping for SEO
    const serviceSeoData = {
        1: {
            title: 'Bruny Island Group Tour Package | Safe Travel Tasmania Tours',
            description: 'Join our Bruny Island group tour from Hobart. Full-day adventure with ferry crossing, The Neck Lookout, Adventure Bay, wildlife spotting, and gourmet tastings (cheese, oysters, chocolate, honey). Small-group experience with expert guide. $190.00 per person.',
            keywords: [
                'Bruny Island group tour',
                'Bruny Island day tour Hobart',
                'Tasmania group tours',
                'Bruny Island ferry tour',
                'Bruny Island tastings tour',
                'Hobart day tours',
                'Tasmania wildlife tours',
                'Bruny Island Adventure Bay'
            ],
            ogImage: `${SEO_DEFAULTS.siteUrl}/assets/img/destination/destination-inner-1.jpg`
        },
        2: {
            title: 'Bruny Island Private Tour Package | Exclusive Tasmania Charter',
            description: 'Exclusive Bruny Island private tour from Hobart. Customisable itinerary with private guide, flexible pacing, extended tastings, optional Cape Bruny Lighthouse, and premium local experiences. Perfect for couples, families, or small groups. $190.00 per person.',
            keywords: [
                'Bruny Island private tour',
                'Bruny Island charter',
                'Tasmania private tours',
                'Bruny Island exclusive tour',
                'Hobart private day tours',
                'Tasmania custom tours',
                'Bruny Island photography tour'
            ],
            ogImage: `${SEO_DEFAULTS.siteUrl}/assets/img/destination/destination-inner-1.jpg`
        },
        3: {
            title: 'Mount Wellington Group Tour | Hobart Summit & Richmond Village',
            description: 'Mount Wellington group tour from Hobart. Visit kunanyi/Mount Wellington summit (1,271m) for panoramic views, explore historic Richmond Village, Richmond Bridge, and local bakeries. Small-group experience with knowledgeable guide. $120.00 per person.',
            keywords: [
                'Mount Wellington tour',
                'Mount Wellington group tour Hobart',
                'kunanyi Mount Wellington',
                'Richmond Village tour',
                'Hobart summit tour',
                'Tasmania mountain tours',
                'Mount Wellington day tour'
            ],
            ogImage: `${SEO_DEFAULTS.siteUrl}/assets/img/destination/destination-inner-1.jpg`
        },
        4: {
            title: 'Mount Wellington Private Tour | Custom Hobart Summit Experience',
            description: 'Private Mount Wellington tour from Hobart. Flexible charter covering summit views, Richmond Village heritage walk, optional vineyard stops, and custom commentary. Ideal for photographers and families. $120.00 per person.',
            keywords: [
                'Mount Wellington private tour',
                'Mount Wellington charter',
                'Hobart private summit tour',
                'Richmond Village private tour',
                'Tasmania private mountain tours',
                'Mount Wellington photography tour'
            ],
            ogImage: `${SEO_DEFAULTS.siteUrl}/assets/img/destination/destination-inner-1.jpg`
        }
    };

    const seoData = serviceSeoData[parseInt(id)] || serviceSeoData[1];
    const canonicalUrl = `${SEO_DEFAULTS.siteUrl}/service/${id}`;

    // Generate structured data based on service
    const getStructuredData = () => {
        const baseData = {
            '@context': 'https://schema.org',
            '@type': 'TouristTrip',
            name: seoData.title.split('|')[0].trim(),
            description: seoData.description,
            image: seoData.ogImage,
            url: canonicalUrl,
            provider: {
                '@type': 'TravelAgency',
                name: 'Safe Travel and Tour Services',
                url: SEO_DEFAULTS.siteUrl,
                address: {
                    '@type': 'PostalAddress',
                    streetAddress: '6/14 Cessna Way',
                    addressLocality: 'Cambridge',
                    addressRegion: 'TAS',
                    postalCode: '7170',
                    addressCountry: 'AU'
                }
            },
            offers: {
                '@type': 'Offer',
                priceCurrency: 'AUD',
                availability: 'https://schema.org/InStock',
                url: canonicalUrl
            }
        };

        // Add specific details based on service ID
        if (parseInt(id) === 1 || parseInt(id) === 2) {
            // Bruny Island tours
            baseData.itinerary = [
                {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Ferry crossing to Bruny Island via D\'Entrecasteaux Channel'
                },
                {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'The Neck Lookout for 360° panoramic views'
                },
                {
                    '@type': 'ListItem',
                    position: 3,
                    name: 'Adventure Bay beach walk and wildlife spotting'
                },
                {
                    '@type': 'ListItem',
                    position: 4,
                    name: 'Gourmet tastings: cheese, oysters, chocolate, and honey'
                }
            ];
            baseData.offers.price = '190.00';
            baseData.duration = 'PT9H';
        } else if (parseInt(id) === 3 || parseInt(id) === 4) {
            // Mount Wellington tours
            baseData.itinerary = [
                {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Mount Wellington (kunanyi) summit visit at 1,271 metres'
                },
                {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Richmond Village heritage walk and historic sites'
                },
                {
                    '@type': 'ListItem',
                    position: 3,
                    name: 'Richmond Bridge (Australia\'s oldest bridge)'
                },
                {
                    '@type': 'ListItem',
                    position: 4,
                    name: 'Local bakery and artisan shop visits'
                }
            ];
            baseData.offers.price = '120.00';
            baseData.duration = 'PT9H';
        }

        return baseData;
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
                title="Service Details"
            />
            <ServiceDetailsMain />
            <FooterFour />
            <ScrollToTop />
        </>
    )
}

export default ServiceDetails
