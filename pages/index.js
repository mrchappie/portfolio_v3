import styles from './homePage/homePage.module.scss';
import { userInformation } from './api/userData';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const homePage = () => {
  const username = `<${userInformation.middleName} ${userInformation.lastName}/>`;
  const profilePicture = userInformation.profilePicture;
  const profilePictureBlured = userInformation.profilePictureBlured;

  return (
    <section className={styles.container}>
      <div className={styles.heading}>
        <div>Hi 👋, </div>
        <div>My name is</div>
        <div className={styles.username}>{username}</div>
        <div>I build things for web</div>
      </div>
      <div className={styles.profile}>
        <LazyLoadImage
          src={profilePicture}
          PlaceholderSrc={profilePictureBlured}
          effect="blur"
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
