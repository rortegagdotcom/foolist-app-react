import React from 'react';
import { useNavigate } from 'react-router-dom';
import useSound from 'use-sound';

import FoolistButton from '../Buttons/FoolistButton';
import './Navbar.css';

import icons from '../../assets/img/icons';

import popSFX from '../Buttons/pop.mp3';

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
