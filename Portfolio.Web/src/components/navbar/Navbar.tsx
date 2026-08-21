import { useState } from "react"
import "./Navbar.css"

interface NavbarLink {
    name: string;
    path: string;
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks: NavbarLink[] = [
        { name: 'Home', path: '#' },
        { name: 'About', path: '#about' },
        { name: 'Services', path: '#services' },
        { name: 'Contact', path: '#contact' },
    ];
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h1 className="logo">RyanBurnsBuildSolutions</h1>
                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.path} onClick={() => setIsOpen(false)}>
                                {link.name}
                            </a>
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