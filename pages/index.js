import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import LastComp from "../components/LastComp";
import NavLinks from "../components/NavLinks";
import ProjectCard from "../components/ProjectCard";
import photo from "../resources/suraj_avatar/2.png";
import { FiFigma } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import { AiOutlineDatabase } from "react-icons/ai";
import Footer from "../components/Footer";
import { IoMail } from "react-icons/io5";
import { request, gql } from "graphql-request";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

export default function Home({ projects }) {
  const featuredProjects = projects.slice(0, 4);
  console.log(featuredProjects);
  return (
    <div className={styles.container}>
      <Head>
        <title>Suraj Katyayan: Frontend Developer</title>
        <meta
          name="description"
          content="Welcome to SurajCodes.in. I turn ideas into beautiful web experiences!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.imageBackground}>
          <NavLinks />
          <div className={styles.section1}>
            <div className={styles.meraphoto}>
              <Image
                src={photo}
                alt="profile picture"
                height={300}
                width={300}
              />
            </div>
            <div className={styles.helloworld}>
              <div className={styles.myname}>
                Hello, I&apos;m Suraj Katyayan
              </div>
              <div className={styles.jobdes}>
                Experienced Frontend Developer with a versatile skill set that
                extends to Backend technologies. Proficient in JavaScript,
                React, TypeScript, Nextjs, Node, MongoDB and GraphQL; and
                specialized in turning conceptual ideas into elegant code.
              </div>
              <div className={styles.links}>
              <Link
          href="https://www.linkedin.com/in/surajxweb/"
          target="_blank"
          rel="noopener noreferrer"
        >
                <FaLinkedin className={styles.icon} size={"2em"} />
                </Link>
                <Link
          href="https://github.com/surajxweb"
          target="_blank"
          rel="noopener noreferrer"
        >
                <FaGithub className={styles.icon} size={"2em"} />
                </Link>
                <Link
          href="https://twitter.com/itssuzikat"
          target="_blank"
          rel="noopener noreferrer"
        >
                <FaTwitterSquare className={styles.icon} size={"2em"} />
                </Link>
                <Link  href="https://www.instagram.com/itssuzikat/"
          target="_blank"
          rel="noopener noreferrer">
                <FaInstagram className={styles.icon} size={"2em"} />

                </Link>
              </div>
              <Link href={"/contact"}  className={styles.contactButton}>
            
                Contact me <IoMail className="react-icons" />
              
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.services}>
          <div className={`${styles.servicecontainer} `}>
            <FaReact className={styles.icon} size="3.5em" color="#b72730" />
            <h2 className={styles.servicetitle}>Frontend Developement</h2>
            <div className={styles.servicedes}>
              With a keen eye for detail and a passion for crafting responsive
              and interactive user interfaces, I bring your ideas to life with
              the power of React and Nextjs.
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
          <div className={styles.servicecontainer}>
            <FiFigma className={styles.icon} size="3.5em" color="#b72730" />
            <h2 className={`${styles.servicetitle}`}>UI Design</h2>
            <div className={styles.servicedes}>
              From captivating user interfaces to seamless user experiences, I
              create designs that engage, delight, and elevate your brand.
            </div>
          </div>
        </div>

        <div className={styles.projects}>
          <div className={styles.sectiontitle}>
            <h2>Featured Projects</h2>
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
                tech={project.techUsed}
              />
            ))}
          </div>
          <Link href={"/projects"}>
            <div className={`${styles.ctabutton} ${styles.showmore}`}>
              Show More
            </div>
          </Link>
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
        techUsed
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
