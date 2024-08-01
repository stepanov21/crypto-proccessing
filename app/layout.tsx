import type { Metadata } from "next";
import { Raleway, Roboto } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/providers/ReduxProvider";
import TanstackQueryClientProvider from "@/providers/TanstackQueryClientProvider";
import TransactionFilters from "@/components/custom/TransactionFilters";
import CreateNewMerchantPopup from "@/components/custom/CreateNewMerchantPopup";
import WalletsList from "@/components/custom/WalletsList";
import MainUserCard from "@/components/layout/MainUserCard";
import Header from "@/components/layout/Header";

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
