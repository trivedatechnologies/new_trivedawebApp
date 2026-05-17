import type { Metadata, Viewport } from "next";
import { Inter, Lato } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AccentThemeProvider } from "@/components/AccentThemeProvider";
import { GlobalErrorHandler } from "@/components/GlobalErrorHandler";
import { OrganizationSchema, WebsiteSchema, LocalBusinessSchema } from "@/components/JsonLd";


const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

const lato = Lato({
    subsets: ["latin"],
    weight: ["100", "300", "400", "700", "900"],
    variable: "--font-heading",
});

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
        { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    ],
};

export const metadata: Metadata = {
    metadataBase: new URL("https://trivedatechnologies.com"),
    title: {
        default: "Triveda Technologies — Engineering Intelligent Digital Ecosystems",
        template: "%s | Triveda Technologies",
    },
    description:
        "Premium technology consulting and digital transformation partner delivering AI-driven, scalable, and enterprise-ready solutions. Custom software, cloud systems, and strategic consulting.",
    keywords:
        "technology consulting, digital transformation, AI solutions, software development, cloud migration, Triveda Technologies, enterprise software, machine learning, custom software development, IT consulting India, Gurugram tech company",
    authors: [{ name: "Triveda Technologies", url: "https://trivedatechnologies.com" }],
    creator: "Triveda Technologies",
    publisher: "Triveda Technologies",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    alternates: {
        canonical: "https://trivedatechnologies.com",
    },
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "https://trivedatechnologies.com",
        siteName: "Triveda Technologies",
        title: "Triveda Technologies — Engineering Intelligent Digital Ecosystems",
        description:
            "Premium technology consulting and digital transformation partner delivering AI-driven, scalable, and enterprise-ready solutions.",
        images: [
            {
                url: "/logo.png",
                width: 415,
                height: 216,
                alt: "Triveda Technologies",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Triveda Technologies — Engineering Intelligent Digital Ecosystems",
        description:
            "Premium technology consulting and digital transformation partner delivering AI-driven, scalable, and enterprise-ready solutions.",
        images: ["/logo.png"],
    },
    icons: {
        icon: [
            { url: "/favicon.png", type: "image/png" },
        ],
        shortcut: "/favicon.png",
        apple: "/favicon.png",
        other: [
            {
                rel: "apple-touch-icon-precomposed",
                url: "/favicon.png",
            },
        ],
    },
    category: "technology",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning className={`${inter.variable} ${lato.variable}`}>
            <head>
                <OrganizationSchema />
                <WebsiteSchema />
                <LocalBusinessSchema />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.addEventListener('error', function(event) {
                                if (event.message && (event.message.indexOf('ChunkLoadError') > -1 || event.message.indexOf('Loading chunk') > -1)) {
                                    window.location.reload();
                                }
                            });
                        `,
                    }}
                />
            </head>
            <body className="min-h-screen bg-background font-sans antialiased text-foreground" suppressHydrationWarning>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem={false}
                    disableTransitionOnChange
                >
                    <AccentThemeProvider>
                        <GlobalErrorHandler />

                        {children}
                    </AccentThemeProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
