import { FC } from 'react';
import { ActiveLink } from './ActiveLink';
import styles from './Navbar.module.css';

interface IMenuItems {
  text:string,
  href:string
}

const menuItems:IMenuItems[] = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const Navbar:FC = () => {
  return (
    <nav className={ styles['menu-container'] }>
        {
          menuItems.map( ({ text, href }) => (
            <ActiveLink key={ href } text={ text } href={ href } />    
          ))

          }
    </nav>
  );
};
