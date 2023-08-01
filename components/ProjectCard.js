import Link from "next/link";
import Image from "next/image";
import styles from "./ProjectCard.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function ProjectCard({ imageurl, des, name, siteurl, codeurl }) {
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
      <h3 className={styles.projecttitle}>{name}</h3>
      <div className={styles.projectdes}>{des}</div>
      <div className={styles.projectcta}>
        <Link target="_blank" rel="noopener noreferrer" href={siteurl}>
          Show Site <AiOutlineArrowRight className={styles.icon} />
        </Link>
        <Link target="_blank" rel="noopener noreferrer" href={codeurl}>
          Show Code <AiOutlineArrowRight className={styles.icon} />
        </Link>
      </div>
    </div>
  );
}
