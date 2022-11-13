import { GetServerSideProps } from 'next'
import { Box } from '@chakra-ui/react'
import { useState } from 'react'

import { httpClient } from '../../lib/httpClient'
import { ScreeningRoom } from '../../types/ScreeningRoom'
import { generateSeats } from '../../utils/generateSeats'
import { Seat } from '../../types/Seat'
import { SeatsPlan } from '../../components/Screenings/SeatsPlan/SeatsPlan'
import { ScreenIndicator } from '../../components/Screenings/ScreenIndicator/ScreenIndicator'

type Props = {
  screeningRoom: ScreeningRoom
  seats: Seat[][]
}

const Screening = ({ screeningRoom, seats }: Props) => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([])

  const handleSeatClick = (seat: string) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats((prev) => prev.filter((s) => s !== seat))
    } else {
      setSelectedSeats((prev) => [...prev, seat])
    }
  }

  return (
    <Box maxWidth="600px" margin="0 auto">
      <ScreenIndicator />
      <SeatsPlan
        seats={seats}
        selectedSeats={selectedSeats}
        onSeatClick={handleSeatClick}
      />
    </Box>
  )
}

export default Screening

export const getServerSideProps: GetServerSideProps = async (context) => {
  const screeningId = context.query.screeningId
  const { data } = await httpClient.get<ScreeningRoom>(
    `/reservations/screening-room/${screeningId}`,
  )

  const seats = generateSeats(
    {
      numberOfSeats: data.room.seatsInRow,
      numberOfRows: data.room.numberOfRows,
    },
    {
      takenSeats: data.takenSeats,
      reservedSeats: data.reservedSeats,
    },
  )

  return {
    props: {
      screeningRoom: data,
      seats,
    },
  }
}
