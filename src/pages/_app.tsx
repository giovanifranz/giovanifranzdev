import type { AppProps } from "next/app";
import Head from "next/head";
import { Global } from "@emotion/react";
import { GlobalStyles } from "../styles/global";
import LayoutProvider from "../containers/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutProvider>
      <Global styles={GlobalStyles} />
      <Head>
        <title>Giovani Franz</title>
      </Head>
      <Component {...pageProps} />
    </LayoutProvider>
  );
}

export default MyApp;
