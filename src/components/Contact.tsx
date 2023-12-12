import './styles/Contact.css';

function Contact(): React.JSX.Element
{
    return (
   <div className="ContactSection" id="Contact">
        <form action="POST" className="ContactForm">
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
            <input type="text" />
            <button>
                Submit
            </button>
        </form>
   </div>
    );
}

export default Contact;