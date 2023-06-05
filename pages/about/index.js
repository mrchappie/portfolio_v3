import styles from './about.module.scss';

const about = () => {
  return (
    <section className={styles.about}>
      <div className={styles.about__me}>
        <div className={styles.about__me__title}>About me</div>
        <div className={styles.about__me__description}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
          consequatur accusamus at vitae, dolor ratione? Dolorum aliquid iste
          sint iusto ullam atque totam repellat tenetur ipsa enim quas maxime
          asperiores est ab minus reiciendis, sed odio architecto. Perferendis,
          unde id.
        </div>
      </div>
      <div className={styles.experience}>
        <div className={styles.experience__title}>Work Experience</div>
        <div className={styles.experience__job}>
          <div className={styles.experience__job__header}>
            <div className={styles.experience__job__header__title}>
              Junior Web Developer
            </div>
            <div className={styles.experience__job__header__location}>
              <div className={styles.company}>Lorem, ipsum dolor.</div>
              <div className={styles.city}>Bucharest</div>
            </div>
          </div>
          <div className={styles.experience__job__duration}>
            <span>Full Time</span>
            <span>Sep. 2021 - Dec. 2021</span>
          </div>
        </div>
        <div className={styles.experience__job}>
          <div className={styles.experience__job__header}>
            <div className={styles.experience__job__header__title}>
              Junior Web Developer
            </div>
            <div className={styles.experience__job__header__location}>
              <div className={styles.company}>Lorem, ipsum dolor.</div>
              <div className={styles.city}>Bucharest</div>
            </div>
          </div>
          <div className={styles.experience__job__duration}>
            <span>Full Time</span>
            <span>Sep. 2021 - Dec. 2021</span>
          </div>
        </div>
        <div className={styles.experience__job}>
          <div className={styles.experience__job__header}>
            <div className={styles.experience__job__header__title}>
              Junior Web Developer
            </div>
            <div className={styles.experience__job__header__location}>
              <div className={styles.company}>Lorem, ipsum dolor.</div>
              <div className={styles.city}>Bucharest</div>
            </div>
          </div>
          <div className={styles.experience__job__duration}>
            <span>Full Time</span>
            <span>Sep. 2021 - Dec. 2021</span>
          </div>
        </div>
      </div>
      <div className={styles.education}>
        <div className={styles.education__title}>Education</div>
        <div className={styles.education__type}>
          <div className={styles.education__type__header}>
            <div className={styles.education__type__header__title}>
              Bachelor in Electronics & Communication
            </div>
            <div className={styles.education__type__header__location}>
              <div className={styles.company}>Lorem, ipsum dolor.</div>
              <div className={styles.city}>Bucharest</div>
            </div>
          </div>
          <div className={styles.education__type__duration}>
            <span>Full Time</span>
            <span>Sep. 2021 - Dec. 2021</span>
          </div>
        </div>
        <div className={styles.education__type}>
          <div className={styles.education__type__header}>
            <div className={styles.education__type__header__title}>
              Bachelor in Electronics & Communication
            </div>
            <div className={styles.education__type__header__location}>
              <div className={styles.company}>Lorem, ipsum dolor.</div>
              <div className={styles.city}>Bucharest</div>
            </div>
          </div>
          <div className={styles.education__type__duration}>
            <span>Full Time</span>
            <span>Sep. 2021 - Dec. 2021</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
