import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <nav>
    <div className="logo-card">
      <div className="image-text-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="logo-style"
        />

        <h1 className="heading-style">Wave</h1>
      </div>
      <ul className="options-card">
        <li>
          <Link to="/" className="link-style">
            <h1 className="heading-style">Home</h1>
          </Link>
        </li>
        <li>
          <Link to="/about" className="link-style">
            <h1 className="heading-style">About</h1>
          </Link>
        </li>
        <li>
          <Link to="/contact" className="link-style">
            <h1 className="heading-style">Contact</h1>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
