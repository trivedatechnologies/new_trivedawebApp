import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Product Development Services — MVP to Scale",
    description:
        "Transform your ideas into scalable digital products. Triveda Technologies offers end-to-end product development — strategy, UI/UX design, MVP, full-stack development, and optimization.",
    keywords:
        "Triveda, Triveda Tech, Triveda Technologies, Triveda Products, product development, MVP development, digital product, UI UX design, full stack development, product scaling",
    alternates: {
        canonical: "https://trivedatechnologies.com/services/product",
    },
    openGraph: {
        title: "Product Development Services — From Idea to Growth",
        description:
            "End-to-end product development services: strategy, MVP, UI/UX, full-stack development, and scaling.",
        url: "https://trivedatechnologies.com/services/product",
        type: "website",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Product Development Services — Triveda Technologies",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Product Development Services — MVP to Scale | Triveda Technologies",
        description:
            "Transform your ideas into scalable digital products. Triveda Technologies offers end-to-end product development — strategy, UI/UX design, MVP, full-stack development, and optimization.",
        images: ["/og-image.png"],
    },
    other: {
        "release-date": "2026-05-31",
    },
};

export default function ProductLayout({ children }: { children: React.ReactNode }) {
    return children;
}
