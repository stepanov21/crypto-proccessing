import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import TanstackQueryClientProvider from "@/providers/TanstackQueryClientProvider";
import ThemeProvider from "@/providers/ThemeProvider";

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
        <TanstackQueryClientProvider>
          <ThemeProvider className={raleway.className}>{children}</ThemeProvider>
        </TanstackQueryClientProvider>
    </html>
  );
}
