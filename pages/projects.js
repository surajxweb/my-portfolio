import Navbar from "../components/navbar";
import LastComp from "../components/LastComp";
import styles from "../styles/Project.module.css";
import ProjectCard from "../components/ProjectCard";
import { request, gql } from "graphql-request";

export default function Projects({ projects }) {
  return (
    <>
      <Navbar />
      <div className={styles.projectscontainer}>
        <h2 className={styles.name}>Projects by Suraj Katyayan</h2>
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
      <LastComp />
    </>
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
