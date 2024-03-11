import { Metadata } from '@redwoodjs/web'

import MasterCell from 'src/components/Master/MasterCell/MasterCell'

const MasterPage = ({ id }) => {
  return (
    <>
      <Metadata title="Master" description="Master page" />
      <MasterCell id={id} />
    </>
  )
}

export default MasterPage
