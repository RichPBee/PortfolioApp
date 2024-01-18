
interface IProjectCardProps {
    classProp: string;
    id: string;
    title: string;
    techStack: string;
    aboutText?: string;
    buttonInfo: 
    {
        text: string, 
        url: string
    }[];
    toggleModal?(toggle: boolean, url: string): void;
}

function ProjectCard({classProp, title, techStack, aboutText, buttonInfo, toggleModal}: IProjectCardProps) 
{

    const buttonClick = (url: string) => { 
        if (toggleModal)
        {
            toggleModal(true, url);
            return;
        }
        window.open(url, '_blank');
    };
    
    const createButtons = buttonInfo.map((info, index) => <button className={`button-${index}`} key={info.text+'-'+index}onClick={() => buttonClick(info.url)}>{info.text}</button>)

    return (
        <>
        <div className={classProp}>
                <div className="ProjectCardBackground">
                    <div className="TextBackground">
                        <div className="CardText">
                            <h1>{title}</h1>
                            <h3 className="projectTech">Tech: {techStack}</h3>
                            {aboutText && <h4 className="projectDescription">{aboutText}</h4>}
                        </div>
                        <div className="CardButtons">
                        {createButtons}
                        </div>
                    </div>
                </div>  
        </div>
        </>
    );
}

export default ProjectCard