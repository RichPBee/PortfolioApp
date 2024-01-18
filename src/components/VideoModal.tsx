import './styles/VideoModal.css'
import {IoClose} from 'react-icons/io5';
import video from '../../assets/LauncherTool_Compresed.mp4'

interface IModalProps {
    toggleModal(toggle: boolean): void
}

function VideoModal({toggleModal} : IModalProps) {

    return(
        <div className="modalBG">
            <IoClose size={45} onClick={() => { toggleModal(false) }} style={{color: "white"}}/>
            <video width="100%" preload='true' autoPlay muted controls controlsList='nodownload'>
                <source src={video} type='video/mp4'/>
            </video>
        </div>
    )
};

export default VideoModal;