import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import Link from "next/link";
import HeaderComponent from "@/component/Header/UI/HeaderComponent";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <style
          dangerouslySetInnerHTML={{
            __html: `</style><Link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/><style>`,
          }}
        ></style>
        <HeaderComponent/>
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script src="https://unpkg.com/scrollreveal"></Script>
      </body>
    </Html>
  );
}
