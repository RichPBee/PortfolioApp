import ProjectCard from './ProjectCard';
import './styles/Projects.css'

function Projects(): React.JSX.Element
{
    const projOneBtns = [
        {
            text: 'Live Demo',
            url: 'https://www.Github.com/RichPBee'
        },
        {
            text: 'Source Code',
            url: 'google.com'
        },
        {
            text: 'More Info',
            url: ''
        }
    ]

    const projTwoBtns = [
        {
            text: 'Live Demo',
            url: 'https://www.Github.com/RichPBee'
        },
        {
            text: 'Source Code',
            url: 'google.com'
        },
        {
            text: 'More Info',
            url: ''
        }
    ]

    const projThreeBtns = [
        {
            text: 'Live Demo',
            url: 'https://www.Github.com/RichPBee'
        },
        {
            text: 'Source Code',
            url: 'google.com'
        },
        {
            text: 'More Info',
            url: ''
        }
    ]

    const projFourBtns = [
        {
            text: 'Live Demo',
            url: 'https://www.Github.com/RichPBee'
        },
        {
            text: 'Source Code',
            url: 'google.com'
        },
        {
            text: 'More Info',
            url: ''
        }
    ]

    const projFiveBtns = [
        {
            text: 'Source Code',
            url: 'google.com'
        },
        {
            text: 'More Info',
            url: ''
        }
    ]

    return (
        <div className="ProjectsSection">
            <ProjectCard 
                classProp='ProjectCard FirstCard'
                title = "Project One"
                buttonInfo={projOneBtns}
            />
            <ProjectCard 
                classProp="ProjectCard SecondCard"
                title="Project Two"
                buttonInfo={projTwoBtns}
            />
            <ProjectCard 
                classProp="ProjectCard ThirdCard"
                title="Project Three"
                buttonInfo={projThreeBtns}
            />
            <ProjectCard 
                classProp="ProjectCard FourthCard"
                title="Project Four"
                buttonInfo={projFourBtns}
            />
            <ProjectCard 
                classProp="ProjectCard FifthCard"
                title="This Website"
                buttonInfo={projFiveBtns}
            />
        </div>
    )
}

export default Projects;