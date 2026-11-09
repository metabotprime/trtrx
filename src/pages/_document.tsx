import { Html, Head, Main, NextScript } from 'next/document';

const LATIN_FONTS = [
  'inter-latin-e4af272c.woff2',
  'fraunces-italic-latin-6ba5f591.woff2',
  'fraunces-latin-af4bf839.woff2',
  'jetbrains-mono-latin-558ca1a6.woff2',
];

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        {LATIN_FONTS.map((font) => (
          <link key={font} rel="preload" href={`/fonts/trtrx/${font}`} as="font" type="font/woff2" crossOrigin="anonymous" />
        ))}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1D4173" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <body className="bg-surface text-text antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
