// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from 'next/document'
import BLOG from '@/blog.config'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
            <Html lang={BLOG.LANG}>
                <Head>
                <link rel='icon' href= {`${BLOG.BLOG_FAVICON}`} />
                  {/* 预加载字体 */}
                  {BLOG.FONT_AWESOME && <>
                      <link rel='preload' href={BLOG.FONT_AWESOME} as="style" crossOrigin="anonymous" />
                      <link rel="stylesheet" href={BLOG.FONT_AWESOME} crossOrigin="anonymous" referrerPolicy="no-referrer" />
                  </>}

                  {BLOG.FONT_URL?.map((fontUrl, index) => {
                    if (fontUrl.endsWith('.css')) {
                      return <link key={index} rel="stylesheet" href={fontUrl} />
                    } else {
                      return <link key={index} rel="preload" href={fontUrl} as="font" type="font/woff2" />
                    }
                  })}
                <script type="text/javascript">
                    (function(c,l,a,r,i,t,y){
                        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                    })(window, document, "clarity", "script", "l874upe8wc")
                </script> 
                </Head>

                <body className={`${BLOG.FONT_STYLE} font-light scroll-smooth`}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
    )
  }
}

export default MyDocument
