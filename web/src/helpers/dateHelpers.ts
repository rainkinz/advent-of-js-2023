import { formatRelative } from 'date-fns'

export const prettifyDate = (dateString) => {
  const baseDate = new Date()
  const date = new Date(dateString)
  return formatRelative(date, baseDate)
}

export const formatDateFromDBForInput = (dateString) => {
  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}
