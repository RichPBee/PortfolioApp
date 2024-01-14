import {FaGithub, FaLinkedin} from 'react-icons/fa'
// import {IoDocumentText} from 'react-icons/io5';
import Canvas from './HeroCanvas';
import './styles/Hero.css';

function Hero(): React.JSX.Element
{
    return (
        <div className="HeroSection PageSection">
            <Canvas/>
            <div className="HeroText">
                <h1>
                    Rich Balfourth
                </h1>
                <h4>
                    Junior developer with experience web-based casino games and front end applications using both vanilla JavaScript/TypeScript and frameworks.
                </h4>
                <div className="LinkButtons">
                    {/* <a href="" target="_blank">
                        <IoDocumentText size={100} color="rgb(175, 212, 188)"/>
                    </a> */}
                    <a href="https://github.com/RichPBee" target="_blank">
                        <FaGithub size={100} color="rgb(76, 97, 76)"/>
                    </a>
                    <a href="https://www.linkedin.com/in/rich-balfourth-16a54324b/" target="_blank">
                        <FaLinkedin size={100} color="rgb(76, 97, 76)"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero;