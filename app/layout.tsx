import { Inter, Lato } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AccentThemeProvider } from "@/components/AccentThemeProvider";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

const lato = Lato({
    subsets: ["latin"],
    weight: ["100", "300", "400", "700", "900"],
    variable: "--font-heading",
});

export const metadata: Metadata = {
    title: "Triveda Technologies — Engineering Intelligent Digital Ecosystems",
    description:
        "Premium technology consulting and digital transformation partner delivering AI-driven, scalable, and enterprise-ready solutions. Custom software, cloud systems, and strategic consulting.",
    keywords:
        "technology consulting, digital transformation, AI solutions, software development, cloud migration, Triveda Technologies, enterprise software, machine learning",
    authors: [{ name: "Triveda Technologies" }],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning className={`${inter.variable} ${lato.variable}`}>
            <body className="min-h-screen bg-background font-sans antialiased text-foreground">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <AccentThemeProvider>
                        <CustomCursor />
                        {children}
                    </AccentThemeProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
