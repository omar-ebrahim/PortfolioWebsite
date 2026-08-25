import Navbar from '../../components/navbar/Navbar';
import AboutMe from './components/aboutme/AboutMe';
import HomeSection from './components/homesection/HomeSection';

const Home = () => {
    return (
        <>
            <Navbar />
            <HomeSection />
            <AboutMe />
        </>
    );
};

export default Home;
