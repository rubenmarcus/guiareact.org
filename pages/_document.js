import Document, { Html, Head, Main, NextScript } from "next/document";
import PageHead from "../components/pagehead";
import AppHeader from "../components/header";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    let pageProps = null;

    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => {
          pageProps = props.pageProps;
          return <App {...props} />;
        },
        enhanceComponent: (Component) => Component,
      });

    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, pageProps };
  }

  render() {
    const { pageProps } = this.props;
    return (
      <Html>
        <Head>
          <PageHead title={pageProps.title} />
        </Head>
        <body className={`guiaPadroes ${pageProps.cssClass}`}>
          <AppHeader title={pageProps.title} />
          <main>
            <Main />
          </main>

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
