import type { Metadata } from "next";
import { Inter, Newsreader, JetBrains_Mono } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import { ThemeProvider } from "@/components/theme-provider";
import { Topnav } from "@/components/topnav";
import { Footer } from "@/components/footer";
import { PersonJsonLd } from "@/components/json-ld";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const SITE_URL = "https://alenjani.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ali Lenjani — Senior ML",
    template: "%s — Ali Lenjani",
  },
  description:
    "Production ML for ranking, detection, and decisions under real-world constraints. Recommender systems and ranking evaluation; multimodal vision and change-detection; digital twins for complex systems. Stanford, NASA, Purdue postdocs.",
  authors: [{ name: "Ali Lenjani" }],
  keywords: [
    "Senior ML",
    "Recommender systems",
    "Personalization",
    "Visual inspection",
    "Multimodal detection",
    "Change detection",
    "Computer vision in the wild",
    "Digital twin",
    "Counterfactual evaluation",
    "Computer vision",
    "Ali Lenjani",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Ali Lenjani — Senior ML",
    description:
      "Production ML for ranking, detection, and decisions under real-world constraints.",
    siteName: "Ali Lenjani",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Lenjani — Senior ML",
    description:
      "Production ML for ranking, detection, and decisions under real-world constraints.",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        className={`${inter.variable} ${newsreader.variable} ${jetbrainsMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <head>
          <meta name="logodev-token" content={process.env.NEXT_PUBLIC_LOGO_DEV_TOKEN || ""} />
          <PersonJsonLd />
        </head>
        <body className="min-h-dvh flex flex-col bg-bg text-ink">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Topnav />
            <main className="flex-1">{children}</main>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
