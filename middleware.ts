import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  publicRoutes: [
    "/",
    "/about",
    "/contact",
    "/blog",
    "/blog/(.*)",
    "/services",
    "/collections",
    "/collections/(.*)",
    "/products/(.*)",
    "/search/(.*)",
    "/api/(.*)",
    "/sitemap.xml",
    "/sitemap-0.xml",
    "/server-sitemap.xml",
    "/robots.txt"
  ],
  ignoredRoutes: [
    "/",
    "/about", 
    "/contact",
    "/blog",
    "/blog/(.*)",
    "/services",
    "/collections",
    "/collections/(.*)",
    "/products/(.*)",
    "/search/(.*)",
    "/sitemap.xml",
    "/sitemap-0.xml",
    "/server-sitemap.xml",
    "/robots.txt"
  ]
});

export const config = {
  matcher: [
    // Skip all paths that should remain completely public
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest|xml)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)"
  ],
};