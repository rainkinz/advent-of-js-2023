import type {
  FindEventHeaderQuery,
  FindEventHeaderQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Button from 'src/components/Button/Button'
import Icon from 'src/components/Icon/Icon'
import { prettifyDate } from 'src/helpers/dateHelpers'

export const QUERY = gql`
  query FindEventHeaderQuery {
    event(id: "1") {
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
  return (
    <>
      <h3 className="font-handwriting text-4xl uppercase text-white">
        {prettifyDate(event.date)}
      </h3>
      <div className="flex items-center gap-3">
        <h1 className="m-0 flex-1 p-0 font-condensed text-[166px] uppercase leading-[0.8] text-white">
          {event.name}
        </h1>
        <button className="text-white dark:text-white">
          <Icon id="edit" />
        </button>
        <Button size="small" className="bg-supernova text-black">
          Match
        </Button>
      </div>
    </>
  )
}
