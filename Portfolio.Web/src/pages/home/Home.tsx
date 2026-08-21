import styles from './Home.module.css'
import Navbar from '../../components/navbar/Navbar';

const Home = () => {

    const jobs = ['roofing', 'gardens', 'stonework', 'carpentry']

    return (
        <>
            <Navbar />
            <div className={styles.topSection}>
                <div className={styles.topSectionContainer}>
                    <div className={styles.topSectionContent}>
                        <section className={styles.introWrapper}>
                            <div>Hi there,</div>
                            <div>I am <span className={styles.name}>Ryan</span></div>
                            <div className={styles.jobItemWrapper}>{jobs.map(x => <span className={styles.jobItem}>{x}</span>)}</div>
                            <div><button>About me</button></div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Home;
