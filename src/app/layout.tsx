import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Appweb lista filmes",
  description: "Criado apenas para uso rotineiro para busca de filmes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
