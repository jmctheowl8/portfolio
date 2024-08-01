import Logo from './Logo'
import {Link} from 'react-router-dom'
import './index.scss'

const Home = () => {
    return (
        <div className="container home-page">
          <div className="content-zone">
            <div className="text-zone">
              <h1>Hi,<br /> my name is <br /> John Micheal Cabrera <br /> Software engineer</h1>
              <h2>Passionate about creating things that live on the internet.</h2>
              <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <div className="logo-zone">
              <Logo />
            </div>
          </div>
        </div>
      )
}

export default Home 