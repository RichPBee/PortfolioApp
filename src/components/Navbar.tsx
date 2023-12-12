import './styles/Navbar.css';

function Navbar(): React.JSX.Element
{
    return (
        <nav className="Navbar">
            <ul className="NavLinks">
                <li>
                    <a href="#Skills">Skills</a>
                </li>
                <li>
                    <a href="#Projects">Projects</a>
                </li>
                <li>
                    <a href="#About">About</a>
                </li>
                <li>
                    <a href="#Contact">Contact</a>
                </li>
                {/* Below temporarily commented out until page is added for it
                 <li> 
                    <a href="">Blogs & Devlogs</a>
                </li> */}
            </ul>
        </nav>
    );
}

export default Navbar;