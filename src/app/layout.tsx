import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn, convertMarkdownLinkToText } from "@/lib/utils";
import type { Metadata } from "next";
import { Rubik as FontSans } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: convertMarkdownLinkToText(DATA.description),
  openGraph: {
    title: `${DATA.name}`,
    description: convertMarkdownLinkToText(DATA.description),
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "og-image.jpg",
      },
    ],
  },
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
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
  icons: [
    {
      rel: "icon",
      url: "/favicon.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-3xl mx-auto pt-8 pb-12 sm:pb-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" enableSystem>
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
        <GoogleAnalytics gaId="G-YXX74YFEQC" />
      </body>
    </html>
  );
}
