import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const MastersPage = () => {
  return (
    <>
      <Metadata title="Masters" description="Masters page" />

      <h1>MastersPage</h1>
      <p>
        Find me in <code>./web/src/pages/MastersPage/MastersPage.jsx</code>
      </p>
      <p>
        My default route is named <code>masters</code>, link to me with `
        <Link to={routes.masters()}>Masters</Link>`
      </p>
    </>
  )
}

export default MastersPage
