import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const instrumentSerif = Inter({
  variable: "--font-instrument",
  subsets: ["latin"],
});

const dDin = localFont({
  src: [
    {
      path: "../public/fonts/D-DIN.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/D-DIN-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/D-DIN-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-ddin",
});


export const metadata: Metadata = {
  title: "Quantvale",
  description: "Quantvale",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${instrumentSerif.variable} ${dDin.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-ddin">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
