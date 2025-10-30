import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";

import "@/styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <Component {...pageProps} />
        <Toaster position="top-right" toastOptions={{ style: { fontFamily: "Pretendard, sans-serif" } }} />
      </ThemeProvider>
    </>
  );
}
