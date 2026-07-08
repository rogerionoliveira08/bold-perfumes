import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/cart/CartDrawer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bold Parfam",
  description: "Perfumes árabes e importados selecionados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" translate="no">
      <body
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
        <CartProvider>
  {children}
  <CartDrawer />
</CartProvider>
      </body>
    </html>
  );
}