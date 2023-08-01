import Navbar from "../components/navbar";
import LastComp from "../components/LastComp";
import styles from "../styles/Project.module.css";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <>
      <Navbar />
      <div className={styles.projectscontainer}>
        <h2 className={styles.name}>Projects by Suraj Katyayan</h2>
        <div className={styles.projectlist}>
          <ProjectCard />
        </div>
      </div>
      <LastComp />
    </>
  );
}
