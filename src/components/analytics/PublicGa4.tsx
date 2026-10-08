import { useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import { PUBLIC_LAUNCH_ENABLED } from '@/content/launch';
import { getBrowserGa4Controller } from '@/lib/analytics/ga4';

export function PublicGa4() {
  const router = useRouter();

  useEffect(() => {
    if (!PUBLIC_LAUNCH_ENABLED || !router.isReady) return;
    const controller = getBrowserGa4Controller();
    if (!controller) return;
    const resume = () => {
      if (['/404', '/500', '/_error'].includes(Router.pathname)) {
        controller.view('');
        return;
      }
      controller.view(window.location.href);
    };
    // Pause before any URL change, including hash changes and cancelled routes.
    // The property disable flag also stops automatic engagement/cookie writes.
    router.events.on('routeChangeStart', controller.suspend);
    router.events.on('hashChangeStart', controller.suspend);
    router.events.on('routeChangeComplete', resume);
    router.events.on('hashChangeComplete', resume);
    router.events.on('routeChangeError', resume);
    resume();
    return () => {
      router.events.off('routeChangeStart', controller.suspend);
      router.events.off('hashChangeStart', controller.suspend);
      router.events.off('routeChangeComplete', resume);
      router.events.off('hashChangeComplete', resume);
      router.events.off('routeChangeError', resume);
      controller.suspend();
    };
  }, [router.isReady, router.events]);

  return null;
}
