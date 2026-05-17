import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Triveda Technologies",
        short_name: "Triveda",
        description:
            "Premium technology consulting and digital transformation partner delivering AI-driven, scalable, and enterprise-ready solutions.",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#6366f1",
        icons: [
            {
                src: "/favicon.png",
                sizes: "331x276",
                type: "image/png",
            },
            {
                src: "/logo.png",
                sizes: "415x216",
                type: "image/png",
            },
        ],
    };
}
