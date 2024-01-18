import ProjectCard from './ProjectCard';
import { cardButtonSettings } from '../settings/ProjectCard';
import './styles/Projects.css'
import { useState } from 'react';
import VideoModal from './VideoModal';

function Projects(): React.JSX.Element
{
    const [inModal, setInModal] = useState(false);

    const toggleModal = (toggle: boolean) => {
        if (toggle) 
        {
            document.body.style.overflow = "hidden";
        }
        else 
        {
            document.body.style.overflow = "visible";
        }
        setInModal(toggle);
    }

    return (
        <>
        {inModal && <VideoModal toggleModal={toggleModal}/>}
        <div className="ProjectsSection PageSection" id="Projects">
            <ProjectCard 
                classProp='ProjectCard FirstCard'
                id="FirstCard"
                title = "Invaders Takeover"
                techStack =  "TypeScript, PIXI"
                aboutText = "Casino slots game developed at Light & Wonder using an internally developed PIXI.js based framework. I developed the planet selector transition, implemented bug fixes and various elements across UI, sound and animation. The development process for the game took a number of months, and required extensive collaboration with art, design and QA teams to achieve the finished product."
                buttonInfo={cardButtonSettings.projectOne}
            />
            <ProjectCard 
                classProp="ProjectCard SecondCard"
                id="SecondCard"
                title="Launcher Tool"
                techStack =  "TypeScript, NodeJS, ElectronJS, Webpack, Selenium Webdriver, zsh"
                aboutText = "An ElectronJS app to automate the process of launching local engine servers for casino games at L&W. The app looks for default files in a users computer to determine launchable games, and also provides options for configuring the search directories. Using Selenium webdriver, a simple user-defined csv config and a zsh script, the tool is then able to launch a local page for play-testing and developing game clients, without the need to manually use the terminal. "
                buttonInfo={cardButtonSettings.projectTwo}
                toggleModal={toggleModal}
            />
            <ProjectCard 
                classProp="ProjectCard ThirdCard"
                id="ThirdCard"
                title="Sympl"
                techStack =  "TypeScript"
                aboutText = "A basic modular framework for builing web pages. Uses a view controller to switch between pages, and a re-usable component design. This was primarily built as a learning project, and isn't fully fleshed out, but has the basic functionality for displaying a web page and setting up different views."
                buttonInfo={cardButtonSettings.projectThree}
            />
            <ProjectCard 
                classProp="ProjectCard FourthCard"
                id="FourthCard"
                title="This Site"
                techStack =  "React, TypeScript, Vite"
                buttonInfo={cardButtonSettings.projectFour}
            />
            {/* <ProjectCard 
                classProp="ProjectCard FifthCard"
                id="FifthCard"
                title="This Website"
                techStack =  "Various technologies"
                aboutText = "someTextAbout"
                buttonInfo={cardButtonSettings.projectFive}
            /> */}
        </div>
        </>
    )
}

export default Projects;