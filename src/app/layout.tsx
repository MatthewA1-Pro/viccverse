import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Viccverse | Premium Digital Agency",
  description: "We build modern AI-powered websites, SaaS platforms, and digital products that help businesses grow faster.",
};

// Define viewport for mobile devices
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

