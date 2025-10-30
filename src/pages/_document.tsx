import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/pretendard@1.3.9/dist/web/static/pretendard.css"
        />
      </Head>
      <body className="bg-white text-dark antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
