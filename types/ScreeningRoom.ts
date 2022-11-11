import { Room } from './Room'
import { Screening } from './Screening'

export type ScreeningRoom = {
  id: number
  reservedSeats: string[]
  takenSeats: string[]
  createdAt: string
  updatedAt: string
  room: Room
  screening: Screening
}
