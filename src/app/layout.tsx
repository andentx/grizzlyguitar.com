import { CartProvider } from "@/components/cart/cart-context";
import { Navbar } from "@/components/layout/navbar";
import { getCart } from "@/lib/shopify";
import { baseUrl } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";
import localFont from "next/font/local";

import { ReactNode } from "react";
import "./globals.css";

const { SITE_NAME } = process.env;

const averiaLight = localFont({
  src: "../fonts/AveriaLight.ttf",
  variable: "--font-averia-light",
  weight: "300",
});
const averiaRegular = localFont({
  src: "../fonts/AveriaRegular.ttf",
  variable: "--font-averia-regular",
  weight: "500",
});
const montserratRegular = localFont({
  src: "../fonts/MontserratRegular.woff2",
  variable: "--font-montserrat-regular",
  weight: "400",
});
const montserratBold = localFont({
  src: "../fonts/MontserratBold.woff2",
  variable: "--font-montserrat-bold",
  weight: "700",
});

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`,
  },
  robots: {
    follow: true,
    index: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const cart = getCart();

  return (
    <html lang="en" className="bg-gray-800">
      <body
        className={`${GeistSans.variable} ${averiaLight.variable} ${averiaRegular.variable} ${montserratRegular.variable} ${montserratBold.variable} flex min-h-dvh flex-col items-center bg-gray-800 font-[family-name:var(--font-montserrat-regular)] text-amber-50 antialiased selection:bg-amber-400`}
      >
        <CartProvider cartPromise={cart}>
          <Navbar />
          <main className="flex h-full w-full grow flex-col items-center bg-neutral-50 text-black">
            {children}
          </main>
        </CartProvider>
      </body>
    </html>
  );
}
