import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cloud Services — Migration, DevOps & Infrastructure",
    description:
        "Scalable, secure, and high-performance cloud infrastructure by Triveda Technologies. Cloud migration, architecture design, DevOps, CI/CD, and monitoring services.",
    keywords:
        "cloud services, cloud migration, DevOps, CI/CD, cloud architecture, infrastructure optimization, AWS, Azure, GCP, Triveda Technologies",
    alternates: {
        canonical: "https://trivedatechnologies.com/services/cloud",
    },
    openGraph: {
        title: "Cloud Services — Scalable & Secure Cloud Infrastructure",
        description:
            "Migrate, manage, and optimize your cloud infrastructure with high availability and security.",
        url: "https://trivedatechnologies.com/services/cloud",
        type: "website",
    },
};

export default function CloudLayout({ children }: { children: React.ReactNode }) {
    return children;
}
