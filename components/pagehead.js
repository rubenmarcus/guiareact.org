export default function PageHead(props) {
  const GA_TRACKING_ID = "G-TQFVHD7RW1";

  return (
    <>
      <title key="title">{props.title? props.title : 'Guia de Padrões React'}</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
      <meta
        key="description"
        name="description"
        content="Guia de Padrões React.Com exemplos e padrões básicos a avançados."
      />
      <link
        href="https://fonts.googleapis.com/css?family=Merriweather:300,300i&display=swap"
        rel="stylesheet"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <link rel="apple-touch-icon" href="/logo-180x180.png" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <meta name="apple-mobile-web-app-title" content="Guia de Padrões React" />
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      ></script>
      <script async defer src="https://buttons.github.io/buttons.js"></script>
      <script
        dangerouslySetInnerHTML={{
            __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_TRACKING_ID}');
    `,
        }}
      />
    </>
  );
}