import useData from "~lib/utils/useData";
import DiscographyItem from "./discographyItem";
import { DiscographyType } from "~types/components";

export default function DiscographySection() {
  const { data } = useData("/api/discography");
  const renderItems = () => {
    if (data) {
      return data.map((item: DiscographyType) => {
        return <DiscographyItem key={item._id} items={item} />;
      });
    }

    return Array.from({ length: 6 }).map((_, index) => {
      return <DiscographyItem key={index} isSkeleton />;
    });
  };
  return <div className="discography_block">{renderItems()}</div>;
}
