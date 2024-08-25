import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import TanstackQueryClientProvider from "@/providers/TanstackQueryClientProvider";
import ThemeProvider from "@/providers/ThemeProvider";
import Head from "next/head";
import Script from "next/script";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neutronx Crypto Proccesing",
  description: "Our Front-end",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="viewport" content="user-scalable=no" />
      </Head>
      <Script src="../lib/disableZoom.ts"/>
      <TanstackQueryClientProvider>
        <ThemeProvider className={raleway.className}>{children}</ThemeProvider>
      </TanstackQueryClientProvider>
    </html>
  );
}
