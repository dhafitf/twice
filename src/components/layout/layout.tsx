import Head from "next/head";
import { LayoutProps } from "~types/components";
import Footer from "../footer";
import Header from "../header";

export default function Layout(props: LayoutProps) {
  const { children, title, metaDescription, metaImage, style } = props;
  const image = metaImage || "/images/bg_image.jpg";
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={metaDescription} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={image} />
        <meta name="theme-color" content="#182227" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div id="layout_content" style={style}>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </div>
    </>
  );
}
