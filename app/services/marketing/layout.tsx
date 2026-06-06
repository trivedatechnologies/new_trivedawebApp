import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Digital Marketing Services — Performance & Growth",
    description:
        "Data-driven digital marketing by Triveda Technologies. Performance marketing, SEO, social media, marketing automation, CRO, and growth analytics for measurable business outcomes.",
    keywords:
        "Triveda, Triveda Tech, Triveda Technologies, Triveda Marketing, digital marketing, performance marketing, SEO services, social media marketing, marketing automation, conversion rate optimization, growth analytics",
    alternates: {
        canonical: "https://trivedatechnologies.com/services/marketing",
    },
    openGraph: {
        title: "Digital Marketing Services — Driving Growth with Data",
        description:
            "Acquire, engage, and convert customers through data-driven digital marketing strategies.",
        url: "https://trivedatechnologies.com/services/marketing",
        type: "website",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Digital Marketing Services — Triveda Technologies",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Digital Marketing Services — Performance & Growth | Triveda Technologies",
        description:
            "Data-driven digital marketing by Triveda Technologies. Performance marketing, SEO, social media, marketing automation, CRO, and growth analytics for measurable business outcomes.",
        images: ["/og-image.png"],
    },
    other: {
        "release-date": "2026-05-31",
    },
};

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
    return children;
}
