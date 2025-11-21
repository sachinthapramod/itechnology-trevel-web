import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SEO_DEFAULTS } from '../../config/constants'

function Breadcrumb({ title, description, bgImage }) {
    const location = useLocation();
    const currentUrl = `${SEO_DEFAULTS.siteUrl}${location.pathname}`;

    // Generate breadcrumb structured data
    useEffect(() => {
        const breadcrumbData = {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: SEO_DEFAULTS.siteUrl
                },
                {
                    '@type': 'ListItem',
                    position: 2,
                    name: title,
                    item: currentUrl
                }
            ]
        };

        // Remove existing breadcrumb structured data
        const existingScript = document.querySelector('script[data-breadcrumb-schema]');
        if (existingScript) {
            existingScript.remove();
        }

        // Add new breadcrumb structured data
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-breadcrumb-schema', 'true');
        script.innerHTML = JSON.stringify(breadcrumbData);
        document.head.appendChild(script);

        return () => {
            const scriptToRemove = document.querySelector('script[data-breadcrumb-schema]');
            if (scriptToRemove) {
                scriptToRemove.remove();
            }
        };
    }, [title, currentUrl]);

    return (
        <>
            <div
                className="breadcumb-wrapper "
                style={{ backgroundImage: `url(${bgImage || '/assets/img/bg/breadcumb-bg.jpg'})`, backgroundRepeat:"no-repeat", backgroundSize:"cover" }}
            >
                <div className="container">
                    <div className="breadcumb-content">
                        <h1 className="breadcumb-title">{title}</h1>
                        <nav aria-label="Breadcrumb">
                            <ul className="breadcumb-menu" itemScope itemType="https://schema.org/BreadcrumbList">
                                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                                    <Link to="/" itemProp="item">
                                        <span itemProp="name">Home</span>
                                    </Link>
                                    <meta itemProp="position" content="1" />
                                </li>
                                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                                    <span itemProp="name">{title}</span>
                                    <meta itemProp="position" content="2" />
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Breadcrumb
