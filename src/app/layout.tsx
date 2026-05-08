import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vortex Analytics Pro | Futuristic SaaS Dashboard",
  description: "Next-generation data analytics platform for modern business intelligence.",
};

// Define viewport for mobile devices
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}

