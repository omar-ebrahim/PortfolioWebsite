import Navbar from '../../components/navbar/Navbar';
import AboutMe from './components/aboutme/AboutMe';
import HomeSection from './components/homesection/HomeSection';
import Services from './components/services/Services';

const Home = () => {
    return (
        <>
            <Navbar />
            <HomeSection />
            <AboutMe />
            <Services />
        </>
    );
};

export default Home;
