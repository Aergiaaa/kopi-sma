import { Html, Head, Main, NextScript } from "next/document";
import HeaderComponent from "@/component/Header/UI/HeaderComponent";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <style
          dangerouslySetInnerHTML={{
            __html: `</style><Link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/><style>`,
          }}
        ></style>
        <HeaderComponent />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
