import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cloud Services — Migration, DevOps & Infrastructure",
    description:
        "Scalable, secure, and high-performance cloud infrastructure by Triveda Technologies. Cloud migration, architecture design, DevOps, CI/CD, and monitoring services.",
    keywords:
        "Triveda, Triveda Tech, Triveda Technologies, Triveda Cloud, cloud services, cloud migration, DevOps, CI/CD, cloud architecture, infrastructure optimization, AWS, Azure, GCP",
    alternates: {
        canonical: "https://trivedatechnologies.com/services/cloud",
    },
    openGraph: {
        title: "Cloud Services — Scalable & Secure Cloud Infrastructure",
        description:
            "Migrate, manage, and optimize your cloud infrastructure with high availability and security.",
        url: "https://trivedatechnologies.com/services/cloud",
        type: "website",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Cloud Services — Triveda Technologies",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Cloud Services — Migration, DevOps & Infrastructure | Triveda Technologies",
        description:
            "Scalable, secure, and high-performance cloud infrastructure by Triveda Technologies. Cloud migration, architecture design, DevOps, CI/CD, and monitoring services.",
        images: ["/og-image.png"],
    },
    other: {
        "release-date": "2026-05-31",
    },
};

export default function CloudLayout({ children }: { children: React.ReactNode }) {
    return children;
}
