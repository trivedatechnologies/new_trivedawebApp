import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Digital Marketing Services — Performance & Growth",
    description:
        "Data-driven digital marketing by Triveda Technologies. Performance marketing, SEO, social media, marketing automation, CRO, and growth analytics for measurable business outcomes.",
    keywords:
        "digital marketing, performance marketing, SEO services, social media marketing, marketing automation, conversion rate optimization, growth analytics, Triveda Technologies",
    alternates: {
        canonical: "https://trivedatechnologies.com/services/marketing",
    },
    openGraph: {
        title: "Digital Marketing Services — Driving Growth with Data",
        description:
            "Acquire, engage, and convert customers through data-driven digital marketing strategies.",
        url: "https://trivedatechnologies.com/services/marketing",
        type: "website",
    },
};

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
    return children;
}
