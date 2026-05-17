

export function OrganizationSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Triveda Technologies",
        url: "https://trivedatechnologies.com",
        logo: "https://trivedatechnologies.com/logo.png",
        description:
            "Premium technology consulting and digital transformation partner delivering AI-driven, scalable, and enterprise-ready solutions.",
        address: {
            "@type": "PostalAddress",
            streetAddress: "3rd Floor, Plot 1A, Surat Nagar, Phase 1",
            addressLocality: "Gurugram",
            addressRegion: "Haryana",
            postalCode: "122006",
            addressCountry: "IN",
        },
        contactPoint: {
            "@type": "ContactPoint",
            email: "care@trivedatechnologies.com",
            contactType: "customer service",
            availableLanguage: ["English", "Hindi"],
        },
        sameAs: [],
        foundingDate: "2024",
        numberOfEmployees: {
            "@type": "QuantitativeValue",
            minValue: 10,
            maxValue: 50,
        },
        areaServed: "Worldwide",
        knowsAbout: [
            "Software Development",
            "AI Solutions",
            "Cloud Infrastructure",
            "Digital Transformation",
            "Product Development",
            "Digital Marketing",
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export function WebsiteSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Triveda Technologies",
        url: "https://trivedatechnologies.com",
        potentialAction: {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate: "https://trivedatechnologies.com/?q={search_term_string}",
            },
            "query-input": "required name=search_term_string",
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export function LocalBusinessSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Triveda Technologies",
        image: "https://trivedatechnologies.com/logo.png",
        url: "https://trivedatechnologies.com",
        telephone: "+91-9973243422",
        email: "care@trivedatechnologies.com",
        address: {
            "@type": "PostalAddress",
            streetAddress: "3rd Floor, Plot 1A, Surat Nagar, Phase 1",
            addressLocality: "Gurugram",
            addressRegion: "Haryana",
            postalCode: "122006",
            addressCountry: "IN",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: 28.4595,
            longitude: 77.0266,
        },
        priceRange: "$$",
        openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
            ],
            opens: "09:00",
            closes: "18:00",
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export function ServiceSchema({
    name,
    description,
    url,
}: {
    name: string;
    description: string;
    url: string;
}) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description,
        url,
        provider: {
            "@type": "Organization",
            name: "Triveda Technologies",
            url: "https://trivedatechnologies.com",
        },
        areaServed: "Worldwide",
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
