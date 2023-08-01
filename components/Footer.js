import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.links}>
        <Link href={"/"}>
          <li className={styles.link}>Home</li>
        </Link>
        <Link href={"/about"}>
          <li className={styles.link}>About</li>
        </Link>
        <Link href={"/projects"}>
          <li className={styles.link}>Projects</li>
        </Link>
        <Link href={"/contact"}>
          <li className={styles.link}>Contact</li>
        </Link>
      </ul>
    </footer>
  );
}
