import './styles/Contact.css';

function Contact(): React.JSX.Element
{
    return (
    <div className="ContactSection PageSection" id="Contact">
        <h1>
            Contact Me!
        </h1>
        <form action="POST" className="ContactForm">
            <input type="text" name="messageTitle" id="" />
            <input type="text" name="email" id="" />
            <input type="text" name="message" />
            <button>
                Submit
            </button>
        </form>
    </div>
    );
}

export default Contact;