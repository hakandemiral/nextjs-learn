import { parseISO, format } from 'date-fns'

export default ({ dateString }) => {
  const date = parseISO(dateString);

  return <time dateTime={dateString}>{format(date, 'LLL d, yyyy')}</time>
}