import { useNavigate } from 'react-router-dom';
import useSound from 'use-sound';

import FoolistButton from '../Buttons/FoolistButton';

import icons from '../../assets/img/icons';
import popSFX from '../../assets/sounds/pop.mp3';

import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [play] = useSound(popSFX);

  const routeNewTask = () => {
    play();
    navigate('/new_task');
  };

  return (
    <nav className="navbar">
      <FoolistButton onClick={routeNewTask}>
        <img src={icons[0].img} alt={icons[0].alt} width={24} />
      </FoolistButton>
    </nav>
  );
};

export default Navbar;
