import ProjectCard from '../../components/projectCard/projectCard';
import { userInformation } from '../api/userData';

import styles from './projectsPage.module.scss';

const userProjects = Object.values(userInformation.projects);

const projects = () => {
  return (
    <section className={styles.projects}>
      <div className={styles.heading}>{`<Projects/>`}</div>
      <div className={styles.description}>Things I've built so far</div>
      <div className={styles.projects__container}>
        {userProjects.map((project, index) => (
          <ProjectCard
            key={index}
            poster={project.poster}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            liveDemo={project.links.liveDemo}
            sourceCode={project.links.sourceCode}
          ></ProjectCard>
        ))}
      </div>
    </section>
  );
};

export default projects;
