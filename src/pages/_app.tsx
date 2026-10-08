import type { AppProps } from 'next/app';
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';
import { usePagePerformance } from '@/hooks/usePagePerformance';
import { Analytics, type BeforeSendEvent } from '@vercel/analytics/next';
import { PUBLIC_LAUNCH_ENABLED, isPublicIndexingAllowed } from '@/content/launch';
import { PublicGa4 } from '@/components/analytics/PublicGa4';
import '@/styles/globals.css';

function publicPageView(event: BeforeSendEvent) {
  const url = new URL(event.url);
  if (!isPublicIndexingAllowed(url.hostname) || /^\/(api|sign-in|intake|portal|account)(\/|$)/.test(url.pathname)) return null;
  url.search = '';
  url.hash = '';
  return { ...event, url: url.toString() };
}

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
    <div
      className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable} font-sans`}
    >
      <Component {...pageProps} />
      {PUBLIC_LAUNCH_ENABLED && <Analytics beforeSend={publicPageView} />}
      <PublicGa4 />
    </div>
  );
}
