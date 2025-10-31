import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const outfit = localFont({
  src: [
    {
      path: "./Outfit-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./Outfit-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./Outfit-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Outfit-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Outfit-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Outfit-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Outfit-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Outfit-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./Outfit-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Kidus Yared – Mobile App Developer & Tech Enthusiast",
  description:
    "Mobile App Developer specializing in React Native . Passionate about building scalable web apps and  creating seamless user experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
