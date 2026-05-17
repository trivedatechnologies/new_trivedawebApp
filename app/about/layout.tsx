import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us — Leadership, Philosophy & Mission",
    description:
        "Learn about Triveda Technologies — 20+ years of leadership experience in digital transformation, AI solutions, and scalable software development. Trusted by businesses worldwide.",
    keywords:
        "about Triveda Technologies, technology leadership, IT company Gurugram, digital transformation company India, enterprise software team",
    alternates: {
        canonical: "https://trivedatechnologies.com/about",
    },
    openGraph: {
        title: "About Triveda Technologies — Our Story & Mission",
        description:
            "20+ years of leadership experience delivering scalable digital, AI, and growth solutions to businesses worldwide.",
        url: "https://trivedatechnologies.com/about",
        type: "website",
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
