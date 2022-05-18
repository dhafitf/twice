import type { NextPage } from "next";
import { Layout, Container, Section } from "~components/layout";
import { DiscographySection } from "~components/discography";

const Discography: NextPage = () => {
  return (
    <>
      <Layout title="Discography | TWICE" metaDescription="Discography of girl group TWICE">
        <Container>
          <Section title="Discography">
            <DiscographySection />
          </Section>
        </Container>
      </Layout>
    </>
  );
};

export default Discography;
