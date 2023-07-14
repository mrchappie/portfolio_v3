import styles from './contact.module.scss';

import { userInformation } from '../api/userData';

const contactUs = () => {
  return (
    <section className={styles.contact}>
      <div>For any questions please contact me at:</div>
      <div>{userInformation.email}</div>
      <div>or</div>
      <div>{userInformation.phoneNumber}</div>
    </section>
  );
};

export default contactUs;
