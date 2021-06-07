import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { useState } from 'react';
import '../css/Navbar.css';

export const Navbar = () => {
  
  const [click, setClick] = useState(false);

  return (
    <nav className='navbar'>
      <div className="brand-container">
        <span className="brand-title">ANIMU</span>
      </div>
      <ul className={`navbar-nav ${click ? 'navbar-active':''}`}> {
          Button.map((items, index) => (
            <li className="nav-items">
              <Link className="nav-links" to={items.path}>{items.name}</Link>
            </li>
          ))}
      </ul>
      <span className='burger-menu'><span onClick={() => setClick(!click)}>{click ? <FaIcons.FaTimes /> : <FaIcons.FaBars />}</span></span>
    </nav>
  )
}

