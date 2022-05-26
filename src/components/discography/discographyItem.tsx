import Link from "next/link";
import { DiscographyType } from "~types/components";
import Image from "next/image";

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
              <Image src={coverArt} alt={name} width={400} height={400} layout="responsive" placeholder="blur" blurDataURL={`/_next/image?url=${coverArt}&w=16&q=1`} />
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
