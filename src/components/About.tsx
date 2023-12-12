import './styles/About.css';

function About(): React.JSX.Element
{
    return (
        <div className="AboutSection PageSection" id="About">
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
                    Read My Bio
                </button>
            </div>
        </div>
    );  
}

export default About;