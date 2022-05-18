import Link from "next/link";
import { NewsType } from "~types/components";

interface NewsItemProps {
  items: NewsType;
  isSkeleton?: boolean;
}

export default function NewsItem({ items, isSkeleton }: NewsItemProps) {
  const renderItem = () => {
    if (items && !isSkeleton) {
      const { _id, title, date } = items;
      return (
        <Link href="news/[slug]" as={`news/${_id}`}>
          <a className="news_item">
            <div className="news_date">{date}</div>
            <h2 className="news_title">{title}</h2>
          </a>
        </Link>
      );
    }
    return (
      <div className="news_item">
        <div className="news_date"></div>
        <h2 className="news_title"></h2>
      </div>
    );
  };
  return <>{renderItem()}</>;
}
