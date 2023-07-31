import Link from "next/link";
import Image from "next/image";
import styles from "./ProjectCard.module.css";

export default function ProjectCard() {
  return (
    <>
      <div className={styles.projectimage}>{/* Cover image */}</div>
      <h3 className={styles.projecttitle}></h3>
      <div className={styles.projectdes}></div>
      <div className={styles.projectcta}>
        <Link href={""}>Show Site</Link>
        <Link href={""}>Show Code</Link>
      </div>
    </>
  );
}
