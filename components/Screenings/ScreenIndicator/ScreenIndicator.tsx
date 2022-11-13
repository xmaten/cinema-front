import { Box, Text } from '@chakra-ui/react'

export const ScreenIndicator = () => {
  return (
    <Box marginBottom="50px">
      <Box backgroundColor="gray.500" height="4px" width="100%" />
      <Text
        textAlign="center"
        marginTop="5px"
        textTransform="uppercase"
        fontWeight="bold"
      >
        Screen
      </Text>
    </Box>
  )
}
