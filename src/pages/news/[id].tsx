import { GetStaticPaths, GetStaticProps } from "next";
import { NewsType } from "~types/components";
import { Container, Layout } from "~components/layout";

const NewsByID = (post: NewsType) => {
  const { title, date, htmlContent } = post;
  const removedHTMLtag = htmlContent.replace(/<[^>]*>?/gm, "");

  return (
    <>
      <Layout title={title} metaDescription={removedHTMLtag}>
        <Container style={{ marginTop: "5rem" }} isSmall>
          <h1 className="news-title">{title}</h1>
          <div className="news-date">{date}</div>
          <article dangerouslySetInnerHTML={{ __html: htmlContent }} style={{ marginBottom: "3rem" }} />
        </Container>
      </Layout>
    </>
  );
};

export default NewsByID;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { params } = ctx;
  const paramsIDToNumber = Number(params?.id);
  const data = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/news/${paramsIDToNumber}`);
  const post = await data.json();

  return {
    props: {
      ...post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/news`);
  const news = await data.json();

  return {
    paths: news.map((post: NewsType) => ({
      params: {
        id: `${post._id}`,
      },
    })),
    fallback: false,
  };
};
