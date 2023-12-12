import './styles/About.css';

function About(): React.JSX.Element
{
    return (
        <div className="AboutSection">
            <div className="AboutImage">
                <h1>IMAGE</h1>
            </div>
            <div className="AboutText">
                <p className="About">
                    Some generic text for now, will need to be filled with
                    actual information abou me, but for now I'm just going
                    to type in some random gibberish to fill the space. 
                    That in itself is quite fun, but is entirely worthless ultimately.
                </p>
                <button>
                    Click For More!
                </button>
            </div>
        </div>
    );  
}

export default About;