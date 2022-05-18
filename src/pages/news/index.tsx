import type { NextPage } from "next";
import { Layout, Container, Section } from "~components/layout";
import { NewsSection } from "~components/news";

const News: NextPage = () => {
  return (
    <>
      <Layout title="News | TWICE" metaDescription="All news about TWICE.">
        <Container>
          <Section title="News">
            <NewsSection />
          </Section>
        </Container>
      </Layout>
    </>
  );
};

export default News;
