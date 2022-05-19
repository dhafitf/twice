import Image from "next/image";
import Link from "next/link";
import { ContentItemProps } from "~types/components";

export default function ContentItem({ href, thumb, title, tag }: ContentItemProps) {
  return (
    <Link href={href}>
      <a className="content_item">
        <div style={{ position: "relative" }}>
          <div className="content_thumb">
            <Image draggable={false} src={thumb} alt={title} layout="fill" objectFit="cover" />
          </div>
          <div className="content_tag">{tag}</div>
        </div>
        <h2 className="content_title">{title}</h2>
      </a>
    </Link>
  );
}
