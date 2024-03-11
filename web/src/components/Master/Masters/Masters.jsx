import { Link } from '@redwoodjs/router'

import styles from 'src/pages/MastersPage/mastersPage.module.css'

const MasterList = ({ masters }) => {
  console.log(masters)
  return (
    <>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          columnGap: 24,
          rowGap: 60,
        }}
      >
        {masters.map((master) => {
          return (
            <div key={master.id}>
              <Link to={`/masters/${master.id}`}>
                <img
                  className={styles.image}
                  style={{ marginBottom: 15 }}
                  src={master.photo}
                  alt=""
                />
                <p
                  style={{
                    fontSize: 30,
                    fontWeight: 400,
                    fontFamily: '"EB Garamond", serif',
                  }}
                >
                  {master.firstName} {master.secondName}
                </p>
                <p>{master.specialization.name}</p>
              </Link>
            </div>
          )
        })}
      </div>
    </>
  )
}
export default MasterList
