import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import LastComp from "../components/LastComp";
import Navbar from "../components/navbar";
import ProjectCard from "../components/ProjectCard";
import photo from "../resources/suraj_avatar/2.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Suraj Katyayan: Full Stack MERN Developer!</title>
        <meta
          name="description"
          content="Welcome to Suraj X Web Dev. Unleash the Power of Stunning Web Apps!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />
        <div className={styles.section1}>
          <div className={styles.meraphoto}>
            <Image src={photo} alt="profile picture" height={300} width={300} />
          </div>
          <div className={styles.helloworld}>
            <div className={styles.myname}>Hello, I am Suraj Katyayan.</div>
            <h1 className={styles.jobtitle}>Full Stack Mern Developer</h1>
            <div className={styles.jobdes}>
              As a seasoned full stack developer, I possess expertise in HTML5,
              Vanilla CSS, Tailwind CSS, JavaScript ES6+, TypeScript, React 18,
              Next.js 13, Node, Express, MongoDB, and GraphQL. With a passion
              for crafting exceptional web experiences, I am ready to bring your
              digital projects to life with precision and finesse.
            </div>
            <button className={styles.ctabutton}>Hire Me!</button>
          </div>
        </div>
        <div className={styles.services}>
          <div className={styles.uidesign}>
            <div className={styles.icon}></div>
            <div className={styles.servicetitle}>UI Design</div>
            <div className={styles.servicedes}></div>
          </div>
          <div className={styles.uidesign}>
            <div className={styles.icon}></div>
            <div className={styles.servicetitle}>Frontend Developement</div>
            <div className={styles.servicedes}></div>
          </div>
          <div className={styles.uidesign}>
            <div className={styles.icon}></div>
            <div className={styles.servicetitle}>Backend Developement</div>
            <div className={styles.servicedes}></div>
          </div>
        </div>
        <div className={styles.projects}>
          <div className={styles.sectiontitle}>
            <h2>Featured Projects</h2>
            <button>Show More</button>
          </div>
          <div className={styles.projectcontainer}>
            <ProjectCard />
          </div>
        </div>
        <div className={styles.contactme}>
          <div className={styles.contactinfo}>
            <h4>Let us work together on your next project.</h4>
            <div className={styles.contactdes}>
              Collaborate with me to turn your vision into a reality
            </div>
          </div>
          <button className={styles.contactcta}>Contact</button>
        </div>
      </main>

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
      <LastComp />
    </div>
  );
}
