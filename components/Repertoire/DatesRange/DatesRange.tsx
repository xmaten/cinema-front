import { addDays, format, isSameDay } from 'date-fns'
import { Button, Flex, Text } from '@chakra-ui/react'

import { getDatesRange } from '../../../utils/getDatesRange'

type Props = {
  selectedDate: Date
  onDateSelect: (date: Date) => void
}

export const DatesRange = ({ selectedDate, onDateSelect }: Props) => {
  const datesRange = getDatesRange(new Date(), addDays(new Date(), 7))

  return (
    <Flex gap="20px" justifyContent="center">
      {datesRange.map((date) => (
        <Button
          key={date.toString()}
          onClick={() => onDateSelect(date)}
          display="flex"
          flexDirection="column"
          height="auto"
          paddingBlock="10px"
          background={isSameDay(selectedDate, date) ? 'cyan.200' : 'cyan.50'}
        >
          <Text as="span" fontSize="12px">
            {format(date, 'MMM')}
          </Text>
          <Text as="span" fontWeight="bold" marginBlock="5px">
            {format(date, 'dd')}
          </Text>
          <Text as="span" fontSize="12px">
            {format(date, 'yyyy')}
          </Text>
        </Button>
      ))}
    </Flex>
  )
}
