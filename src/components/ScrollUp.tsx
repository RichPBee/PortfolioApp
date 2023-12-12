import { FaArrowAltCircleUp } from "react-icons/fa";

function ScrollUp()
{
    const handleScrollUp = () => { 
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (
        <div className="ScrollToTop">
            <a href="" onClick={handleScrollUp}>
                <FaArrowAltCircleUp size={40}/>
            </a>
        </div>
    )
}

export default ScrollUp;