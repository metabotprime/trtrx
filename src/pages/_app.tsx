import type { AppProps } from 'next/app';
import { usePagePerformance } from '@/hooks/usePagePerformance';
import { Analytics, type BeforeSendEvent } from '@vercel/analytics/next';
import { PUBLIC_LAUNCH_ENABLED, isPublicIndexingAllowed } from '@/content/launch';
import { PublicGa4 } from '@/components/analytics/PublicGa4';
import '@/styles/globals.css';
import fonts from '@/styles/fonts.module.css';

function publicPageView(event: BeforeSendEvent) {
  const url = new URL(event.url);
  if (!isPublicIndexingAllowed(url.hostname) || /^\/(api|sign-in|intake|portal|account)(\/|$)/.test(url.pathname)) return null;
  url.search = '';
  url.hash = '';
  return { ...event, url: url.toString() };
}

export default function App({ Component, pageProps }: AppProps) {
  usePagePerformance();

  return (
    <div
      className={`${fonts.variables} font-sans`}
    >
      <Component {...pageProps} />
      {PUBLIC_LAUNCH_ENABLED && <Analytics beforeSend={publicPageView} />}
      <PublicGa4 />
    </div>
  );
}
