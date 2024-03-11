import { Spin } from 'antd'

import Masters from 'src/components/Master/Masters'

export const QUERY = gql`
  query FindMasters {
    masters {
      id
      firstName
      secondName
      photo
      specialization {
        name
      }
    }
  }
`

export const Loading = () => <Spin />

export const Empty = () => <div>Мастеров пока нет...</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ masters }) => {
  return <Masters masters={masters} />
}
