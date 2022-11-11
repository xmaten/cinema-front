import { Box } from '@chakra-ui/react'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import { Repertoire } from '../types/Repertoire'
import { DatesRange } from '../components/Repertoire/DatesRange/DatesRange'
import { httpClient } from '../lib/httpClient'
import { Screening } from '../components/Repertoire/Screening/Screening'
import { NoScreenings } from '../components/Repertoire/NoScreenings/NoScreenings'

const constructApiDate = (date: Date) => {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}

const Repertoire = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const { data } = useQuery(['repertoire', selectedDate], async () => {
    const { data } = await httpClient.get<Repertoire>(
      `/repertoire/${constructApiDate(selectedDate)}`,
    )

    return data
  })

  return (
    <Box>
      <DatesRange selectedDate={selectedDate} onDateSelect={setSelectedDate} />

      <Box marginTop="50px" width="75%" marginInline="auto">
        {!data ? (
          <NoScreenings />
        ) : (
          data?.screenings.map((screening) => (
            <Screening key={screening.id} screening={screening} />
          ))
        )}
      </Box>
    </Box>
  )
}

export default Repertoire
