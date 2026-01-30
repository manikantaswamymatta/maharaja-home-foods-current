import "./globals.css";
import Header from "@/src/components/Header";
import FloatingCartButton from "@/src/components/FloatingCartButton";
import { CartProvider } from "@/src/context/CartContext";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maharaja Home Foods",
  description: "Authentic Indian Home Foods",
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport = "width=device-width, initial-scale=1";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          {children}
          <FloatingCartButton />
        </CartProvider>
      </body>
    </html>
  );
}

