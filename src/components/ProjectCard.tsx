interface IProjectCardProps {
    classProp: string;
    title: string;
    buttonInfo: 
    {
        text: string, 
        url: string
    }[];

}

function ProjectCard({classProp, title, buttonInfo}: IProjectCardProps) 
{

    const buttonClick = (url: string) => { 
        window.open(url, '_blank');
    }
    const createButtons = buttonInfo.map((info, index) => <button key={info.text+'-'+index}onClick={() => buttonClick(info.url)}>{info.text}</button>)

    return (
        <div className={classProp}>
            <div className="ProjectCardBackground">
                <h1>{title}</h1>
                <div className="CardButtons">
                    {createButtons}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard