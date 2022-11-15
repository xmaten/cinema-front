import { ScreenIndicator } from '../ScreenIndicator/ScreenIndicator'
import { SeatsPlan } from '../SeatsPlan/SeatsPlan'
import { NextStepButton } from '../NextStepButton/NextStepButton'
import { Seat } from '../../../types/Seat'
import { SelectedTicket } from '../../../types/SelectedTicket'

type Props = {
  seats: Seat[][]
  selectedTickets: SelectedTicket[]
  onSeatClick: (seat: string) => void
  nextStep: () => void
}

export const SelectingSeats = ({
  selectedTickets,
  seats,
  onSeatClick,
  nextStep,
}: Props) => {
  return (
    <>
      <ScreenIndicator />
      <SeatsPlan
        seats={seats}
        selectedTickets={selectedTickets}
        onSeatClick={onSeatClick}
      />
      {selectedTickets.length > 0 && (
        <NextStepButton onClick={nextStep} content="Select tickets types" />
      )}
    </>
  )
}
