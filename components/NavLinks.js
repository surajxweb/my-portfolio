import styles from "./NavLinks.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "../resources/SurajxWeb.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiCancel } from "react-icons/gi";
import { useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";

export default function NavLinks() {
  const [listVisibility, setListVisibility] = useState(false);
  const listVisibilityHandeller = () => {
    setListVisibility(!listVisibility);
  };
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navIcons} onClick={listVisibilityHandeller}>
          {!listVisibility && <GiHamburgerMenu size="1.5em" color="#cccc" />}
          {listVisibility && <GiCancel size="1.5em" color="#cccc" />}
        </div>
        <div className={styles.logo}>
          <Image alt="logo" height={60} width={60} src={logo} />
        </div>
        <ul className={styles.links}>
          <Link href={"/"} className={styles.link}>
            Home
          </Link>
          <Link href={"/projects"} className={styles.link}>
            Projects
          </Link>
          <Link href={"/about"} className={styles.link}>
            About
          </Link>
          <Link href={"/contact"} className={styles.link}>
            Contact
          </Link>
        </ul>

        <div className={styles.navIcons}>
          <Link href={"/contact"} onClick={listVisibilityHandeller}>
            <AiOutlineMessage size="1.5em" color="#cccc" />
          </Link>
        </div>
      </div>
      {listVisibility && (
        <ul className={styles.mobilelinks} onClick={listVisibilityHandeller}>
          <Link href={"/"} className={styles.mobilelink}>
            Home
          </Link>
          <Link href={"/projects"} className={styles.mobilelink}>
            Projects
          </Link>
          <Link href={"/about"} className={styles.mobilelink}>
            About
          </Link>
          <Link href={"/contact"} className={styles.mobilelink}>
            Contact
          </Link>
        </ul>
      )}
    </>
  );
}
