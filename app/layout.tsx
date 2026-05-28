import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";

import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from "next-themes";
import { MotionConfig } from "framer-motion";
import { ReactLenis } from "lenis/react";
import { Header } from "@/components/layout/Header";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Espen Pedersen - Web Developer",
  description: "Web developer crafting modern, accessible digital experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${dmSans.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <MotionConfig reducedMotion="user">
            <ReactLenis root options={{ lerp: 0.1, duration: 1.2 }}>
              <Header />
              <main className=" mx-auto pt-20">{children}</main>
            </ReactLenis>
          </MotionConfig>
        </ThemeProvider>
      </body>
    </html>
  );
}
