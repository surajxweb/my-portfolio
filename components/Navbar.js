import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "../resources/SurajxWeb.png";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link href={"/"}>
        <div className={styles.logo}>
          <Image alt="logo" src={logo} height={60} width={60} />
        </div>
      </Link>
      <ul className={styles.lists}>
        <Link href={"/"}>
          <li className={styles.list}>Home</li>
        </Link>
        <Link href={"/projects"}>
          <li className={styles.list}>Projects</li>
        </Link>
        <Link href={"/about"}>
          <li className={styles.list}>About</li>
        </Link>
        <Link href={"contact"}>
          <li className={styles.list}>Contact</li>
        </Link>
      </ul>
    </div>
  );
}
