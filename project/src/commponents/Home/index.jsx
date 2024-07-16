import LogoTitle from '../../assets/images/logo-s.png'
import {Link} from 'react-router-dom'
import './index.scss'

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm
                John 
                <br />
                Software enginer
                </h1>
                <h2>Passionate about creating things that live on the internet.</h2>    
                <Link to="/contact" classNam='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home 