import Link from "next/link";
import { DiscographyType } from "~types/components";

interface DiscographyItemProps {
  items?: DiscographyType;
  isSkeleton?: boolean;
}

export default function DiscographyItem({ items, isSkeleton }: DiscographyItemProps) {
  const renderItem = () => {
    if (items && !isSkeleton) {
      const { _id, type, name, releaseDate, coverArt } = items;
      return (
        <Link href="discography/[slug]" as={`discography/${_id}`} passHref>
          <a className="discography_item">
            <div className="discography_thumb">
              <img src={coverArt} alt={name} />
            </div>
            <div className="discography_info">
              <span className="discography_category">{type}</span>
              <h2 className="discography_title">{name}</h2>
              <div className="discography_releaseDate">{releaseDate} Release</div>
            </div>
          </a>
        </Link>
      );
    }
    return (
      <div className="discography_item skeleton">
        <div className="discography_thumb skeleton"></div>
      </div>
    );
  };
  return <>{renderItem()}</>;
}
