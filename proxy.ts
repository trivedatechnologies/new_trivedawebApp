import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
    const host = request.headers.get("host") || "";

    const isVercelDomain = host.includes("vercel.app");

    if (isVercelDomain) {
        const url = request.nextUrl.clone();
        url.host = "trivedatechnologies.com";
        url.protocol = "https";
        return NextResponse.redirect(url, 301);
    }

    return NextResponse.next();
}

// Ensure the proxy runs on all paths except static assets and API routes
export const config = {
    matcher: [

        "/((?!api|_next/static|_next/image|favicon.ico|logo.png|og-image.png|favicon.png).*)",
    ],
};
