import './styles/Projects.css'

function Projects(): React.JSX.Element
{
    return (
        <div className="ProjectsSection">
            <div className="ProjectCard FirstCard">
                <div className="willBeImage">
                    <h1>Project</h1>
                </div>
                <div className="CardButtons">
                    <button>
                        Live Demo
                    </button>
                    <button>
                        Source Code 
                    </button>
                    <button>
                        More Info
                    </button>
                </div>
            </div>
            <div className="ProjectCard SecondCard">
                <div className="willBeImage">
                    <h1>Project</h1>
                </div>
                <div className="CardButtons">
                    <button>
                        Live Demo
                    </button>
                    <button>
                        Source Code 
                    </button>
                    <button>
                        More Info
                    </button>
                </div>
            </div>
            <div className="ProjectCard ThirdCard">
                <div className="willBeImage">
                    <h1>Project</h1>
                </div>
                <div className="CardButtons">
                    <button>
                        Live Demo
                    </button>
                    <button>
                        Source Code 
                    </button>
                    <button>
                        More Info
                    </button>
                </div>
            </div>
            <div className="ProjectCard FourthCard">
                <div className="willBeImage">
                    <h1>Project</h1>
                </div>
                <div className="CardButtons">
                    <button>
                        Live Demo
                    </button>
                    <button>
                        Source Code 
                    </button>
                    <button>
                        More Info
                    </button>
                </div>
            </div>
            <div className="ProjectCard FifthCard">
            <h1>This Website</h1>
            <div className="CardButtons">
                    <button>
                        Source Code 
                    </button>
                    <button>
                        More Info
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Projects;