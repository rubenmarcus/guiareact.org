import React from "react";
import "highlight.js/styles/atom-one-dark-reasonable.css";
import "../styles/style.css";

function GuiaReactApp({ Component, pageProps }) {
  console.log('pageProps', pageProps)
  return <Component {...pageProps} />
}

export default GuiaReactApp