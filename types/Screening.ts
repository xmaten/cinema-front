import { Room } from './Room'
import { Movie } from './Movie'

export type Screening = {
  id: number
  startsAt: string
  duration: number
  createdAt: string
  updatedAt: string
  room: Room
  movie: Movie
}
