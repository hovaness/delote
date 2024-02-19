import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const PricePage = () => {
  return (
    <>
      <Metadata title="Price" description="Price page" />

      <h1>PricePage</h1>
      <p>
        Find me in <code>./web/src/pages/PricePage/PricePage.jsx</code>
      </p>
      <p>
        My default route is named <code>price</code>, link to me with `
        <Link to={routes.price()}>Price</Link>`
      </p>
    </>
  )
}

export default PricePage
