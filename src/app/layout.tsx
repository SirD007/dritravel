import { Metadata } from "next"
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Resende Vip Tur",
  description: "Resende Vip Tur é uma companhia de translados, viagens e turismo que visa tornar sua viagem mais confortável, te levando para todos os lugares que você sonhar.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
