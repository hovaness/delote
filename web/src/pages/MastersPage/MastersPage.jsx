import { Metadata } from '@redwoodjs/web'

import MastersCell from 'src/components/Master/MastersCell/MastersCell'
import styles from 'src/pages/MastersPage/mastersPage.module.css'

const MastersPage = () => {
  return (
    <>
      <Metadata title="Masters" description="Masters page" />

      <h1 className={styles.title}>Наши мастера</h1>
      <MastersCell />
    </>
  )
}

export default MastersPage
