import { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import AboutMe from './components/aboutme/AboutMe';
import ContactMe from './components/contact-me/ContactMe';
import HomeSection from './components/homesection/HomeSection';
import Services from './components/services/Services';
import {
    type ServiceContent,
    type TopSectionContent,
    type AboutMeContent,
} from '../../sanity/content';
import {
    fetchAboutMe,
    fetchServices,
    fetchTopSection,
} from '../../sanity/client';

const Home = () => {
    const [topSection, setTopSection] = useState<TopSectionContent | null>(
        null,
    );
    const [services, setServices] = useState<ServiceContent[]>([]);
    const [aboutMe, setAboutMe] = useState<AboutMeContent | null>(null);

    useEffect(() => {
        let isMounted = true;

        Promise.all([fetchTopSection(), fetchServices(), fetchAboutMe()]).then(
            ([topSectionResults, servicesResults, aboutMeResults]) => {
                if (!isMounted) return;
                if (topSectionResults) setTopSection(topSectionResults);
                if (servicesResults.length > 0) setServices(servicesResults);
                if (aboutMeResults) setAboutMe(aboutMeResults);
            },
        );

        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <>
            <Navbar />
            {topSection && <HomeSection content={topSection} />}
            {aboutMe && <AboutMe content={aboutMe} />}
            <Services services={services} />
            <ContactMe />
        </>
    );
};

export default Home;
