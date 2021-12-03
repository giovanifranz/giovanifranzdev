import type { AppProps } from "next/app";
import Head from "next/head";
import { Global } from "@emotion/react";
import { GlobalStyles } from "../styles/global";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Head>
        <title>Giovani Franz</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
