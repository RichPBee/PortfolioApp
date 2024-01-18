import {FaGithub, FaLinkedin} from 'react-icons/fa'
import './styles/Footer.css';

function Footer(): React.JSX.Element
{
    return (
        <footer className="PageFooter">
            <div className="FooterLinks">
                    <a href="https://github.com/RichPBee" target="_blank">
                        <FaGithub size={40}  color="rgb(0, 0, 0)"/>
                    </a>
                    <a href="https://www.linkedin.com/in/rich-balfourth-16a54324b/" target="_blank">
                        <FaLinkedin size={40} color="rgb(0, 0, 0)"/>
                    </a>
                </div>
        </footer>
    )
}

export default Footer;