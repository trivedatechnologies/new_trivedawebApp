import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "AI & Analytics Solutions — Data-Driven Intelligence",
    description:
        "Unlock the power of data and AI with Triveda Technologies. Machine learning, predictive analytics, business intelligence, AI automation, and conversational AI solutions.",
    keywords:
        "AI solutions, machine learning, predictive analytics, business intelligence, data engineering, AI automation, chatbot development, Triveda Technologies",
    alternates: {
        canonical: "https://trivedatechnologies.com/services/ai-analytics",
    },
    openGraph: {
        title: "AI & Analytics Solutions — Smarter Decisions with Data",
        description:
            "AI and advanced analytics to automate processes, gain insights, and drive smarter decision-making.",
        url: "https://trivedatechnologies.com/services/ai-analytics",
        type: "website",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "AI & Analytics Solutions — Triveda Technologies",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "AI & Analytics Solutions — Data-Driven Intelligence | Triveda Technologies",
        description:
            "Unlock the power of data and AI with Triveda Technologies. Machine learning, predictive analytics, business intelligence, AI automation, and conversational AI solutions.",
        images: ["/og-image.png"],
    },
};

export default function AIAnalyticsLayout({ children }: { children: React.ReactNode }) {
    return children;
}
