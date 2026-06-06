import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Case Studies — Real Success Stories & Business Impact",
    description:
        "Explore how Triveda Technologies has delivered measurable business impact through custom software, AI solutions, and digital transformation. Real client success stories.",
    keywords:
        "Triveda, Triveda Tech, Triveda Technologies, case studies, success stories, digital transformation results, AI implementation, software development portfolio, Triveda Technologies projects, Triveda portfolio",
    alternates: {
        canonical: "https://trivedatechnologies.com/case-studies",
    },
    openGraph: {
        title: "Case Studies — Delivering Measurable Business Impact",
        description:
            "Real stories of how we've helped businesses design, build, and scale world-class technology solutions.",
        url: "https://trivedatechnologies.com/case-studies",
        type: "website",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Triveda Technologies Case Studies",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Case Studies — Real Success Stories & Business Impact | Triveda Technologies",
        description:
            "Explore how Triveda Technologies has delivered measurable business impact through custom software, AI solutions, and digital transformation.",
        images: ["/og-image.png"],
    },
    other: {
        "release-date": "2026-05-31",
    },
};

export default function CaseStudiesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
