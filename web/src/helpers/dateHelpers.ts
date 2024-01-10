import { formatRelative } from 'date-fns'

export const prettifyDate = (dateString) => {
  const baseDate = new Date()
  const date = new Date(dateString)
  return formatRelative(date, baseDate)
}
