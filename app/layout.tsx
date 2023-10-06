import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "@next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Jayendra Pawar — Software Engineer",
  description:
    "Software Engineer and Product Designer, currently at Freshworks.Inc. Focused on microservices and experiences, working Hybrid form Bengaluru, Karnataka, India.",
  generator: "Next.js",
  applicationName: "Jayendra Pawar",
  keywords: [
    "freelance",
    "developer",
    "freelance developer",
    "FullStack",
    "react",
    "fullstack developer",
    "fullstack engineer",
    "creative",
    "Backend developer",
    "Backend engineer",
    "tech",
    "India",
    "software",
    "software developer",
    "portfolio",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Jayendra Pawar — Software Engineer",
    description:
    "Software Engineer and Product Designer, currently at Freshworks.Inc. Focused on microservices and experiences, working Hybrid form Bengaluru, Karnataka, India.",
    url: "https://www.jayendrapawar.me/",
    siteName: "www.jayendrapawar.me",
    images: [
      {
        url: "https://user-images.githubusercontent.com/84178696/228620835-e3cc5c9b-72fc-4f54-a628-407ef7b650f5.png",
        width: 1200,
        height: 630,
        alt: "Jayendra Pawar — Software Engineerr",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Jayendra Pawar — Software Engineer",
  //   description:
  //   "Software Engineer and Product Designer, currently at Freshworks.Inc. Focused on microservices and experiences, working Hybrid form Bengaluru, Karnataka, India.",
  //   creator: "johnnvogue",
  //   creatorId: "1243720976552144897",
  //   images: [
  //     "https://user-images.githubusercontent.com/84178696/228620835-e3cc5c9b-72fc-4f54-a628-407ef7b650f5.png",
  //   ],
  // },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
