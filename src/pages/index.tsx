import type { NextPage } from "next";
import { Layout, Container, Section } from "~components/layout";
import VerticalSocmedList from "~components/verticalSocmedList";
import ScrollDownAnimation from "~components/scrollDownAnimation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LoadingScreen from "~components/loadingScreen";
import { LatestContent } from "~components/content";
import { NewestDiscographySection } from "~components/discography";
import { LatestNewsSection } from "~components/news";
import Script from "next/script";
import { GetServerSideProps } from "next";
import { dbConnect } from "~lib/utils/dbConnect";
import Contents from "~/src/lib/models/Contents";
import { ContentItemProps } from "~types/components";
import { useEffect } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Home: NextPage = (data: any) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoader, setIsLoader] = useState(true);
  const metaDescription =
    "TWICE is a South Korean girl group formed by JYP Entertainment. The group is composed of nine members: Nayeon, Jeongyeon, Momo, Sana, Jihyo, Mina, Dahyun, Chaeyoung, and Tzuyu. Twice was formed under the television program Sixteen (2015) and debuted on October 20, 2015, with the extended play (EP) The Story Begins.";

  useEffect(() => {
    if (!isLoader) {
      setTimeout(function () {
        setIsLoading(false);
      }, 2000);
    }
  }, [isLoading, isLoader]);

  return (
    <>
      {isLoading && <LoadingScreen isLoading={isLoading} />}
      <Layout title="TWICE" metaDescription={metaDescription} style={isLoading ? { opacity: 0 } : { opacity: 1 }}>
        <div className="hero_container" id="hero">
          <div className="heroBG"></div>
          <div className="heroImg"></div>
          <ScrollDownAnimation />
          <div className="hero_title">
            <h1>
              <Image
                src="/images/hero_title.png"
                alt="Celebrate"
                draggable={false}
                width={1000}
                height={240}
                objectFit="cover"
                objectPosition="center"
                priority
                onLoadingComplete={() => setIsLoader(false)}
              />
            </h1>
            <div>
              <Image src="/images/hero_desc.png" alt="Celebrate Date" draggable={false} width={1000} height={72} objectFit="cover" objectPosition="center" />
            </div>
          </div>
          <VerticalSocmedList />
        </div>
        <div className="content">
          <Container isLarge>
            <Section title="Latest Content" isHomePage>
              <LatestContent data={data.contents} />
            </Section>
          </Container>
          <Container>
            <Section title="News" isHomePage withLoadMore>
              <LatestNewsSection />
            </Section>
          </Container>
          <Container>
            <Section title="Discography" isHomePage withLoadMore>
              <NewestDiscographySection />
            </Section>
          </Container>
        </div>
        <Container isSmall className="about">
          <div className="about_title">About TWICE</div>
          <p className="about_desc">
            TWICE (Korean: 트와이스; RR: Teuwaiseu; Japanese: トゥワイス, Hepburn: To~uwaisu; commonly stylized in all caps as TWICE) is a South Korean girl group formed by JYP
            Entertainment. The group is composed of nine members: Nayeon, Jeongyeon, Momo, Sana, Jihyo, Mina, Dahyun, Chaeyoung, and Tzuyu. Twice was formed under the television
            program Sixteen (2015) and debuted on October 20, 2015, with the extended play (EP) The Story Begins. <br />
            <br /> The group debuted in Japan on June 28, 2017, under Warner Music Japan, with the release of a compilation album titled #Twice. The album charted at number 2 on
            the Oricon Albums Chart with the highest first-week album sales by a K-pop artist in Japan in two years. It was followed by the release of TWICE&apos;s first original
            Japanese maxi single titled &quot;One More Time&quot; in October. Twice became the first Korean girl group to earn a platinum certification from the Recording Industry
            Association of Japan (RIAJ) for both an album and CD single in the same year. Twice ranked third in the Top Artist category of Billboard Japan&apos;s 2017 Year-end
            Rankings, and in 2019, they became the first Korean girl group to embark on a Japanese dome tour.
          </p>
          <div className="about_button">
            <Link href="/profile">
              <a>Members</a>
            </Link>
          </div>
        </Container>
        <div className="twitter-section">
          <Container>
            <Script strategy="lazyOnload" src="https://platform.twitter.com/widgets.js" charSet="utf-8" />
            <a className="twitter-timeline" data-height="450" href="https://twitter.com/JYPETWICE?ref_src=twsrc%5Etfw">
              Tweets by JYPETWICE
            </a>
            <a className="twitter-timeline" data-height="450" href="https://twitter.com/JYPETWICE_JAPAN?ref_src=twsrc%5Etfw">
              Tweets by JYPETWICE_JAPAN
            </a>
          </Container>
        </div>
      </Layout>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  await dbConnect();
  const data = (await Contents.find({}).sort({ _id: -1 }).limit(3)) as ContentItemProps[];

  const contents = JSON.parse(JSON.stringify(data));
  return { props: { contents } };
};
