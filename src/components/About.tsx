import './styles/About.css';

function About(): React.JSX.Element
{
    return (
        <div className="AboutSection PageSection" id="About">
            <div className="AboutText">
                <div className="About">
                    <p>
                        In my current role, I develop the client side of casino games at a major iGaming company, Light & Wonder.
                        Using an in-house TypeScript framework built on PIXI.js, I help to bring games to life by implementing
                        exciting features, sounds, art and animations. <br/>
                        I have also worked on a number of tools for streamlining processes, during hackathons and other
                        down-time, taking these opportunities to make use of new relevant technologies, such as using ElectronJS
                        to create a local game server launcher and initial game setup helper.
                    </p>
                    <p >
                        Outside of work, I'm always trying to learn new things, including expanding my knowledge of programming and computer science,
                        be it from reading or gettting my hands dirty and making something new. My hobbies include
                        music, writing and gaming, and sometimes looking for ways to bring all of them together at once. <br/>
                        I love challenges, and I never shy away from difficult tasks. My background in physics helped me to develop strong
                        logical and mathematical ability, which I try my best to employ in my work.
                    </p>
                </div>
            </div>
        </div>
    );  
}

export default About;