import Link from "next/link";
import clsx from "~lib/utils/clsx";
import { SectionProps } from "~types/components";

export default function Section({ title, children, className, isHomePage, withLoadMore }: SectionProps) {
  const href = title.toLowerCase().replace(/\s/g, "-");
  return (
    <>
      <section className={clsx("section_content", className)} style={!isHomePage ? { marginTop: "5rem" } : { marginTop: "0" }}>
        <div className="top_section">
          <h2 className="title_section">{title}</h2>
          {withLoadMore && (
            <span>
              <Link href={`/${href}`}>
                <a>Load More</a>
              </Link>
            </span>
          )}
        </div>
        {children}
        {withLoadMore && (
          <div className="loadMore">
            <Link href={`/${href}`}>
              <a>Load More</a>
            </Link>
          </div>
        )}
      </section>
    </>
  );
}
