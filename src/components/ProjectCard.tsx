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

function ProjectCard({classProp, title, buttonInfo}: IProjectCardProps) 
{

    const buttonClick = (url: string) => { 
        window.open(url, '_blank');
    }
    const createButtons = buttonInfo.map((info, index) => <button className={`button-${index}`} key={info.text+'-'+index}onClick={() => buttonClick(info.url)}>{info.text}</button>)

    return (
        <div className={classProp}>
                <div className="ProjectCardBackground">
                    <div className="CardText">
                        <h1>{title}</h1>
                        <h3>Tech used</h3>
                        <h4>Text about</h4>
                    </div>
                </div>
                <div className="CardButtons">
                    {createButtons}
                </div>
        </div>
    );
}

export default ProjectCard