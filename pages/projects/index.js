import ProjectCard from '../../components/projectCard/projectCard';
import { userInformation } from '../api/userData';
import { motion } from 'framer-motion';

import styles from './projectsPage.module.scss';

const userProjects = Object.values(userInformation.projects);

const projects = () => {
  return (
    <section className={styles.projects}>
      <div className={styles.heading}>{`<Projects/>`}</div>
      <div className={styles.description}>Things I've built so far</div>
      <div className={styles.projects__container}>
        {userProjects.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.05 }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ ease: 'linear', duration: 0.25 }}
          >
            <ProjectCard
              key={index}
              poster={project.poster}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              liveDemo={project.links.liveDemo}
              sourceCode={project.links.sourceCode}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default projects;
