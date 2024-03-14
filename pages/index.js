import styles from './homePage/homePage.module.scss';
import { userInformation } from './api/userData';
import { motion } from 'framer-motion';

const homePage = () => {
  const username = `<${userInformation.middleName} ${userInformation.lastName}/>`;
  const profilePicture = userInformation.profilePicture;
  const profilePictureBlured = userInformation.profilePictureBlured;

  return (
    <section className={styles.container}>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.45 }}
        className={styles.heading}
      >
        <div>Hi 👋, </div>
        <div>My name is</div>
        <div className={styles.username}>{username}</div>
        <div>I build things for web</div>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.45 }}
        className={styles.profile}
      >
        <img
          src={profilePicture}
          alt={
            userInformation.middleName +
            ' ' +
            userInformation.lastName +
            ' ' +
            'profile picture'
          }
        />
      </motion.div>
    </section>
  );
};

export default homePage;
