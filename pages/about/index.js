import { userInformation } from '../api/userData';

import styles from './about.module.scss';

const userWorkExperience = Object.values(userInformation.workExperience);
const userEducation = Object.values(userInformation.education);

const about = () => {
  return (
    <section className={styles.about}>
      <div className={styles.about__me}>
        <div className={styles.about__me__title}>{`<About me/>`}</div>
        <div className={styles.about__me__description}>
          {userInformation.aboutMe}
        </div>
      </div>
      <div className={styles.experience}>
        <div className={styles.experience__title}>{'<Work Experience/>'}</div>
        {userWorkExperience.map((work, index) => (
          <div key={index} className={styles.experience__job}>
            <div className={styles.experience__job__header}>
              <div className={styles.experience__job__header__title}>
                {work.jobName}
              </div>
              <div className={styles.experience__job__header__location}>
                <div className={styles.company}>
                  <a href={work.jobLinkedin ?? null} target="_blanck">
                    {work.jobCompany}
                  </a>
                </div>
                <div className={styles.city}>{work.jobLocation}</div>
              </div>
            </div>
            <div className={styles.experience__job__duration}>
              <span>{work.jobType}</span>
              <span>{work.jobDuration}</span>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.education}>
        <div className={styles.education__title}>{`<Education/>`}</div>
        {userEducation.map((education, index) => (
          <div key={index} className={styles.education__type}>
            <div className={styles.education__type__header}>
              <div className={styles.education__type__header__title}>
                {education.educationName}
              </div>
              <div className={styles.education__type__header__location}>
                <div className={styles.company}>
                  {education.educationInstitute}
                </div>
                <div className={styles.city}>{education.educationLocation}</div>
              </div>
            </div>
            <div className={styles.education__type__duration}>
              <span>{education.educationType}</span>
              <span>{education.educationDuration}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default about;
