import './index.scss'
import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
  } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const About = () =>{
    return(
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    About
                </h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium cum repudiandae 
                    ducimus qui consequuntur. Asperiores ipsam at error cum ipsum facilis consequatur doloremque aliquid voluptatem, beatae animi eveniet dolorum ducimus.
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium cum repudiandae 
                    ducimus qui consequuntur. Asperiores ipsam at error cum ipsum facilis consequatur doloremque aliquid voluptatem, beatae animi eveniet dolorum ducimus.
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium cum repudiandae 
                    ducimus qui consequuntur. Asperiores ipsam at error cum ipsum facilis consequatur doloremque aliquid voluptatem, beatae animi eveniet dolorum ducimus.
                </p>
            </div>
            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default About;