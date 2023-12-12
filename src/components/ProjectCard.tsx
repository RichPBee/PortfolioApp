interface IProjectCardProps {
    classProp: string;
    id: string;
    title: string;
    buttonInfo: 
    {
        text: string, 
        url: string
    }[];

}

function ProjectCard({classProp, id, title, buttonInfo}: IProjectCardProps) 
{

    const buttonClick = (url: string) => { 
        window.open(url, '_blank');
    }
    const createButtons = buttonInfo.map((info, index) => <button className={`button-${index}`} key={info.text+'-'+index}onClick={() => buttonClick(info.url)}>{info.text}</button>)

    return (
        <div className={classProp}>
            <div className="ProjectCardBackground" id={id}>
                <h1>{title}</h1>
                <div className="CardButtons">
                    {createButtons}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard