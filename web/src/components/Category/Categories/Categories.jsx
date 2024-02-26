import { Link } from '@redwoodjs/router'

const CategoryList = ({ categories }) => {
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
        {categories.map((category) => {
          return (
            <div key={category.id}>
              <Link to={`/services/${category.photo}`}>
                <img style={{ marginBottom: 15 }} src={category.photo} alt="" />
                <p
                  style={{
                    fontSize: 30,
                    fontWeight: 400,
                    fontFamily: '"EB Garamond", serif',
                  }}
                >
                  {category.name}
                </p>
              </Link>
            </div>
          )
        })}
        {/* {categories.map((category) => (
          <div key={category.id}>
            <Link to={`/services/${category.photo}`}>
              <img
                style={{ marginBottom: 15 }}
                src={require('public/assets/categories/cosmetology.png')}
                alt=""
              />
              <p
                style={{
                  fontSize: 30,
                  fontWeight: 400,
                  fontFamily: '"EB Garamond", serif',
                }}
              >
                {category.name}
              </p>
            </Link>
          </div>
        ))} */}
      </div>
    </>
  )
}
export default CategoryList
