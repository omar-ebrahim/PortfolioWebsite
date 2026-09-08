import Navbar from '../../components/navbar/Navbar';
import AboutMe from './components/aboutme/AboutMe';
import ContactMe from './components/contact-me/ContactMe';
import HomeSection from './components/homesection/HomeSection';
import Services from './components/services/Services';
import styles from './Home.module.scss';

const Home = () => {

    return (
        <>
            <Navbar />
            <main className={styles.layout}>
                <HomeSection />
                <AboutMe />
                <Services />
                <ContactMe />
            </main>
        </>
    );
};

export default Home;
