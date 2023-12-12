import './styles/Navbar.css';

function Navbar(): React.JSX.Element
{
    return (
        <nav className="Navbar">
            <ul className="NavLinks">
                <li>
                    <a href="">Skills</a>
                </li>
                <li>
                    <a href="">Projects</a>
                </li>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
                {/* Below temporarily commented out until page is added for it */}
                {/* <li> 
                    <a href="">Blogs & Devlogs</a>
                </li> */}
            </ul>
        </nav>
    );
}

export default Navbar;