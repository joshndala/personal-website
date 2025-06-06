/* eslint-disable @next/next/next-script-for-ga */
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@/utils/themeContext";
import { Analytics } from "@vercel/analytics/react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
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
        className={`${roboto.className} texture-bg min-h-screen w-full bg-secondary dark:bg-primary text-primary dark:text-secondary transition-colors duration-300`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
