import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {IoDocumentText} from 'react-icons/io5';
import Canvas from './HeroCanvas';
import './styles/Hero.css';

function Hero(): React.JSX.Element
{
    return (
        <div className="HeroSection PageSection">
            <Canvas/>
            <div className="HeroText">
                <h1>
                    Hi, my name is Rich.
                </h1>
                <h4>
                    I'm a developer with experience in front-end applications
                    and HTML5 game development.
                </h4>
                <div className="LinkButtons">
                    <a href="" target="_blank">
                        <IoDocumentText size={100}/>
                    </a>
                    <a href="https://github.com/RichPBee" target="_blank">
                        <FaGithub size={100} />
                    </a>
                    <a href="https://www.linkedin.com/in/rich-balfourth-16a54324b/" target="_blank">
                        <FaLinkedin size={100} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero;