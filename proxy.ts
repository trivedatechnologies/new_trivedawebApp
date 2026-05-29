import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
    const host = request.headers.get("host") || "";

    const isVercelDomain =
        host.includes("new-triveda-technologies.vercel.app") ||
        host.includes("triveda-techno.vercel.app") ||
        host.includes("triveda-technologies.vercel.app");

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
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, logo.png, og-image.png, favicon.png (metadata/icon files)
         */
        "/((?!api|_next/static|_next/image|favicon.ico|logo.png|og-image.png|favicon.png).*)",
    ],
};
