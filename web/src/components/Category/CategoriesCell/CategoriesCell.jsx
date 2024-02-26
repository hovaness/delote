import { Spin } from 'antd'

import Categories from 'src/components/Category/Categories'

export const QUERY = gql`
  query FindCategories {
    categories {
      id
      name
      photo
    }
  }
`

export const Loading = () => <Spin />

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Ошибка: {error?.message}</div>
)

export const Success = ({ categories }) => {
  return <Categories categories={categories} />
}
