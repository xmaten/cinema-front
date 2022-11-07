import { Box } from '@chakra-ui/react'
import { useState } from 'react'

import { Repertoire } from '../types/Repertoire'
import { DatesRange } from '../components/Repertoire/DatesRange/DatesRange'
import { useQuery } from '@tanstack/react-query'
import { httpClient } from '../lib/httpClient'

const Repertoire = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const { data } = useQuery(['repertoire', selectedDate], async () => {
    const { data } = await httpClient.get<Repertoire[]>(
      `/repertoire/${selectedDate.toISOString()}`,
    )

    return data
  })

  console.log(data)

  return (
    <Box>
      <DatesRange selectedDate={selectedDate} onDateSelect={setSelectedDate} />
    </Box>
  )
}

export default Repertoire
