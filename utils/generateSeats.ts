import { ROWS } from '../const/ROWS'

type Config = {
  numberOfSeats: number
  numberOfRows: number
}

type SeatsStatus = {
  reservedSeats: string[]
  takenSeats: string[]
}

export const generateSeats = (config: Config, seatsStatus: SeatsStatus) => {
  const { numberOfSeats, numberOfRows } = config
  const { reservedSeats, takenSeats } = seatsStatus

  if (!numberOfRows || !numberOfSeats) {
    return []
  }

  let seats = []

  for (let i = 0; i < numberOfRows; i++) {
    const row = []

    for (let j = 0; j < numberOfSeats; j++) {
      const seatName = `${ROWS[i]}${j}`
      let seat = { name: seatName, status: 'free' }

      if (reservedSeats.includes(seatName)) {
        seat = {
          ...seat,
          status: 'reserved',
        }
      } else if (takenSeats.includes(seatName)) {
        seat = {
          ...seat,
          status: 'taken',
        }
      }

      row.push(seat)
    }

    seats.push(row)
  }

  return seats
}
