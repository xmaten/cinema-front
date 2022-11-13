import { Button } from '@chakra-ui/react'

type Props = {
  content: string
  onClick: () => void
}

export const NextStepButton = ({ onClick, content }: Props) => {
  return (
    <Button
      onClick={onClick}
      display="block"
      marginTop="30px"
      marginLeft="auto"
    >
      {content}
    </Button>
  )
}
