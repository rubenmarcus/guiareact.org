import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import Router from "next/router";
import "highlight.js/styles/atom-one-dark-reasonable.css";
import "../styles/style.css";
import { initGA, logPageView } from "../modules/analytics";

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    initGA();
    logPageView();
    Router.router.events.on("routeChangeComplete", logPageView);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title key="title">Padrões React</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
          <meta
            key="description"
            name="description"
            content="React patterns from beginners to advanced developers. Simple examples, short descriptions, and quality advice."
          />
          <link
            href="https://fonts.googleapis.com/css?family=Merriweather:300,300i&display=swap"
            rel="stylesheet"
          />
          <script async defer src="https://buttons.github.io/buttons.js"></script>
        </Head>
        <div className="guiaPadroes">
          <header>
            <h1>Guia de Padrões React</h1>
            <nav>
              <ul>
                <li><a href="Hooks">Guia de Hooks</a></li>
                <li><a href="Hooks">Links</a></li>
                <li><a href="Hooks">Contribua</a></li>
                <li>
<a className="github-button" href="https://github.com/rubenmarcus/padroesreact.org" data-color-scheme="no-preference: light; light: light; dark: dark;" data-size="large" data-show-count="true" aria-label="Star rubenmarcus/padroesreact.org on GitHub">Star</a></li>
              </ul>
            </nav>
          </header>
          <Component {...pageProps} />
         

        </div>
      </Container>
    );
  }
}
