import type { AppProps } from 'next/app';
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';
import { HelmetProvider } from 'react-helmet-async';
import { usePagePerformance } from '@/hooks/usePagePerformance';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  usePagePerformance();

  return (
    <HelmetProvider>
      <div
        className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable} font-sans`}
      >
        <Component {...pageProps} />
      </div>
    </HelmetProvider>
  );
}
