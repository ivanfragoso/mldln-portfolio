import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const PPNeueMontreal = localFont({
  src: [
    {
      path: "./fonts/PPNeueMontreal-Regular.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "./fonts/PPNeueMontreal-Medium.woff2",
      weight: "500",
      style: "normal"
    },
    {
      path: "./fonts/PPNeueMontreal-Bold.woff2",
      weight: "700",
      style: "normal"
    }
  ]
});

const PPEditorialNew = localFont({
  variable: "--font-editorial-new",
  src: [
    {
      path: "./fonts/PPEditorialNew-Regular.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "./fonts/PPEditorialNew-Italic.woff2",
      weight: "400",
      style: "italic"
    }
  ]
});

const BlurWeb = localFont({
  src: "./fonts/BlurWeb-Medium.otf",
  weight: "500",
  variable: "--font-blur-web",
});

export const metadata: Metadata = {
  title: "Marta López de la Nieta",
  description: "Marta López de la Nieta portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${BlurWeb.variable} ${PPEditorialNew.variable} ${PPNeueMontreal.className} antialiased max-w-[1280px] mx-auto overflow-hidden relative`}
      >
        {children}
      </body>
    </html>
  );
}
