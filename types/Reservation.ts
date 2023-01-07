import { Screening } from './Screening'

export type Reservation = {
  status: number
  screening: Screening
  id: number
  createdAt: string
  updatedAt: string
}
