import styles from '../Home.module.css';

const TopSection = () => {
    const jobs = ['servicing', 'maintenence', 'bike builds'];
    const name = 'Omar';
    return (
        <div className={styles.topSection}>
            <div className={styles.topSectionMobile}>
                <div className={styles.topSectionContainer}>
                    <div className={styles.topSectionContent}>
                        <section className={styles.introWrapper}>
                            <div className={styles.salutation}>Hi there,</div>
                            <div className={styles.nameWrapper}>
                                <span>I am</span>
                                <span className={styles.name}>{name}</span>
                            </div>
                            <div className={styles.jobItemWrapper}>
                                {jobs.map((x) => (
                                    <span className={styles.jobItem}>{x}</span>
                                ))}
                            </div>
                            <div>
                                <button>About me</button>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopSection;
