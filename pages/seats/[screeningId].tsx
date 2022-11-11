import { GetServerSideProps } from 'next'
import { httpClient } from '../../lib/httpClient'
import { Movie } from '../../types/Movie'
import { ScreeningRoom } from '../../types/ScreeningRoom'

const SeatsForScreening = () => {
  return <p>Seats for screening</p>
}

export default SeatsForScreening

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context.query.id)
  const { data } = await httpClient.get<ScreeningRoom>(`/screening-room/1`)

  return {
    props: {
      movies: data,
    },
  }
}
