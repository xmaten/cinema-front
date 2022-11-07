import { eachDayOfInterval } from 'date-fns'

export const getDatesRange = (startDate: Date, endDate: Date) => {
  return eachDayOfInterval({
    start: new Date(startDate),
    end: new Date(endDate),
  })
}
