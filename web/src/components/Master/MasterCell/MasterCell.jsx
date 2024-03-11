export const QUERY = gql`
  query FindMasterById($id: Int!) {
    master: master(id: $id) {
      id
      firstName
      secondName
      specialization {
        name
      }
      photo
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Post not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ master }) => {
  return (
    <>
      <img src={master.photo} alt="master" />
      <h1>
        {master.firstName} {master.secondName}
      </h1>
    </>
  )
}
