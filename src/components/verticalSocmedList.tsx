import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

interface LinksProps {
  href: string;
  icon: JSX.Element;
  ariaLabel: string;
}

const twiceKorea: LinksProps[] = [
  { href: "https://www.instagram.com/twicetagram/", icon: <AiOutlineInstagram />, ariaLabel: "TWICE Korea's Instagram" },
  { href: "https://twitter.com/jypetwice", icon: <AiOutlineTwitter />, ariaLabel: "TWICE Korea's Twitter" },
  { href: "https://www.youtube.com/c/TWICE", icon: <BsYoutube />, ariaLabel: "TWICE Korea's Youtube" },
  { href: "https://www.tiktok.com/@twice_tiktok_official", icon: <FaTiktok />, ariaLabel: "TWICE Korea's Tiktok" },
];

const twiceJapan: LinksProps[] = [
  { href: "https://www.instagram.com/jypetwice_japan/", icon: <AiOutlineInstagram />, ariaLabel: "TWICE Japan's Instagram" },
  { href: "https://twitter.com/JYPETWICE_JAPAN", icon: <AiOutlineTwitter />, ariaLabel: "TWICE Japan's Twitter" },
  { href: "https://www.youtube.com/channel/UCCRb6nYKaT8tzLA8CwDdUtw", icon: <BsYoutube />, ariaLabel: "TWICE Japan's Youtube" },
  { href: "https://www.tiktok.com/@twice_tiktok_officialjp", icon: <FaTiktok />, ariaLabel: "TWICE Japan's TikTok" },
];

const mappedList = (arrayElement: LinksProps[]) => {
  return arrayElement.map((item: LinksProps, index: number) => {
    return (
      <li key={index}>
        <a href={item.href} aria-label={item.ariaLabel} target="_blank" rel="noreferrer nofollow">
          {item.icon}
        </a>
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
