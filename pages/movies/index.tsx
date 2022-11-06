import { Box, Heading, Text } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import Image from 'next/image'

import { httpClient } from '../../lib/httpClient'
import { Movie } from '../../types/Movie'
import Link from 'next/link'

type Props = {
  movies: Movie[]
}

const Movies = ({ movies }: Props) => {
  if (!movies || movies.length === 0) {
    return null
  }

  return (
    <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap="20px">
      {movies.map((movie) => (
        <Link href={`/movies/${movie.id}`} key={movie.id}>
          <Image src={movie.posterUrl} alt="" width={200} height={200} />
          <Heading>{movie.title}</Heading>
          <Text>{movie.description}</Text>
        </Link>
      ))}
    </Box>
  )
}

export default Movies

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await httpClient.get<Movie[]>(`/movies`)

  return {
    props: {
      movies: data,
    },
  }
}
