import { Drawer } from 'antd'
import closeIcon from 'public/assets/close-icon.svg'
import styles from './drawer.module.css'

const NavDrawer = ({ open, onClose }) => {
  return (
    <Drawer
      closeIcon={null}
      style={{ background: '#111' }}
      width={475}
      open={open}
      onClose={onClose}
    >
      <div className={styles.container}>
        <img
          style={{ marginBottom: 150 }}
          onClick={onClose}
          src={closeIcon}
          alt="close"
        />
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum,
          adipiscing amet in egestas sem dui, arcu faucibus scelerisque. Nisl
          est felis id volutpat. Sed dolor fermentum amet lectus nibh quis.
          Tortor donec pellentesque leo ac placerat. Morbi.
        </p>
        <div className={styles.content}>
          <h1>Контакты</h1>
          <p>+7 (812) 123-45-67</p>
          <p>+7 (812) 123-45-67</p>
          <p>Новоостровский проспект, дом 36 лит. С</p>
        </div>
        <div className={styles.content}>
          <h1>Режим работы</h1>
          <p>C 10:00 до 21:00 (Пн-Пт)</p>
          <p>С 11:00 до 20:00 (Сб-Вс)</p>
        </div>
      </div>
    </Drawer>
  )
}

export default NavDrawer
