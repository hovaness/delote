import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const ContactsPage = () => {
  return (
    <>
      <Metadata title="Contacts" description="Contacts page" />

      <h1>ContactsPage</h1>
      <p>
        Find me in <code>./web/src/pages/ContactsPage/ContactsPage.jsx</code>
      </p>
      <p>
        My default route is named <code>contacts</code>, link to me with `
        <Link to={routes.contacts()}>Contacts</Link>`
      </p>
    </>
  )
}

export default ContactsPage
