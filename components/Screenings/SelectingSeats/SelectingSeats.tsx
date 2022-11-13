import { ScreenIndicator } from '../ScreenIndicator/ScreenIndicator'
import { SeatsPlan } from '../SeatsPlan/SeatsPlan'
import { NextStepButton } from '../NextStepButton/NextStepButton'
import { Seat } from '../../../types/Seat'

type Props = {
  seats: Seat[][]
  selectedSeats: string[]
  onSeatClick: (seat: string) => void
  nextStep: () => void
}

export const SelectingSeats = ({
  selectedSeats,
  seats,
  onSeatClick,
  nextStep,
}: Props) => {
  return (
    <>
      <ScreenIndicator />
      <SeatsPlan
        seats={seats}
        selectedSeats={selectedSeats}
        onSeatClick={onSeatClick}
      />
      {selectedSeats.length > 0 && (
        <NextStepButton onClick={nextStep} content="Select tickets types" />
      )}
    </>
  )
}
