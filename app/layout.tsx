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
  title: "Kidus Yared – Mobile Software Engineer | React Native & FinTech",
  description:
    "Mobile Software Engineer with 3+ years building enterprise-grade React Native apps and full-stack systems for FinTech. Shipped products for CBE and Dashen Bank.",
  keywords: ["React Native", "Mobile Developer", "FinTech", "Full-Stack", "Ethiopia"],
  authors: [{ name: "Kidus Yared" }],
  openGraph: {
    title: "Kidus Yared – Mobile Software Engineer",
    description: "Building enterprise-grade mobile apps and full-stack systems for FinTech.",
    url: "https://dev-kidus.vercel.app",
    siteName: "Kidus Yared Portfolio",
    type: "website",
  },
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
