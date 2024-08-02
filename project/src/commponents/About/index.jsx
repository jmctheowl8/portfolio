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
                Hi, my name is John MIchael Cabrera, a passionate aspiring Software Engineer. What motivates me is the creativity and problem solving that's involved with working on projects. There's a feeling that you get when finishing a project. A sense of excitement knowing that you achieved something that not just anybody can do. I recently  graduated with a Bachelor's degree in Computer Science from lehman college
                    where I developed the tools needed to work on projects. In a field that's ever evolving I love to learn new things

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