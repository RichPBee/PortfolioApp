import ProjectCard from './ProjectCard';
import { cardButtonSettings } from '../settings/ProjectCard';
import './styles/Projects.css'

function Projects(): React.JSX.Element
{

    return (
        <div className="ProjectsSection PageSection" id="Projects">
            <ProjectCard 
                classProp='ProjectCard FirstCard'
                id="FirstCard"
                title = "Invaders Takeover"
                techStack =  "TypeScript, PIXI"
                aboutText = "Casino slots game developed at Light & Wonder using an internally developed PIXI.js based framework. I developed the planet selector transition, implemented bug fixes and various elements across UI, sound and animation."
                buttonInfo={cardButtonSettings.projectOne}
            />
            <ProjectCard 
                classProp="ProjectCard SecondCard"
                id="SecondCard"
                title="Redule"
                techStack =  "TypeScript, NodeJS, ElectronJS, Webpack, Snoowrap Reddit API"
                aboutText = "ElectronJS desktop app that uses the reddit API to schedule posts and publish them using node-cron."
                buttonInfo={cardButtonSettings.projectTwo}
            />
            <ProjectCard 
                classProp="ProjectCard ThirdCard"
                id="ThirdCard"
                title="Sympl"
                techStack =  "TypeScript"
                aboutText = "A basic modular component based library for builing web pages. Uses a view controller to switch between pages, and a re-usable component design."
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
    )
}

export default Projects;