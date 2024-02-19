import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header/Header'

import styles from './appLayout.module.css'

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.layout}>{children}</div>
      <Footer />
    </>
  )
}

export default AppLayout
