import { FaArrowAltCircleUp } from "react-icons/fa";

function ScrollUp()
{
    const handleScrollUp = () => { 
        window.scrollTo({top: 0, behavior: "smooth"});
    }

    return (
        <div className="ScrollToTop">
            <a onClick={handleScrollUp}>
                <FaArrowAltCircleUp size={40} color="black"/>
            </a>
        </div>
    );
}

export default ScrollUp;