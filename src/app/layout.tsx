import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ravinder Singh | Senior UI/UX & Product Designer · Design Lead · Front-End",
  description:
    "10+ Years shaping digital products, interfaces and experiences across web, mobile, SaaS, dashboards and eCommerce. DESIGN → THINK → BUILD → EVOLVE.",
  keywords: [
    "Ravinder Singh",
    "UI/UX Designer",
    "Product Designer",
    "Design Lead",
    "Front-End Designer",
    "Design Systems",
    "AI-Assisted Design",
    "Portfolio",
  ],
  authors: [{ name: "Ravinder Singh" }],
  openGraph: {
    title: "Ravinder Singh | Senior UI/UX & Product Designer",
    description:
      "10+ Years shaping digital products across web, mobile, SaaS, dashboards and eCommerce.",
    type: "website",
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
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className="bg-background text-editorial-white font-sans antialiased selection:bg-crimson selection:text-white"
        suppressHydrationWarning
      >
        <div className="fixed inset-0 bg-grain pointer-events-none z-50 opacity-40" />
        {children}
      </body>
    </html>
  );
}
