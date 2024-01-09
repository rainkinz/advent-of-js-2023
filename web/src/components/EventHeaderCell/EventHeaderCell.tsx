import type {
  FindEventHeaderQuery,
  FindEventHeaderQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindEventHeaderQuery {
    event(id: 1) {
      id
      name
      date
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindEventHeaderQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  event,
}: CellSuccessProps<FindEventHeaderQuery, FindEventHeaderQueryVariables>) => {
  return <div>{JSON.stringify(event)}</div>
}
