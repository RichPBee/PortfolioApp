import ProjectCard from './ProjectCard';
import { cardButtonSettings } from '../settings/ProjectCard';
import './styles/Projects.css'

function Projects(): React.JSX.Element
{

    return (
        <div className="ProjectsSection" id="Projects">
            <ProjectCard 
                classProp='ProjectCard FirstCard'
                title = "Project One"
                buttonInfo={cardButtonSettings.projectOne}
            />
            <ProjectCard 
                classProp="ProjectCard SecondCard"
                title="Project Two"
                buttonInfo={cardButtonSettings.projectTwo}
            />
            <ProjectCard 
                classProp="ProjectCard ThirdCard"
                title="Project Three"
                buttonInfo={cardButtonSettings.projectThree}
            />
            <ProjectCard 
                classProp="ProjectCard FourthCard"
                title="Project Four"
                buttonInfo={cardButtonSettings.projectFour}
            />
            <ProjectCard 
                classProp="ProjectCard FifthCard"
                title="This Website"
                buttonInfo={cardButtonSettings.projectFive}
            />
        </div>
    )
}

export default Projects;