import { NextStepButton } from '../NextStepButton/NextStepButton'

type Props = {
  nextStep: () => void
}

export const SelectingTickets = ({ nextStep }: Props) => {
  return (
    <>
      <NextStepButton onClick={nextStep} content="Go to payment" />
    </>
  )
}
