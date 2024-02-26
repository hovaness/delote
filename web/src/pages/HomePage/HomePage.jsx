/* eslint-disable no-unused-vars */
import { Image } from 'antd'
import background from 'public/assets/background.png'
import mouse from 'public/assets/mouse.svg'
import paragraph from 'public/assets/par.svg'

import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import CategoryCell from 'src/components/Category/CategoriesCell/CategoriesCell'

import styles from './homePage.module.css'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />
      <img className={styles.background} src={background} alt="background" />
      <div style={{ marginTop: 200 }}></div>
      <h1 className={styles.title}>Салон красоты</h1>
      <h1 className={styles.title}>«Delote-Beauty»</h1>
      <h1 className={styles.title}>на Крестовском</h1>

      <div className={styles.scroll}>
        <img src={mouse} alt="mouseDown" />
        <p>Прокрутите вниз</p>
      </div>

      <img src={paragraph} alt="" />
      <div className={styles.descConteiner}>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu nibh
          vitae amet. Ipsum, pharetra donec ornare velit. Id at quisque accumsan
          risus ac ipsum ut. Sit elit, facilisi proin non malesuada sociis
          tristique. Viverra augue lorem ut quisque quam tortor, malesuada
          iaculis.
        </p>
        <p className={styles.desc}>
          Et elementum at nulla venenatis, faucibus integer. Auctor neque eros,
          viverra rutrum. Fames ultrices condimentum tortor nec penatibus. Velit
          imperdiet sapien fringilla vestibulum sit fames.
        </p>
      </div>
      <CategoryCell />
      <img
        alt=""
        src="https://pixso.net/app/editor/OG4auNVv8l9H2xco8mG9Zw?icon_type=1&page-id=0%3A1&item-id=18%3A131"
      />
    </>
  )
}

export default HomePage
