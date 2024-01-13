import ListCard from './ListCard';
import './styles/Skills.css';

function Skills(): React.JSX.Element
{
    const languages = ["JavaScript", "TypeScript", "HTML", "CSS", "Python", "NodeJS", "React", "JSON"];
    const toolList = ["Git", "Gulp", "Babel", "Webpack", "Unity", "Jenkins", "Jira"];
    const softwareList = ["Photoshop", "After Effects", "Resolve", "SAP ERP", "OriginLab", "Illustrator", "VSCode"];
    const academics = ["Linear Algebra", "Calculus", "Geometry", "Probability", "Classical Mechanics", "Data Analysis", "Technical Writing"];
    
    return (
        <div className="SkillsSection PageSection" id="Skills">
            <div className='Subcategories'>
                <h3>
                    Technical Skills
                </h3>
                <div className="SkillCards">
                    <ListCard
                        classProp="SkillCard"
                        title = "Languages & Frameworks"
                        list = {languages}
                    />
                    <ListCard
                        classProp="SkillCard"
                        title = "Tools"
                        list = {toolList}
                    />
                </div>
            </div>
            <div className="Subcategories">
                <h3>
                    Other Skills
                </h3>
                <div className="SkillCards">
                    <ListCard 
                        classProp="SkillCard"
                        title = "Software"
                        list = {softwareList}
                    />
                    <ListCard 
                        classProp="SkillCard"
                        title = "Academic"
                        list = {academics}
                    />
                </div>
            </div>
        </div>
    )
}

export default Skills;