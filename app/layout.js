import './globals.css';
import { Montserrat } from 'next/font/google'; // Import font
import { Header } from './components/header/Header';
import { GsapInitializer } from './components/GsapInitializer';
import { Footer } from './components/Footer';

// Konfigurasi font
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat', // Buat variabel CSS jika diperlukan
});

export const metadata = {
  title: 'Raja Oto - Bengkel Servis Mobil Terbaik',
  description: 'Solusi terbaik untuk semua keresahan mobil Anda',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Hapus link font manual dari sini */}
      <head />
      <body className={`${montserrat.className} bg-zinc-800`}>
        <GsapInitializer />

        <div id="smooth-wrapper">
          <div id="smooth-content">
            {/* Lebar container diubah agar responsif di tablet dan desktop */}
            <div
              className="mx-auto max-w-[480px] text-white shadow-2xl min-h-screen flex flex-col"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/bg.webp')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
