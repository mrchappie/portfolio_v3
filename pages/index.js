import styles from './homePage/homePage.module.scss';

import { userInformation } from './api/userData';
const username = `<${userInformation.middleName} ${userInformation.lastName}/>`;

const homePage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.heading}>
        <div>Hi 👋, </div>
        <div>My name is</div>
        <div className={styles.username}>{username}</div>
        <div>I build things for web</div>
      </div>
      <div className={styles.profile}>
        <img
          src={userInformation.profilePicture}
          alt={
            userInformation.middleName +
            ' ' +
            userInformation.lastName +
            ' ' +
            'profile picture'
          }
        />
      </div>
    </section>
  );
};

export default homePage;
