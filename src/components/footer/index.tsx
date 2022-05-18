import styles from "~styles/footer.module.css";
import Link from "next/link";
import Image from "next/image";
import { Container } from "../layout";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <Link href="/">
          <a className={styles.logo}>
            <Image src="/logo.svg" alt="logo" width={50} height={50} />
          </a>
        </Link>
        <div className={styles.link}>
          <div className={styles.official_site}>
            <a href="https://twice.jype.com/" target="_blank" rel="noreferrer">
              TWICE Korea Official Website
            </a>
            <a href="https://twicejapan.com" target="_blank" rel="noreferrer">
              TWICE Japan Official Website
            </a>
          </div>
          <div className={styles.other}>
            <Link href="/developers">
              <a>For Developers</a>
            </Link>
          </div>
        </div>
      </Container>
      <div className={styles.credit}>
        <p>
          Built by{" "}
          <a href="https://dhafit.xyz/" target="_blank" rel="noreferrer">
            Dhafit Farenza
          </a>
        </p>
        <p>
          All copyright reserved to{" "}
          <a href="https://www.jype.com/" target="_blank" rel="noreferrer">
            JYPE
          </a>
          {" & "}
          <a href="https://wmg.jp/" target="_blank" rel="noreferrer">
            Sony Music
          </a>
        </p>
      </div>
    </footer>
  );
}
