import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import LastComp from "../components/LastComp";
import Navbar from "../components/navbar";
import ProjectCard from "../components/ProjectCard";
import photo from "../resources/suraj_avatar/2.png";
import { FiFigma } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import { AiOutlineDatabase } from "react-icons/ai";
import Footer from "../components/Footer";
import { request, gql } from "graphql-request";

export default function Home({ projects }) {
  const featuredProjects = projects.slice(0, 4);
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
            <div className={styles.myname}>Hello, I&apos;m Suraj Katyayan</div>
            <h1 className={styles.jobtitle}>React / Next Developer.</h1>
            <div className={styles.jobdes}>
              As a seasoned frontend developer, I possess expertise in HTML5,
              Vanilla CSS, Tailwind CSS, JavaScript ES6+, TypeScript, React 18,
              Next.js 13 and GraphQL. With a passion for crafting exceptional
              web experiences, I am ready to bring your digital projects to life
              with precision and finesse.
            </div>
            <Link href={"/contact"}>
              <button className={styles.ctabutton}>Hire Me!</button>
            </Link>
          </div>
        </div>
        <div className={styles.services}>
          <div className={styles.servicecontainer}>
            <FiFigma className={styles.icon} size="3.5em" color="#b72730" />
            <h2 className={`${styles.servicetitle}`}>UI Design</h2>
            <div className={styles.servicedes}>
              From captivating user interfaces to seamless user experiences, I
              create designs that engage, delight, and elevate your brand.
            </div>
          </div>
          <div className={`${styles.servicecontainer} `}>
            <FaReact className={styles.icon} size="3.5em" color="#b72730" />
            <h2 className={styles.servicetitle}>Frontend Developement</h2>
            <div className={styles.servicedes}>
              With a keen eye for detail and a passion for crafting responsive
              and interactive user interfaces, I bring your ideas to life with
              the power of React and Nextjs. .
            </div>
          </div>
          <div className={styles.servicecontainer}>
            <AiOutlineDatabase
              className={styles.icon}
              size="3.5em"
              color="#b72730"
            />
            <h2 className={styles.servicetitle}>Backend Developement</h2>
            <div className={styles.servicedes}>
              As an aspiring Full Stack MERN Developer, I am learning Node.js,
              Express.js, and MongoDB to build innovative web applications. 🚀
            </div>
          </div>
        </div>

        <div className={styles.projects}>
          <div className={styles.sectiontitle}>
            <h2>Featured Projects</h2>
            <Link href={"/projects"}>
              <button className={styles.ctabutton}>Show More</button>
            </Link>
          </div>
          <div className={styles.projectcontainer}>
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                imageurl={project.projectImage.url}
                des={project.projectDescription}
                name={project.projectName}
                siteurl={project.siteurl}
                codeurl={project.codeurl}
              />
            ))}
          </div>
        </div>

        <div className={styles.contactme}>
          <div className={styles.contactcontainer}>
            <div className={styles.contactinfo}>
              <h4>Let us work together on your next project.</h4>
              <div className={styles.contactdes}>
                Collaborate with me to turn your vision into a reality.
              </div>
            </div>
            <Link href={"/contact"}>
              <div className={styles.ctabutton}>Contact</div>
            </Link>
          </div>
        </div>
      </main>
      <Footer />

      <LastComp />
    </div>
  );
}

export async function getStaticProps() {
  const endpoint = process.env.GRAPHQL_ENDPOINT; // Replace this with your actual GraphQL API endpoint
  const query = gql`
    query MyProjects {
      projects(orderBy: priorityOrder_ASC) {
        id
        projectImage {
          url
        }
        projectDescription
        projectName
        siteurl
        codeurl
      }
    }
  `;

  const data = await request(endpoint, query);

  return {
    props: {
      projects: data.projects,
    },
  };
}
