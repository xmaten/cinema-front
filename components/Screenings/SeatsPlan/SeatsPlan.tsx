import { Button, Grid } from '@chakra-ui/react'
import { Seat } from '../../../types/Seat'
import { getSeatStyle } from './getSeatStyle'

type Props = {
  seats: Seat[][]
}

export const SeatsPlan = ({ seats }: Props) => {
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
              {...getSeatStyle(seat.status)}
              key={seat.name}
              isDisabled={seat.status === 'taken' || seat.status === 'reserved'}
            >
              {seat.name}
            </Button>
          ))}
        </Grid>
      ))}
    </Grid>
  )
}
