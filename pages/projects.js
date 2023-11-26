import NavLinks from "../components/NavLinks";
import LastComp from "../components/LastComp";
import styles from "../styles/Project.module.css";
import ProjectCard from "../components/ProjectCard";
import { request, gql } from "graphql-request";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Projects({ projects }) {
  return (
    <>
      <Head>
        <title>Projects - Suraj Katyayan: React/Nextjs Developer!</title>
        <meta
          name="description"
          content="Welcome to Suraj X Web Dev. Unleash the Power of Stunning Web Apps!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavLinks />
      <div className={styles.main}>
        <h1 className={styles.name}>My Projects</h1>
        <div className={styles.projectlist}>
          {projects.map((project) => (
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
      <Footer />
      <LastComp />
    </>
  );
}

export async function getStaticProps() {
  const endpoint = process.env.GRAPHQL_ENDPOINT; // Replace this with your actual GraphQL API endpoint
  const query = gql`
    query MyProjects {
      projects(orderBy: priorityOrder_ASC, first: 20) {
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
