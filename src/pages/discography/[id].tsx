import { GetStaticPaths, GetStaticProps } from "next";
import { DiscographyType } from "~types/components";
import { Container, Layout } from "~components/layout";
import Image from "next/image";

const DiscographyByID = (post: DiscographyType) => {
  const { coverArt, name, releaseDate, type, tracks, video, content, spotifyLink } = post;
  const spotifyID = spotifyLink.split("/").pop();
  const youtubeID: string[] = [];

  if (video) {
    for (const item of video) {
      const id = item.split("=").pop();
      youtubeID.push(`${id}`);
    }
  }

  const removedHTMLtag = content.replace(/<[^>]*>?/gm, "");

  return (
    <>
      <Layout title={name} metaDescription={removedHTMLtag} style={{ marginTop: "5rem" }} metaImage={coverArt}>
        <Container isSmall className="discography_detail" style={{ marginBottom: "3rem" }}>
          <div className="discography_flex">
            <div className="discography_flex_cover">
              <div className="discography_cover">
                <Image src={coverArt} width={400} height={400} alt={name} layout="responsive" />
              </div>
              <div className="spotify_playlist">
                <iframe
                  src={`https://open.spotify.com/embed/album/${spotifyID}`}
                  width="100%"
                  height="380"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                ></iframe>
              </div>
            </div>
            <div className="discography_info_content">
              <h1 className="discography_title">{name}</h1>
              <div className="discography_meta">
                <div className="discography_type">{type}</div>
                <div className="discography_date">{releaseDate} Release</div>
              </div>
              <div className="discography_content" dangerouslySetInnerHTML={{ __html: content }}></div>
              {tracks.length > 0 && (
                <div className="discography_tracks">
                  <h2>Tracks Lists</h2>
                  <div className="discography_tracks_list">
                    {tracks.map((track, index) => {
                      const trackNumber = index + 1;
                      return (
                        <div className="discography_tracks_item" key={index}>
                          <div className="discography_tracks_item_number">{trackNumber.toString().padStart(2, "0")}.</div>
                          <div className="discography_tracks_item_track">{track}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="discography_video">
            <h2>Video</h2>
            {youtubeID.map((id, index) => {
              return (
                <div className="videoWrapper" key={index}>
                  <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${id}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              );
            })}
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default DiscographyByID;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { params } = ctx;
  const paramsIDToNumber = Number(params?.id);
  const data = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/discography/${paramsIDToNumber}`);
  const post = await data.json();

  return {
    props: {
      ...post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/discography`);
  const posts = await data.json();

  return {
    paths: posts.map((post: DiscographyType) => ({
      params: {
        id: `${post._id}`,
      },
    })),
    fallback: false,
  };
};
