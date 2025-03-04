/* eslint-disable @next/next/next-script-for-ga */
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout } from "@/components";
import { getImagePath } from "@/utils/imagePath";
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
        className={`${roboto.className} min-h-screen w-full bg-[#ACF0D1]`}
        style={{
          backgroundImage: `url('${getImagePath("/textures/asfalt-dark.png")}')`,
        }}
      >
        <Layout>
          {children}
        </Layout>
        <Analytics />
      </body>
    </html>
  );
}
