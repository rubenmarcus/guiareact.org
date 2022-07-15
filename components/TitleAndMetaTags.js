import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function TitleAndMetaTags({
  title = 'Guia de Padrões React',
  description = 'Guia de Padrões React. Com exemplos e padrões básicos a avançados.',
  image,
  url = 'https://www.guiareact.org/',
  pathname,
}) {
  const router = useRouter();

  const imageUrl = `${url}/social/${image || 'default.png'}`;
  const path = pathname || router.pathname;

  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta property="og:url" content={`${url}${path}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <link
        href="https://fonts.googleapis.com/css?family=Merriweather:300,300i&display=swap"
        rel="stylesheet"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <link rel="apple-touch-icon" href="/logo-180x180.png" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    </Head>
  );
}
