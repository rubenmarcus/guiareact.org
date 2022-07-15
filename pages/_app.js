import { Box, darkTheme, DesignSystemProvider, globalCss } from '@modulz/design-system';
import { ThemeProvider } from 'next-themes';
import { useRouter } from 'next/router';
import React from "react";
import Header from '../components/Header';
import "highlight.js/styles/atom-one-dark-reasonable.css";
import "../styles/style.css";
import TitleAndMetaTags from '../components/TitleAndMetaTags';


const globalStyles = globalCss({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },

  body: {
    margin: 0,
    color: '$hiContrast',
    backgroundColor: '$loContrast',
    fontFamily: '$untitled',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    WebkitTextSizeAdjust: '100%',

    '.dark-theme &': {
      backgroundColor: '$mauve1',
    },
  },

  svg: {
    display: 'block',
    verticalAlign: 'middle',
    overflow: 'visible',
  },

  'pre, code': { margin: 0, fontFamily: '$mono' },

  '::selection': {
    backgroundColor: '$violetA5',
    color: '$violet12',
  },

  '#__next': {
    position: 'relative',
    zIndex: 0,
  },

  'h1, h2, h3, h4, h5': { fontWeight: 500 },
});

function GuiaReactApp({ Component, pageProps }) {

  globalStyles();
  const router = useRouter();
  const isDocsPage = router.pathname.includes('/docs');

  return (
    <DesignSystemProvider>
      <ThemeProvider
        disableTransitionOnChange
        attribute="class"
        value={{ light: 'light-theme', dark: darkTheme.className }}
        defaultTheme="system"
      >
        {!isDocsPage && <Component {...pageProps} />}
        {isDocsPage && (
          <>
            <TitleAndMetaTags
              title="Guia de padrões React"
              description="Um Guia de padrões React em português."
            />
            <Box
              css={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                boxShadow: '0 0 0 1px $colors$mauve5',
                zIndex: 2,
                backgroundColor: '$loContrast',

                '.dark-theme &': {
                  backgroundColor: '$mauve1',
                },
              }}
            >
              <Header />
            </Box>
            <Box id='main' css={{ pt: '$8', px: "$6", position: 'relative', zIndex: 1 }}>
              {/* ToDo add wrapper page */}
              <Component {...pageProps} />
            </Box>
          </>
        )}
      </ThemeProvider>
    </DesignSystemProvider>
  )

  // return <Component {...pageProps} />
}

export default GuiaReactApp