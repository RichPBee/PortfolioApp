import './styles/About.css';

function About(): React.JSX.Element
{
    return (
        <div className="AboutSection PageSection" id="About">
            <div className="AboutText">
                <div className="About">
                    <p>
                        In my current role, I develop the client side of casino games at a major iGaming company, Light & Wonder.
                        Using an in-house TypeScript framework built on PIXI.js, I bring these games to life, implementing
                        exciting features, sounds, art and animations. <br/>
                        I have also worked on a number of tools for streamlining processes, such as using ElectronJS
                        to create a local game server launcher and initial game setup helper.
                        While most of my experience lies in the front end, I have developed some back end functionality for various
                        personal and workplace projects, and I relish any ability to learn more about other areas.
                    </p>
                    <p >
                        Outside of work, I'm constantly learning, be it from reading or gettting my hands dirty and making something new. 
                        My hobbies include music, writing, gaming and programming and occasionally looking for ways to bring them all together 
                        at once.<br/>
                        I love challenges and puzzles, and I never shy away from difficult tasks. My background in physics helped me to develop strong
                        logical ability and a deep understanding of mathematics.
                    </p>
                </div>
            </div>
        </div>
    );  
}

export default About;