import { Drawer } from 'antd'

import { Toaster } from '@redwoodjs/web/toast'

import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header/Header'

import styles from './appLayout.module.css'

const AppLayout = ({ children }) => {
  return (
    <>
      <Toaster />
      <Header />
      <div className={styles.layout}>{children}</div>
      <Footer />
    </>
  )
}

export default AppLayout
