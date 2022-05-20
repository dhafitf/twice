import useData from "~lib/utils/useData";
import NewsItem from "./newsItem";
import { NewsType } from "~types/components";

export default function LatestNewsSection() {
  const { data } = useData("/api/news");
  const renderItems = () => {
    if (data) {
      return data.slice(0, 6).map((item: NewsType) => {
        return <NewsItem key={item._id} items={item} />;
      });
    }

    return Array.from({ length: 6 }).map((_, index) => {
      return <NewsItem key={index} isSkeleton />;
    });
  };
  return <div className="news_block">{renderItems()}</div>;
}
