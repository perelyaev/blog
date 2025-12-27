import type { Metadata } from "next";
import "./globals.css";
import { Header } from '@/components/header'

export const metadata: Metadata = {
  title: "Блог",
  description: "Блог о программировании",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className='flex flex-col min-h-screen bg-white'>
        <Header />
        <main className='flex-1 mb'>
          <div className='pt-4 text-black bg-background min-h-screen'>
            <div className='pt-26'>
              {children}
            </div>
          </div>
        </main>
        <footer className='bg-foreground text-background relative overflow-hidden'></footer>
      </body>
    </html>
  );
}
