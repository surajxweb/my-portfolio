import Image from "next/image";
import Link from "next/link";
import styles from "./LastComp.module.css";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import logo from "../resources/whitelogo.png";

export default function LastComp() {
  return (
    <div className={styles.credits}>
      <Link href={"/"}>
        <div className={styles.logo}>
          <Image alt="logo" src={logo} height={100} width={100} />
        </div>
      </Link>
      <div className={styles.social}>
        <Link
          href="https://www.linkedin.com/in/surajxweb/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin className={styles.socialicon} size="2em" />
        </Link>
        <Link
          href="https://github.com/surajxweb"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub className={styles.socialicon} size="2em" />
        </Link>
        <Link
          href="https://www.instagram.com/itssuzikat/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsInstagram className={styles.socialicon} size="2em" />
        </Link>
        <Link
          href="https://twitter.com/itssuzikat"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsTwitter className={styles.socialicon} size="2em" />
        </Link>
      </div>
      <div className={styles.madeby}>Designed & Built by Suraj Katyayan.</div>
    </div>
  );
}
