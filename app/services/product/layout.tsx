import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Product Development Services — MVP to Scale",
    description:
        "Transform your ideas into scalable digital products. Triveda Technologies offers end-to-end product development — strategy, UI/UX design, MVP, full-stack development, and optimization.",
    keywords:
        "product development, MVP development, digital product, UI UX design, full stack development, product scaling, Triveda Technologies",
    alternates: {
        canonical: "https://trivedatechnologies.com/services/product",
    },
    openGraph: {
        title: "Product Development Services — From Idea to Growth",
        description:
            "End-to-end product development services: strategy, MVP, UI/UX, full-stack development, and scaling.",
        url: "https://trivedatechnologies.com/services/product",
        type: "website",
    },
};

export default function ProductLayout({ children }: { children: React.ReactNode }) {
    return children;
}
