/* eslint-disable no-unused-vars */
import background from 'public/assets/background.png'
import { Typography } from 'antd';

import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import styles from './homePage.module.css'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />
      <img className={styles.background} src={background} alt="background" />
      <div style={{ marginTop: 250 }}></div>
      <h1 className={styles.title}>Салон красоты</h1>
      <h1 className={styles.title}>«Delote-Beauty»</h1>
      <h1 className={styles.title}>на Крестовском</h1>
    </>
  )
}

export default HomePage
