import { Screening } from './Screening'

export type Repertoire = {
  id: number
  date: string
  createdAt: string
  updatedAt: string
  screenings: Screening[]
}
