import Navbar from '../../components/navbar/Navbar';
import AboutMe from './components/aboutme/AboutMe';
import ContactMe from './components/contact-me/ContactMe';
import HomeSection from './components/homesection/HomeSection';
import Services from './components/services/Services';

const Home = () => {
    return (
        <>
            <Navbar />
            <HomeSection />
            <AboutMe />
            <Services />
            <ContactMe />
        </>
    );
};

export default Home;
