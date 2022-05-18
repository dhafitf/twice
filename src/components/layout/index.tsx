import Head from "next/head";
import { LayoutProps } from "~/src/types/components";
import Footer from "../footer";

export default function Layout(props: LayoutProps) {
  const { children, title, metaDescription } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <meta name="theme-color" content="#3A3D68" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div id="layout_content">
        <main id="main">{children}</main>
        <Footer />
      </div>
    </>
  );
}
