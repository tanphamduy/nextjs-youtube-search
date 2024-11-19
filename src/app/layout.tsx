import { GoogleTagManager } from "@next/third-parties/google";

export const metadata = {
  title: "YouTube find videos",
  description:
    "This Next.js application allows you to search for YouTube videos by keyword and displays the top 20 most popular videos, sorted by comment count and then by like count.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS as string} />
      <body>{children}</body>
    </html>
  );
}