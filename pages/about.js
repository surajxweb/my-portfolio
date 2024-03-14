import NavLinks from "../components/NavLinks";
import LastComp from "../components/LastComp";
import styles from "../styles/About.module.css";
import Footer from "../components/Footer";
import Image from "next/image";
import photo from "../resources/suraj_avatar/2.png";
import { ImLocation } from "react-icons/im";
import { FaDownLong } from "react-icons/fa6";
import Head from "next/head";
import resume from "../public/SurajKatyayan_Frontend.pdf";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Head>
        <title>Suraj Katyayan: Frontend Developer</title>
        <meta
          name="description"
          content="Welcome to SurajCodes.in. I turn ideas into beautiful web experiences!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavLinks />
      <div className={styles.main}>
        <h1>About Me</h1>
        <div className={styles.aboutcontainer}>
          <div className={styles.sec1}>
            <div className={styles.image}>
              <Image
                src={photo}
                alt="my photo"
                height={200}
                width={200}
              ></Image>
            </div>
            <div className={styles.info}>
              <h1 className={styles.myname}>Suraj Katyayan</h1>
              <div className={styles.objective}>
                As a proficient web developer with a year of experience in an
                e-commerce startup environment, I am actively seeking new
                opportunities to leverage my expertise in JavaScript, React and
                Next.js to drive innovation in projects with a broader user
                base.
              </div>
              {/* <Link href={resume} target="_blank">
                <div className={styles.pdfFile}>
                  Download Resume <FaDownLong />
                </div>
              </Link> */}
            </div>
          </div>
          <div className={styles.sec2}>
            <h3 className={styles.title}>Work Experience</h3>
            <div className={styles.works}>
              <div className={styles.work}>
                <h4 className={styles.worktitle}>Kalarric Lifestyle</h4>
                <div className={styles.workloaction}>
                  <ImLocation size="1em" color="#ccc" className={styles.icon} />
                  Delhi, India
                </div>
                <div className={styles.workdate}>
                  May 2022 to December 2023
                </div>
                <div className={styles.jobdes}>
                  <div className={styles.jobdestitle}>Frontend Developer</div>
                  <div className={styles.jobdesinfo}>{/* info */}</div>
                </div>
              </div>
              <div className={styles.work}>
                <h4 className={styles.worktitle}>
                  Verb Studio (Acquired by KAFQA)
                </h4>
                <div className={styles.workloaction}>
                  <ImLocation size="1em" color="#ccc" className={styles.icon} />
                  Bangalore, India
                </div>
                <div className={styles.workdate}>
                  January 2022 to March 2022
                </div>
                <div className={styles.jobdes}>
                  <div className={styles.jobdestitle}>Frontend Engineer</div>
                  <div className={styles.jobdesinfo}>{/* info */}</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sec4}>
            <h4 className={styles.title}>Technical Skills</h4>
            <div className={styles.desinfo}>
              <div>
                HTML, CSS, JavaScript, TypeScript, Nextjs, React, Redux Toolkit,
                React Testing Library, Jest, React Hook Form, Zod Validation,
                Framer Motion, CSS Modules, Styled Components, Tailwind CSS,
                Shadcn, Redix UI, Material UI, Nodejs, MongoDB, GraphQL, Postman
                and Git Version Control.
              </div>
            </div>
          </div>
          <div className={styles.sec3}>
            <h3 className={styles.title}>Education</h3>
            <div className={styles.desinfo}>
              <h4 className={styles.mca}>Masters in Computer Applications</h4>
              <div className={styles.workloaction}>
                <ImLocation size="1em" color="#ccc" className={styles.icon} />
                Vellore Institute of Technology, Vellore
              </div>
              <div className={styles.mcainfo}>8.64 CGPA</div>
            </div>
          </div>
          <div className={styles.sec4}>
            <h4 className={styles.title}>Hobbies</h4>
            <div className={styles.desinfo}>
              I enjoy reading books and writing blogs, and I find astronomy
              fascinating. Cinema is a significant interest of mine, and I have
              a particular love for Star Wars, Batman, Spiderman, and John Wick.
              Among all films, Interstellar holds a special place as my
              favorite.
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <LastComp />
    </>
  );
}
