import instagram from 'public/assets/inst.svg'
import logo from 'public/assets/logo.svg'

import styles from './footer.module.css'

const Footer = () => {
  return (
    <>
      <div className={styles.content}>
        <img src={logo} alt="logo" />
        <div className={styles.elem}>
          <h1>Контакты</h1>
          <p>+7 (812) 123-45-67</p>
          <p>+7 (911) 123-45-67</p>
          <p>Новоостровский проспект, дом 36 лит. С</p>
        </div>
        <div className={styles.elem}>
          <h1>Режим работы</h1>
          <p>C 10:00 до 21:00 (Пн-Пт)</p>
          <p>С 11:00 до 20:00 (Сб-Вс)</p>
        </div>
        <img src={instagram} alt="inst" style={{ width: 36, height: 36 }} />
      </div>
      <p className={styles.copyright}>Copyright © 2017 - 2024</p>
    </>
  )
}

export default Footer
