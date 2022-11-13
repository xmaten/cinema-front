import Image from 'next/image'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { format } from 'date-fns'
import Link from 'next/link'

import { Screening as ScreeningType } from '../../../types/Screening'

type Props = {
  screening: ScreeningType
}

export const Screening = ({ screening }: Props) => {
  const { movie, startsAt, duration, room } = screening
  return (
    <Flex marginBottom="30px">
      <Image src={movie.posterUrl} alt="" width={100} height={200} />

      <Flex direction="column" marginLeft="10px">
        <Text fontSize="24px" fontWeight="bold">
          {movie.title}
        </Text>
        <Text>Starts at: {format(new Date(startsAt), 'HH:mm')}</Text>
        <Text>Duration: {duration} minutes</Text>
        <Text>Room: {room.name}</Text>
      </Flex>

      <Box marginLeft="auto">
        <Button as={Link} href={`/screening/${screening.id}`}>
          Select seats
        </Button>
      </Box>
    </Flex>
  )
}
