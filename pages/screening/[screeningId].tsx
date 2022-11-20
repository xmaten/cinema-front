import { GetServerSideProps } from 'next'
import { Box, Button } from '@chakra-ui/react'
import { useState } from 'react'

import { httpClient } from '../../lib/httpClient'
import { ScreeningRoom } from '../../types/ScreeningRoom'
import { generateSeats } from '../../utils/generateSeats'
import { Seat } from '../../types/Seat'
import { SelectingSeats } from '../../components/Screenings/SelectingSeats/SelectingSeats'
import { SelectingTickets } from '../../components/Screenings/SelectingTickets/SelectingTickets'
import { SelectedTicket, TicketType } from '../../types/SelectedTicket'
import { useMutation } from '@tanstack/react-query'

type Props = {
  screeningRoom: ScreeningRoom
  seats: Seat[][]
}

type ReserveSeatsPayload = {
  seats: string[]
  screeningRoomId: number
}

const Screening = ({ screeningRoom, seats }: Props) => {
  const [step, setStep] = useState<'seats' | 'tickets' | 'payment'>('seats')
  const [selectedTickets, setSelectedTickets] = useState<SelectedTicket[]>([])
  const reserveSeatsMutation = useMutation((seats: ReserveSeatsPayload) =>
    httpClient.post('/reservations/start', seats),
  )

  const handleSeatClick = (seat: string) => {
    const seats = selectedTickets.map((seat) => seat.seat)

    if (seats.includes(seat)) {
      setSelectedTickets((prev) => prev.filter((s) => s.seat !== seat))
    } else {
      setSelectedTickets((prev) => [...prev, { seat, type: 'adult' }])
    }
  }

  const handleChangeTicketType = (type: TicketType, ticket: SelectedTicket) => {
    const newTickets = selectedTickets.map((t) => {
      if (t.seat === ticket.seat) {
        return {
          ...t,
          type,
        }
      }

      return t
    })

    setSelectedTickets(newTickets)
  }

  const handleSeatsSelected = () => {
    const seats = selectedTickets.map((ticket) => ticket.seat)
    const payload = {
      seats,
      screeningRoomId: screeningRoom.id,
    }

    reserveSeatsMutation.mutate(payload, {
      onSuccess() {
        setStep('tickets')
      },
    })
  }

  //TODO: Add steps indicator
  return (
    <Box maxWidth="600px" margin="0 auto">
      {step === 'seats' && (
        <SelectingSeats
          seats={seats}
          selectedTickets={selectedTickets}
          onSeatClick={handleSeatClick}
          nextStep={handleSeatsSelected}
        />
      )}

      {step === 'tickets' && (
        <SelectingTickets
          nextStep={() => setStep('payment')}
          selectedTickets={selectedTickets}
          onChangeTicketType={handleChangeTicketType}
        />
      )}
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
