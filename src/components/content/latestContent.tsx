import ContentItem from "./contentItem";
import { ContentItemProps } from "~types/components";

interface IContentListProps {
  data: ContentItemProps[];
}

export default function LatestContent({ data }: IContentListProps) {
  const renderItems = () => {
    if (data) {
      return data.map((item: ContentItemProps, index: number) => {
        return <ContentItem key={index} {...item} />;
      });
    }
  };

  return <div className="content_block">{renderItems()}</div>;
}
