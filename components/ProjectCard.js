import Link from "next/link";
import Image from "next/image";
import styles from "./ProjectCard.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function ProjectCard({
  imageurl,
  des,
  name,
  siteurl,
  codeurl,
  tech,
}) {
  return (
    <div className={styles.main}>
      <div className={styles.projectimage}>
        <Image
          src={imageurl}
          alt="cover image of project"
          width={421}
          height={200}
        />
      </div>
      <div className={styles.infoContainer}>
        <h3 className={styles.projecttitle}>{name}</h3>
        <div className={styles.projectdes}>{des}</div>
        {tech && <div className={styles.tech}>Tech Stack Used: {tech}</div>}
        <div className={styles.projectcta}>
          <Link target="_blank" className={styles.demo} href={siteurl}>
            Show Deployed Site
          </Link>
          <Link target="_blank" className={styles.code} href={codeurl}>
            Show Code
          </Link>
        </div>
      </div>
    </div>
  );
}
