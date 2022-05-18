import styles from "~styles/header.module.css";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./navLink";
import { left, right } from "./navData";
import { useEffect, useState } from "react";
import clsx from "~lib/utils/clsx";
import { useRouter } from "next/router";
import { addOpacity } from "~lib/utils/opacityAnimation";

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const burgerStyleNotHome = router.pathname === "/" ? {} : { background: "#434445" };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 70) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    isOpen ? document.body.classList.add("overflow-hidden") : document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  let opacity = 0;

  const handleClickNav = () => {
    isOpen
      ? (opacity = 0)
      : addOpacity({
          opacity: opacity,
          DOMByID: "nav",
          time: 10,
        });
  };

  return (
    <header className={clsx(styles.header, isFixed && styles.fixed)} id="header">
      <div className="inner">
        <Link href="/">
          <a className={styles.logo}>
            <Image src="/logo.svg" alt="logo" width={50} height={50} />
          </a>
        </Link>

        <div
          className={clsx(styles.navButton, isOpen ? styles.active : "")}
          onClick={() => {
            setIsOpen(!isOpen);
            handleClickNav();
          }}
        >
          <span className={styles.top} style={burgerStyleNotHome}>
            &nbsp;
          </span>
          <span className={styles.middle} style={burgerStyleNotHome}>
            &nbsp;
          </span>
          <span className={styles.bottom} style={burgerStyleNotHome}>
            &nbsp;
          </span>
        </div>
        <nav id="nav" className={styles.navbar} style={isOpen ? { display: "flex" } : { display: "none" }}>
          <ul className={styles.left}>
            {left.map((item) => {
              return <NavLink key={item.text} href={item.href} text={item.text} />;
            })}
          </ul>
          <ul className={styles.right}>
            {right.map((item) => {
              return <NavLink key={item.text} href={item.href} text={item.text} />;
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
