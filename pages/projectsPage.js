import ProjectCard from '../components/projectCard/projectCard';

import styles from './projectsPage/projectsPage.module.scss';

const projectsPage = () => {
  return (
    <section className={styles.projects}>
      <div className={styles.heading}>Projects</div>
      <div className={styles.description}>Things I've built so far</div>
      <div className={styles.projects__container}>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
      </div>
    </section>
  );
};

export default projectsPage;
