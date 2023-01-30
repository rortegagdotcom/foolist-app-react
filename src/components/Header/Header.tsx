import { Link } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';

import images from '../../assets/img/images';

import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={images[0].img} alt={images[0].alt} width={400} />
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;
