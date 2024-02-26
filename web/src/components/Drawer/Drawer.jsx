import { useState } from 'react'

import { Avatar, Drawer } from 'antd'
import closeIcon from 'public/assets/close-icon.svg'
import loginIcon from 'public/assets/login.svg'
import logo from 'public/assets/logo.svg'
import logoutIcon from 'public/assets/logout.svg'
import phoneIcon from 'public/assets/phone.svg'
import readMore from 'public/assets/read_more.svg'
import timeIcon from 'public/assets/time.svg'

import styles from './drawer.module.css'

const NavDrawer = ({ open, onClose }) => {
  const [auth, setAuth] = useState(false)
  const name = 'Ararat'
  const surname = 'Hovanesyan'
  const data = [
    {
      service: 'Стрижка волос',
      time: '12.01.24г (16.00)',
    },
    {
      service: 'Выпрямление ногтей',
      time: '12.01.24г (16.00)',
    },
    {
      service: 'Ламинация рук',
      time: '12.01.24г (16.00)',
    },
  ]
  return (
    <Drawer
      closeIcon={null}
      style={{ background: '#111' }}
      width={475}
      open={open}
      onClose={onClose}
    >
      <div className={styles.container}>
        <div className={styles.nav}>
          <img onClick={onClose} src={closeIcon} alt="close" />
          <div onClick={() => setAuth((prev) => !prev)} className={styles.log}>
            <p>{auth ? 'Выйти' : 'Войти'}</p>
            <img src={auth ? logoutIcon : loginIcon} alt="" />
          </div>
        </div>

        <img
          style={{ margin: 'auto', marginBottom: 85 }}
          src={logo}
          alt="logo"
        />

        {auth ? (
          <>
            <div className={styles.profile}>
              <Avatar
                style={{ backgroundColor: 'white', color: 'black' }}
                size={80}
                icon={name.charAt(0) + surname.charAt(0)}
              />
              <div className={styles.name}>
                <h1>{name + ' ' + surname}</h1>
                <p>nameemail@mail.ru</p>
              </div>
            </div>
            <h1 style={{ marginBottom: 30, textAlign: 'left' }}>Записи</h1>
            {data.map((item) => (
              <div key={item.service} className={styles.record}>
                <div style={{ width: 250 }}>
                  <p>Время: {item.time}</p>
                  <p>Услуга: {item.service}</p>
                </div>
                <img src={readMore} alt="readMore" />
              </div>
            ))}
          </>
        ) : (
          <>
            <h1>Ждем Вас в нашем салоне Delote-Beauty!</h1>
            <p className={styles.desc}>
              Вы не вошли в аккаунт, после авторизации/регистрации здесь будет
              информация о ваших записях
            </p>
            <div className={styles.content}>
              <div className={styles.contentTitle}>
                <img src={phoneIcon} alt="phone" />
                <h1>Контакты</h1>
              </div>
              <p>+7 (812) 123-45-67</p>
              <p>Новоостровский проспект, дом 36 лит. С</p>
            </div>
            <div className={styles.content}>
              <div className={styles.contentTitle}>
                <img src={timeIcon} alt="time" />
                <h1>Режим работы</h1>
              </div>
              <p>C 10:00 до 21:00 (Пн-Пт)</p>
            </div>
          </>
        )}
      </div>
    </Drawer>
  )
}

export default NavDrawer
