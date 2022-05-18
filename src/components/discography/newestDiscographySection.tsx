import useData from "~lib/utils/useData";
import DiscographyItem from "./discographyItem";
import { DiscographyType } from "~types/components";

export default function NewestDiscographySection() {
  const { data } = useData("/api/discography");
  const renderItems = () => {
    if (data) {
      return data.slice(0, 6).map((item: DiscographyType) => {
        return <DiscographyItem key={item._id} items={item} />;
      });
    }
  };
  return <div className="discography_block">{renderItems()}</div>;
}
