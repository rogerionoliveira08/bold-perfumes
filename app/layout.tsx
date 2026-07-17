import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { FavoritesProvider } from "@/context/FavoritesContext";
import CartDrawer from "@/components/cart/CartDrawer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bold Parfum | Perfumes Árabes e Importados",
    template: "%s | Bold Parfum",
  },

  description:
    "Perfumes árabes, importados e fragrâncias premium selecionadas pela Bold Parfum. Enviamos para todo o Brasil e oferecemos atendimento pelo WhatsApp.",

  applicationName: "Bold Parfum",

  keywords: [
    "Bold Parfum",
    "perfumes árabes",
    "perfumes importados",
    "perfumes masculinos",
    "perfumes femininos",
    "perfumes originais",
    "fragrâncias premium",
    "perfumes Lattafa",
    "perfumes Armaf",
    "loja de perfumes",
  ],

  authors: [
    {
      name: "Bold Parfum",
    },
  ],

  creator: "Bold Parfum",
  publisher: "Bold Parfum",

  category: "Perfumes e fragrâncias",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Bold Parfum",
    title: "Bold Parfum | Perfumes Árabes e Importados",
    description:
      "Descubra perfumes árabes, importados e fragrâncias premium cuidadosamente selecionadas pela Bold Parfum.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Bold Parfum | Perfumes Árabes e Importados",
    description:
      "Perfumes árabes, importados e fragrâncias premium selecionadas para deixar sua assinatura olfativa.",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },

  other: {
    "theme-color": "#000000",
    "color-scheme": "dark",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" translate="no">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-black antialiased`}
      >
        <CartProvider>
          <FavoritesProvider>
            {children}
            <CartDrawer />
          </FavoritesProvider>
        </CartProvider>
      </body>
    </html>
  );
}