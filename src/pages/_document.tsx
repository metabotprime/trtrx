import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#0E1F3A" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <body className="bg-surface text-text antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
