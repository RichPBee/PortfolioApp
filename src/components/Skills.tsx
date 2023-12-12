import './styles/Skills.css';

function Skills(): React.JSX.Element
{
    return (
        <div className="SkillsSection">
            <div className='Subcategories'>
                <h3>
                    Technical Skills
                </h3>
                <h3>
                    Other Skills
                </h3>
            </div>
            <div className="SkillCards">
                <div className="SkillCard">
                    <h4>
                        Languages & Frameworks
                    </h4>
                    <ul>
                        <li>
                            JavaScript
                        </li>
                        <li>
                            TypeScript
                        </li>
                        <li>
                            HTML
                        </li>
                        <li>
                            CSS
                        </li>
                        <li>
                            Python
                        </li>
                        <li>
                            C#
                        </li>
                        <li>
                            JSON
                        </li>
                        <li>
                            React
                        </li>
                    </ul>
                </div>
                <div className="SkillCard">
                    <h4>
                        Tools
                    </h4>
                    <ul>
                        <li>
                            Git
                        </li>
                        <li>
                            Gulp
                        </li>
                        <li>
                            Babel
                        </li>
                        <li>
                            Webpack
                        </li>
                        <li>
                            Unity
                        </li>
                        <li>
                            Jenkins
                        </li>
                        <li>
                            Jira
                        </li>
                    </ul>
                </div>
                <div className="SkillCard">
                    <h4>
                        Software
                    </h4>
                    <ul>
                        <li>
                            Photoshop
                        </li>
                        <li>
                            After Effects
                        </li>
                        <li>
                            DaVinci Resolve
                        </li>
                        <li>
                            SAP ERP
                        </li>
                        <li>
                            OriginLab
                        </li>
                        <li>
                            Illustrator
                        </li>
                        <li>
                            VSCode
                        </li>
                    </ul>
                </div>
                <div className="SkillCard">
                    <h4>
                        Academic
                    </h4>
                    <ul>
                        <li>
                            Linear Algebra
                        </li>
                        <li>
                            Calculus
                        </li>
                        <li>
                            Multivariable Calculus
                        </li>
                        <li>
                            Geometry
                        </li>
                        <li>
                            Mathematical Analysis
                        </li>
                        <li>
                            Probability
                        </li>
                        <li>
                            Classical Mechanics
                        </li>
                        <li>
                            Data Analysis
                        </li>
                        <li>
                            Technical Writing
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills;