import { DiscographyType } from "~types/components";
import { Container, Layout } from "~components/layout";
import Image from "next/image";
import useData from "~lib/utils/useData";
import { useRouter } from "next/router";
import Custom404 from "../404";
import LoadingScreen from "~components/loadingScreen";

const DiscographyByID = () => {
  const router = useRouter();
  const { id } = router.query;
  const endpoint = id ? `/api/discography/${id}` : null;
  const { data, isLoading, isError } = useData(endpoint);

  const renderItems = () => {
    try {
      if (isLoading) {
        return <LoadingScreen isLoading />;
      } else if (data) {
        const { coverArt, name, releaseDate, type, tracks, video, content, spotifyLink }: DiscographyType = data;
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
                        {tracks.map((track, index: number) => {
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
                {youtubeID.map((idYoutube, index) => {
                  return (
                    <div className="videoWrapper" key={index}>
                      <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${idYoutube}`}
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

export default DiscographyByID;
