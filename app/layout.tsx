import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://agenticxyz.ai"),
  title: {
    default: "AgenticXYZ — A Coordinate System for Agentic AI",
    template: "%s — AgenticXYZ",
  },
  description:
    "Crossing, Yours, and Zero: a personal research framework for how humans and agents collaborate, delegate, and evolve.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "AgenticXYZ",
    title: "AgenticXYZ — A Coordinate System for Agentic AI",
    description:
      "Crossing, Yours, and Zero: a framework for human-agent collaboration, delegation, and verified evolution.",
    images: [
      {
        url: "/og.png",
        width: 1672,
        height: 941,
        alt: "AgenticXYZ — A coordinate system for Agentic AI.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AgenticXYZ — A Coordinate System for Agentic AI",
    description:
      "Crossing, Yours, and Zero: a framework for human-agent collaboration, delegation, and verified evolution.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
