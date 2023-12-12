import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {IoDocumentText} from 'react-icons/io5';
import './styles/Footer.css';

function Footer(): React.JSX.Element
{
    return (
        <footer className="PageFooter">
            <div className="LinkButtons">
                    <a href="" target="_blank">
                        <IoDocumentText size={30}/>
                    </a>
                    <a href="https://github.com/RichPBee" target="_blank">
                        <FaGithub size={30} />
                    </a>
                    <a href="https://www.linkedin.com/in/rich-balfourth-16a54324b/" target="_blank">
                        <FaLinkedin size={30} />
                    </a>
                </div>
        </footer>
    )
}

export default Footer;