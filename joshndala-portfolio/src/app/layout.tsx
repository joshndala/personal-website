/* eslint-disable @next/next/next-script-for-ga */
import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/utils/themeContext";
import { Analytics } from "@vercel/analytics/react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joshua Ndala's Portfolio",
  description:
    "This website is a collection of projects I have worked on and skills I have acquired over the years.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-site="YOUR_DOMAIN_HERE"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body
        className={`${playfair.variable} ${dmSans.variable} font-sans min-h-screen w-full bg-cinema-cream dark:bg-cinema-black text-cinema-warm dark:text-cinema-cream transition-colors duration-300`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
