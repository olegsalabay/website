import React from 'react'
import './header.scss'
import Toolbar from '../toolbar';
import { Link } from 'react-router-dom';

interface HeaderDataProps {
  title: string;
}

const headerData: HeaderDataProps = {
  title: 'website'
}

const Header: React.FC = () => {
  return (
    <header className='header'>
      <h1 className='header__title'>{headerData.title}</h1>
      <ul>
        <li>
          <Link to='/main'>Main</Link>
        </li>
        <li>
          <Link to='/test'>test</Link>
        </li>
        <li>
          <Link to='/login'>login</Link>
        </li>
        <li>
          <Link to='/register'>register</Link>
        </li>
        <li>
          <Link to='/home'>home</Link>
        </li>
      </ul>
      <Toolbar />
    </header>
  )
}

export default Header