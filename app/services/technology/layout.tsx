import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Technology Solutions — Custom Software & Enterprise Development",
    description:
        "Robust, scalable, and enterprise-grade technology solutions by Triveda Technologies. Custom software, web & mobile apps, API integrations, and legacy modernization.",
    keywords:
        "custom software development, web application development, mobile app development, API integration, enterprise software, legacy modernization, Triveda Technologies",
    alternates: {
        canonical: "https://trivedatechnologies.com/services/technology",
    },
    openGraph: {
        title: "Technology Solutions — Enterprise-Grade Software Development",
        description:
            "High-performance systems tailored to complex business needs with scalability and security.",
        url: "https://trivedatechnologies.com/services/technology",
        type: "website",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Technology Solutions — Triveda Technologies",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Technology Solutions — Custom Software & Enterprise Development | Triveda Technologies",
        description:
            "Robust, scalable, and enterprise-grade technology solutions by Triveda Technologies. Custom software, web & mobile apps, API integrations, and legacy modernization.",
        images: ["/og-image.png"],
    },
    other: {
        "release-date": "2026-05-31",
    },
};

export default function TechnologyLayout({ children }: { children: React.ReactNode }) {
    return children;
}
