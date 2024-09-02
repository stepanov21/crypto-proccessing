import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "../globals.css";
import TanstackQueryClientProvider from "@/providers/TanstackQueryClientProvider";
import ThemeProvider from "@/providers/ThemeProvider";
import Head from "next/head";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neutronx Crypto Proccesing",
  description: "Our Front-end",
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  if (!children) return <div className="loader"></div>;

  return (
    <html lang={locale}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="viewport" content="user-scalable=no" />
      </Head>
      <TanstackQueryClientProvider>
        <ThemeProvider className={raleway.className}>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </TanstackQueryClientProvider>
    </html>
  );
}
