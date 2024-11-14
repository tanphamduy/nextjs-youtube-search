// pages/_document.js  (Create this file if it doesn't exist)
import Document, { Html, Head, Main, NextScript } from 'next/head';

export default class MyDocument extends Document {
    render() {
      return (
        <Html>
          <Head>


            {/* Google tag (gtag.js) */}
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-2MY4QC3HK9"
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-2MY4QC3HK9');
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
