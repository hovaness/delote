import { useState, useEffect } from 'react'

import instagram from 'public/assets/inst.svg'
import logo from 'public/assets/logo.svg'
import menu from 'public/assets/menu.svg'

import { Link, routes } from '@redwoodjs/router'

import NavDrawer from '../Drawer/Drawer'

import styles from './header.module.css'

const Header = () => {
  const [open, setOpen] = useState(false)
  const [scrollTop, setScrollTop] = useState(0)

  useEffect(() => {
    function handleScroll() {
      setScrollTop(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function showDrawer() {
    setOpen(true)
  }

  function onClose() {
    setOpen(false)
  }

  return (
    <>
      <div
        className={scrollTop > 300 ? styles.contentScrolled : styles.content}
      >
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
        <NavDrawer open={open} onClose={onClose} />
      </div>
    </>
  )
}

export default Header
