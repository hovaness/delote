import instagram from 'public/assets/inst.svg'
import logo from 'public/assets/logo.svg'
import menu from 'public/assets/menu.svg'

import { Link, routes } from '@redwoodjs/router'

import styles from './header.module.css'
import { useState } from 'react'
import NavDrawer from '../Drawer/Drawer'

const Header = () => {
  const [open,setOpen] = useState(false);

  function showDrawer(){
    console.log(open)
    setOpen(true);
  };

  function onClose(){
    setOpen(false);
  };

  return (
    <>
      <div className={styles.content}>
        <img src={instagram} alt="inst" />
        <div className={styles.nav}>
          <Link className={styles.liElem} to={routes.home()}>
            Главная
          </Link>
          <Link className={styles.liElem} to={routes.masters()}>
            Мастера
          </Link>
          <Link to={routes.home()}>
            <img alt="asd" src={logo} />
          </Link>
          <Link className={styles.liElem} to={routes.price()}>
            Цены
          </Link>
          <Link className={styles.liElem} to={routes.contacts()}>
            Контакты
          </Link>
        </div>
        <img onClick={showDrawer} src={menu} alt="menu" />
        <NavDrawer open={open} onClose={onClose}/>
      </div>
    </>
  )
}

export default Header
