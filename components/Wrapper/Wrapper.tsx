import { Box } from '@chakra-ui/react'

type Props = {
  children: React.ReactNode
}

export const Wrapper = ({ children }: Props) => {
  return (
    <Box maxWidth="1300px" margin="0 auto" paddingTop="20px">
      {children}
    </Box>
  )
}
