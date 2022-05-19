import { NewsType } from "~types/components";
import { Container, Layout } from "~components/layout";
import useData from "~lib/utils/useData";
import { useRouter } from "next/router";
import Custom404 from "../404";
import LoadingScreen from "~components/loadingScreen";

const NewsByID = () => {
  const router = useRouter();
  const { id } = router.query;
  const endpoint = id ? `/api/news/${id}` : null;
  const { data, isLoading, isError } = useData(endpoint);

  const renderItems = () => {
    try {
      if (isLoading) {
        return <LoadingScreen isLoading />;
      } else if (data) {
        const { title, date, htmlContent }: NewsType = data;
        const removedHTMLtag = htmlContent.replace(/<[^>]*>?/gm, "");

        return (
          <Layout title={title} metaDescription={removedHTMLtag}>
            <Container style={{ marginTop: "5rem" }} isSmall>
              <h1 className="news-title">{title}</h1>
              <div className="news-date">{date}</div>
              <article dangerouslySetInnerHTML={{ __html: htmlContent }} style={{ marginBottom: "3rem" }} />
            </Container>
          </Layout>
        );
      } else if (isError) {
        throw new Error("Error");
      }
    } catch (error) {
      return <Custom404 />;
    }
  };

  return <>{renderItems()}</>;
};

export default NewsByID;
