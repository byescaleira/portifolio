import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";

export const metadata: Metadata = {
  title: "Rafael Escaleira — iOS Specialist",
  description:
    "iOS Specialist focused on mobile architecture, code quality, modularization, and shipping native iOS products that scale. Currently leading AI adoption at Globo on Cartola FC.",
  keywords: [
    "iOS",
    "Swift",
    "SwiftUI",
    "UIKit",
    "mobile architecture",
    "Clean Architecture",
    "TDD",
    "Swift Package Manager",
    "Rafael Escaleira",
    "byescaleira",
  ],
  authors: [{ name: "Rafael Escaleira", url: "https://byescaleira.com" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  openGraph: {
    title: "Rafael Escaleira — iOS Specialist",
    description:
      "iOS Specialist focused on mobile architecture, code quality, modularization, and shipping native iOS products that scale.",
    url: "https://byescaleira-frontend.vercel.app",
    siteName: "byescaleira",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafael Escaleira — iOS Specialist",
    description:
      "iOS Specialist focused on mobile architecture, code quality, modularization, and shipping native iOS products that scale.",
    creator: "@byescaleira",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col [overflow-x:clip] bg-background text-foreground transition-colors duration-300">
        <ThemeProvider defaultTheme="dark" enableSystem={true}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
