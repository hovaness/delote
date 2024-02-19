import instagram from 'public/assets/inst.svg'
import logo from 'public/assets/logo.svg'
import menu from 'public/assets/menu.svg'

import { Link, routes } from '@redwoodjs/router'

import styles from './header.module.css'

const Header = () => {
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
          <img alt="asd" src={logo} />
          <Link className={styles.liElem} to={routes.price()}>
            Цены
          </Link>
          <Link className={styles.liElem} to={routes.contacts()}>
            Контакты
          </Link>
        </div>
        <img src={menu} alt="menu" />
      </div>
    </>
  )
}

export default Header
