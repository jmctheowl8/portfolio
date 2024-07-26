import TextSection from './TextSection'
import TextSphere from './TextSphere';
import "./index.scss";

const Skills = () => {

  return (
        <div className="container skills-page">
            <div className="text-section">
                <TextSection />
            </div>
            <div className='text-sphere-container'>
                <TextSphere />
            </div>
        </div>
    );
};

export default Skills;