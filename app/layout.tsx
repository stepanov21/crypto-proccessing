import type { Metadata } from "next";
import { Raleway, Roboto } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/providers/ReduxProvider";
import TanstackQueryClientProvider from "@/providers/TanstackQueryClientProvider";

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
      <body className={raleway.className}>
        <ReduxProvider>
          <TanstackQueryClientProvider>{children}</TanstackQueryClientProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
