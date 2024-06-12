import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";
import localFont from "@next/font/local";

const youngSerif = localFont({
  src: "../../public/fonts/youngserif.ttf",
  variable: "--font-ys",
});

const outfit = localFont({
  src: "../../public/fonts/outfit.ttf",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Recipe Page",
  description: "A cute recipe page for my new business.",
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
          content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"
          charSet="UTF-8"
        />
      </Head>
      <body
        className={`${youngSerif.variable} ${outfit.variable} min-w-screen bg-eggshell mt-0 flex justify-center md:mt-[107px]`}
      >
        {children}
      </body>
    </html>
  );
}
