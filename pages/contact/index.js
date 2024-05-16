import styles from './contact.module.scss';

import { userInformation } from '../api/userData';

const contactUs = () => {
  return (
    <section className={styles.contact}>
      <div>For any questions please contact me at:</div>
      <div>
        <a href={`mailto:${userInformation.email}`}>{userInformation.email}</a>
      </div>
      <div>or</div>
      <div>
        <a href={`tel:${userInformation.phoneNumber}`}>
          {userInformation.phoneNumber}
        </a>
      </div>
    </section>
  );
};

export default contactUs;
