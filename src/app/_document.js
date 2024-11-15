// pages/_document.js  (Create this file if it doesn't exist)
import Document, { Html, Head, Main, NextScript } from 'next/head';

export default class MyDocument extends Document {
    render() {
      console.log(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS);
      return (
        <Html>
          <Head>
            {/* Google tag (gtag.js) */}
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
                    `,
                }}
            />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }
