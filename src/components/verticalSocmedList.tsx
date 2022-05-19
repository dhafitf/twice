import Link from "next/link";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

interface LinksProps {
  href: string;
  icon: JSX.Element;
}

const twiceKorea: LinksProps[] = [
  { href: "https://www.instagram.com/twicetagram/", icon: <AiOutlineInstagram /> },
  { href: "https://twitter.com/jypetwice", icon: <AiOutlineTwitter /> },
  { href: "https://www.youtube.com/c/TWICE", icon: <BsYoutube /> },
  { href: "https://www.tiktok.com/@twice_tiktok_official", icon: <FaTiktok /> },
];

const twiceJapan: LinksProps[] = [
  { href: "https://www.instagram.com/jypetwice_japan/", icon: <AiOutlineInstagram /> },
  { href: "https://twitter.com/JYPETWICE_JAPAN", icon: <AiOutlineTwitter /> },
  { href: "https://www.youtube.com/channel/UCCRb6nYKaT8tzLA8CwDdUtw", icon: <BsYoutube /> },
  { href: "https://www.tiktok.com/@twice_tiktok_officialjp", icon: <FaTiktok /> },
];

const mappedList = (arrayElement: LinksProps[]) => {
  return arrayElement.map((item: LinksProps, index: number) => {
    return (
      <li key={index}>
        <Link href={item.href}>
          <a>{item.icon}</a>
        </Link>
      </li>
    );
  });
};

export default function VerticalSocmedList() {
  return (
    <>
      <div className="socmed_list left">
        <ul>{mappedList(twiceKorea)}</ul>
        <p>TWICE Korea</p>
      </div>
      <div className="socmed_list right">
        <ul>{mappedList(twiceJapan)}</ul>
        <p>TWICE Japan</p>
      </div>
    </>
  );
}
