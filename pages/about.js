import Navbar from "../components/navbar";
import LastComp from "../components/LastComp";
import styles from "../styles/About.module.css";
import Footer from "../components/Footer";
import Image from "next/image";
import photo from "../resources/suraj_avatar/2.png";
import { ImLocation } from "react-icons/im";

export default function About() {
  return (
    <>
      <Navbar />
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
              <h2 className={styles.myname}>Suraj Katyayan</h2>
              <div className={styles.objective}>
                Seeking a challenging role as a Frontend React Developer to
                utilize my skills in web development and create engaging user
                experiences through innovative solutions.
              </div>
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
                <div className={styles.workdate}>March 2022 to April 2023</div>
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
              <div>HTML5, CSS3, JavaScript ES6+</div>
              <div>React, Redux, React-Router, TypeScript, Nextjs, GraphQL</div>
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
