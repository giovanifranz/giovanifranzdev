import type { AppProps } from "next/app";
import Head from "next/head";
import { Global } from "@emotion/react";
import { GlobalStyles } from "../styles/global";
import LayoutProvider from "../containers/Layout";
import { QueryClientProvider, QueryClient } from "react-query";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <LayoutProvider>
        <Global styles={GlobalStyles} />
        <Head>
          <title>Giovani Franz</title>
        </Head>
        <Component {...pageProps} />
      </LayoutProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
