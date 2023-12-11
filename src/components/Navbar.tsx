import './styles/Navbar.css';

function Navbar(): React.JSX.Element
{
    return (
        <header>
            <ul className="Navbar">
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
                <li>
                    <a href="">Blogs & Devlogs</a>
                </li>
            </ul>
        </header>
    )
}

export default Navbar;