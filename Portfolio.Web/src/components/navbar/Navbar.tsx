import { useEffect, useState } from 'react';
import './Navbar.scss';
import {
    navigateToSection,
    sectionIds,
    type SectionId,
} from '../../utils/utils';

interface NavbarLink {
    name: string;
    path: string;
    sectionId: SectionId;
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks: NavbarLink[] = [
        { name: 'Home', path: '#', sectionId: 'home' },
        { name: 'About', path: '#about', sectionId: 'aboutme' },
        { name: 'Services', path: '#services', sectionId: 'services' },
        { name: 'Contact', path: '#contact', sectionId: 'contact' },
    ];

    const resetMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 769px)');

        mediaQuery.addEventListener('change', resetMenu);

        return () => {
            mediaQuery.removeEventListener('change', resetMenu);
        };
    }, []);

    const [selectedSection, setSelectedSection] = useState<SectionId>(
        sectionIds.home,
    );

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h1 className="logo">Route26 Cycle Repair</h1>
                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <li
                            key={link.name}
                            className={
                                selectedSection === link.sectionId
                                    ? 'selected-section'
                                    : ''
                            }
                        >
                            <span
                                onClick={() => {
                                    navigateToSection(link.sectionId);
                                    resetMenu();
                                    setSelectedSection(link.sectionId);
                                }}
                            >
                                {link.name}
                            </span>
                        </li>
                    ))}
                </ul>
                <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                    <div className={isOpen ? 'bar rotate-bar1' : 'bar'}></div>
                    <div className={isOpen ? 'bar hide-bar2' : 'bar'}></div>
                    <div className={isOpen ? 'bar rotate-bar3' : 'bar'}></div>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
