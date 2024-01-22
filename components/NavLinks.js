import styles from "./NavLinks.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "../resources/SurajxWeb.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiCancel } from "react-icons/gi";
import { useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const [listVisibility, setListVisibility] = useState(false);
  const listVisibilityHandeller = () => {
    setListVisibility(!listVisibility);
  };
  const path = usePathname();
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navIcons} onClick={listVisibilityHandeller}>
          {!listVisibility && <GiHamburgerMenu size="1.5em" color="#cccc" />}
          {listVisibility && <GiCancel size="1.5em" color="#cccc" />}
        </div>
        <Link href={"/"}>
          <div className={styles.logo}>
            <Image alt="logo" height={60} width={60} src={logo} />
          </div>
        </Link>
        <div className={styles.links}>
          <Link
            className={`${path === "/" ? styles.selectedLink : styles.unselectedLink}`}
            href={"/"}
          >
            Home
          </Link>
          <Link
            className={`${path === "/projects" ? styles.selectedLink : styles.unselectedLink}`}
            href={"/projects"}
          >
            Projects
          </Link>
          <Link
            className={`${path === "/about" ? styles.selectedLink : styles.unselectedLink}`}
            href={"/about"}
          >
            About
          </Link>
          <Link
            className={`${path === "/contact" ? styles.selectedLink : styles.unselectedLink}`}
            href={"/contact"}
          >
            Contact
          </Link>
        </div>

        <div className={styles.navIcons}>
          <Link href={"/contact"}>
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
