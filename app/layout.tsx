import Script from "next/script";
import { TempoInit } from "./tempo-init";
import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "MeetKorea - Korean Language Learning Platform",
  description:
    "Learn practical Korean with native speakers for travel, work, and daily life",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>MeetKorea</title>
        <meta name="description" content="Korean language learning platform" />
      </head>
      <body>
        <Script src="https://api.tempolabs.ai/proxy-asset?url=https://storage.googleapis.com/tempo-public-assets/error-handling.js" />
        <TempoInit />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
