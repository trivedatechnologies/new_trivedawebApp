import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Case Studies — Real Success Stories & Business Impact",
    description:
        "Explore how Triveda Technologies has delivered measurable business impact through custom software, AI solutions, and digital transformation. Real client success stories.",
    keywords:
        "case studies, success stories, digital transformation results, AI implementation, software development portfolio, Triveda Technologies projects",
    alternates: {
        canonical: "https://trivedatechnologies.com/case-studies",
    },
    openGraph: {
        title: "Case Studies — Delivering Measurable Business Impact",
        description:
            "Real stories of how we've helped businesses design, build, and scale world-class technology solutions.",
        url: "https://trivedatechnologies.com/case-studies",
        type: "website",
    },
};

export default function CaseStudiesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
