import { navigateToSection, sectionIds } from '../../../../utils/utils';
import styles from './HomeSection.module.scss';

const TopSection = () => {
    const jobs = ['servicing', 'maintenence', 'bike builds'];
    const name = 'Omar';

    return (
        <div id={sectionIds.home} className={styles.topSection}>
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
                                    <span
                                        key={`ji_${x}`}
                                        className={styles.jobItem}
                                    >
                                        {x}
                                    </span>
                                ))}
                            </div>
                            <div>
                                <button
                                    onClick={() => navigateToSection('aboutme')}
                                >
                                    About me
                                </button>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopSection;
