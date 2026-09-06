import type { Metadata } from "next";
import { Bodoni_Moda, IBM_Plex_Mono, Spectral } from "next/font/google";
import "./globals.css";

/* As três famílias da decisão 006. Isto encerra a regra de "sem webfont" que
   valia enquanto o meio era serigrafia: Bodoni, Spectral e Plex Mono não
   existem na stack do sistema, e a voz de prancha depende delas. */
const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--f-display",
  display: "swap",
});
const spectral = Spectral({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--f-leitura",
  display: "swap",
});
const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--f-instrumento",
  display: "swap",
});
import { ThemeProvider } from "./components/theme-provider";

export const metadata: Metadata = {
  title: "Rafael Escaleira — iOS Specialist",
  description:
    "iOS Specialist focused on mobile architecture, code quality, modularization, and shipping native iOS products that scale. Currently leading AI adoption at Globo on Cartola.",
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
      className={`h-full antialiased ${bodoni.variable} ${spectral.variable} ${plex.variable}`}
    >
      <body className="min-h-full flex flex-col [overflow-x:clip] bg-background text-foreground transition-colors duration-300">
        <ThemeProvider defaultTheme="dark" enableSystem={true}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
