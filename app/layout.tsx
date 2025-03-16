import Script from "next/script";
import { TempoInit } from "./tempo-init";

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
        {children}
      </body>
    </html>
  );
}
