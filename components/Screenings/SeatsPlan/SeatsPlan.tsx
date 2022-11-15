import { Button, Grid } from '@chakra-ui/react'

import { getSeatStyle } from './getSeatStyle'
import { Seat } from '../../../types/Seat'
import { SelectedTicket } from '../../../types/SelectedTicket'

type Props = {
  seats: Seat[][]
  selectedTickets: SelectedTicket[]
  onSeatClick: (seat: string) => void
}

export const SeatsPlan = ({ seats, selectedTickets, onSeatClick }: Props) => {
  const seatsNames = selectedTickets.map((seat) => seat.seat)

  return (
    <Grid gridTemplateRows={`repeat(${seats.length}, 1fr)`} gap="10px">
      {seats.map((row, index) => (
        <Grid
          gridTemplateColumns={`repeat(${row.length}, 1fr)`}
          gap="10px"
          key={index}
        >
          {row.map((seat) => (
            <Button
              onClick={() => onSeatClick(seat.name)}
              key={seat.name}
              isDisabled={seat.status === 'taken' || seat.status === 'reserved'}
              {...getSeatStyle(seat.status, seatsNames.includes(seat.name))}
            >
              {seat.name}
            </Button>
          ))}
        </Grid>
      ))}
    </Grid>
  )
}
